

import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { toString } from "hast-util-to-string" // You might need to install this or use a simple loop


function parsePlotData(input: string): Record<string, string> {// Inside your visit(tree, "element", ...) loop:
  const parts = input.split("---")
  const metadataStr = parts.length > 2 ? parts[1] : ""
  const functionStr = parts.length > 2 ? parts[2] : parts[0]

  const data: Record<string, any> = {
    title: "",
    xLabel: "",
    yLabel: "",
    disableZoom: "false",
    grid: "false",
    bounds: "[-10,10,-10,10]",
    fns: []
  }

  // Parse metadata
  metadataStr.split("\n").forEach(line => {
    const [key, ...valParts] = line.split(":")
    if (!valParts.length) return {};
    
    const value = valParts.join(":").trim()
    const k = key.trim()

    if (k === "title") data.title = value
    if (k === "xLabel") data.xLabel = value
    if (k === "yLabel") data.yLabel = value
    if (k === "disableZoom") data.disableZoom = value === "true"
    if (k === "grid") data.grid = value === "true"
    if (k === "bounds") data.bounds = value
  })

  data.fn = functionStr.split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => line.includes("=") ? line.split("=")[1].trim() : line)

  return Object.fromEntries(
    Object.entries(data).map(([k, v]) => [
      `data-${k.toLowerCase()}`, 
      typeof v === 'string' ? v : JSON.stringify(v)
    ])
  )
}

export const FunctionPlot: QuartzTransformerPlugin = () => {
  return {
    name: "FunctionPlot",
    htmlPlugins() {
      return [
        () => (tree) => {
          visit(tree, "element", (node, index, parent) => {
            if (node.tagName === "code") {
              const properties = node.properties || {}
              const dataLang = properties["dataLanguage"] as string
              const className = (properties.className as string[]) || []

              if (dataLang === "functionplot" || className.includes("language-functionplot")) {
                if (parent && index !== undefined) {
                  parent.children[index] = {
                    type: "element",
                    tagName: "div",
                    properties: {
                      className: ["function-plot-container"],
                      ...parsePlotData(toString(node)),
                    },
                    children: [],
                  }
                }
              }
            }
          })
        },
      ]
    },
    externalResources() {
      return {
        css: [
          {
            inline: true,
            content: `
/* Grid lines (horizontal and vertical) */
.function-plot .tick line {
  stroke: var(--dark);
  stroke-opacity: 1;
}

/* Main axis lines */
.function-plot path.origin {
  stroke: var(--dark);
  opacity: 0.2;
  stroke-opacity: 1;
}
            `
          }
        ],
        js: [
          {
            src: "https://unpkg.com/function-plot/dist/function-plot.js",
            loadTime: "afterDOMReady",
            moduleType: "module",
            contentType: "external",
          },
          {
            loadTime: "afterDOMReady",
            contentType: "inline",
            script: `
document.addEventListener("nav", () => {
  const containers = document.querySelectorAll(".function-plot-container");
  
  containers.forEach((container) => {
    const title = container.getAttribute("data-title");
    const xLabel = container.getAttribute("data-xlabel");
    const yLabel = container.getAttribute("data-ylabel");
    const grid = container.getAttribute("data-grid") === "true";
    const disableZoom = container.getAttribute("data-disablezoom") === "true";
    const bounds = JSON.parse(container.getAttribute("data-bounds") || "[-10,10,-10,10]");
    const fns = JSON.parse(container.getAttribute("data-fn") || "[]");
    
    const width = container.clientWidth || 500;
    const height = 500;

    // Maintain 1:1 aspect ratio
    const xScale = [bounds[0], bounds[1]];
    const xRange = xScale[1] - xScale[0];
    const yRange = (height / width) * xRange;
    const yScale = [-yRange / 2, yRange / 2];
    
    window.functionPlot({
      target: container,
      title: title,
      xAxis: { label: xLabel, domain: xScale },
      yAxis: { label: yLabel, domain: yScale },
      disableZoom: disableZoom,
      grid: true,
      width: width,
      height: height,
      data: fns.map(f => ({ fn: f, graphType: 'polyline' }))
    });
  });
});
`
          }
        ],
      }
    },
  }
}