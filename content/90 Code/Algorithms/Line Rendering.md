---
publish: true
tags:
  - todo
aliases:
---

## Overview

### Table of contents

```dataviewjs
const file = app.workspace.getActiveFile();
if (file) {
    const cache = app.metadataCache.getFileCache(file);
    const headings = cache.headings;

    if (headings) {
	    if (headings[0].heading.contains("Table of Content"))
		    headings.shift();
		
	    //console.log(headings);
        const toc = headings.map(heading => {
            // Create indentation based on heading level
            const indent = "  ".repeat(heading.level - 1);
            // Create a markdown link to the heading
            return `${indent}- [[#${heading.heading}|${heading.heading}]]`;
        }).join("\n");

        dv.paragraph(toc);
    } else {
        dv.paragraph("No headings found in this note.");
    }
}
```

## Digital Differential Analyzer (DDA) Line

## Bresenhams line

Main feature:

- ==No floats! Only uses int==
  - No floating-point drifting
  - Faster sometimes (Especially on older hardware)

Derivation & Visualisation:

- [YouTube - Animated explanation of Bresenhams line algo by NoBS Code](https://www.youtube.com/watch?v=CceepU1vIKo)

### Example - Minimum Example

Only handles when slope ($m$ in $y=mx+c$) is in the range \[0, 1].

- Doesn't handle negative slopes
- Doesn't handle steep slopes (m > 1)

```cpp
#include <iostream>

constexpr int SIZE_X = 20;
constexpr int SIZE_Y = 20;
bool grid[SIZE_X * SIZE_Y] {};

// Set pixel at (x,y) to true
void setPixel(int x, int y) 
{
    grid[y * SIZE_X + x] = true;
}

void drawLine(int x0, int y0, int x1, int y1) 
{
    int dx = x1 - x0;
    int dy = y1 - y0;

    if (dx == 0) 
        return;

    int y = y0;
    int D = 2 * dy - dx;
    for (int x = 0; x < dx + 1; x++)
    {
        setPixel(x, y);

        if (D > 0) 
        {
            ++y;
            D -= 2 * dx;
        }

        D += 2 * dy;
    }
}

int main() 
{
    drawLine(0, 0, 10 ,2);

    // Print grid
    for (int y = 0; y < SIZE_Y; y++)
    {
        for (int x = 0; x < SIZE_X; x++)
            std::cout << grid[y * SIZE_X + x];

        std::cout << "\n";
    }
}
```

Output:

```
1110000000
0001111100
0000000011
1000000000
0000000000
0000000000
0000000000
0000000000
0000000000
0000000000
```

## Links

- [Redblob games](https://www.redblobgames.com/grids/line-drawing/)
  - [Grid Walking](https://www.redblobgames.com/grids/line-drawing/#stepping)
- [jcd.pub - games guide to line algorithms](https://jcd.pub/2025/04/10/the-gamers-guide-to-line-algorithms/).
  - [Linear Interpolation Line](https://jcd.pub/2025/04/10/the-gamers-guide-to-line-algorithms/#linear-interpolation-line)
  - [Digital Differential Analyzer (DDA)](https://jcd.pub/2025/04/10/the-gamers-guide-to-line-algorithms/#digital-differential-analyzer-line)
  - [Bresenhams line](https://jcd.pub/2025/04/10/the-gamers-guide-to-line-algorithms/#bresenhams-line)
- [Youtube - Animated explanation of Bresenhams line algo by NoBS Code](https://www.youtube.com/watch?v=CceepU1vIKo)

### Related notes

- [[Grid Raycasting]]
