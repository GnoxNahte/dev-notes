---
publish: true
created: 2026-03-20T02:08:45.346Z
modified: 2026-03-27T06:00:11.908Z
published: 2026-03-27T06:00:11.908Z
---

## Table of Contents

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

## Limits

Note: [[01 Limits|Limits]]

### Limit Laws

| Law                 | Function                                                                                                                            |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Constant            | $\lim\limits_{ x \to a }c$                                                                                                          |
| Constant Multiplier | $\lim\limits_{ x \to a }cf=c\lim\limits_{ x \to a }f$                                                                               |
| Add/Sub             | $\lim\limits_{ x \to a }(f\pm g)=\lim\limits_{ x \to a }f\pm \lim\limits_{ x \to a }g$                                              |
| Product             | $\lim\limits_{ x \to a }(f\cdot g)=\lim\limits_{ x \to a }f\cdot \lim\limits_{ x \to a }g$                                          |
| Quotient            | $\lim\limits_{ x \to a }\frac{f}{g}=\frac{\lim\limits_{ x \to a }f}{\lim\limits_{ x \to a }g}$ if $\lim\limits_{ x \to a }g\neq{0}$ |
| Power               | $\lim\limits_{ x \to a }(f^n)=(\lim\limits_{ x \to a }f)^n$ where $n >0$                                                            |

### Techniques to solve Limit equations

Jump to note:

- [[01 Limits#Direct substitution|Direct substitution]]
- [[01 Limits#Factorisation and cancelling|Factorisation and cancelling]]
- [[01 Limits#Conjugate/Rationalization|Conjugate/Rationalization]]
- [[01 Limits#Dividing by higher power (only when $x to infty$ or $- infty$)|Dividing by higher power]]
- [[01 Limits#Definition of derivative|Definition of derivative]]
- [[01 Limits#L'Hôpital's Rule|L'Hôpital's Rule]]

> [!NOTE]- L'Hôpital's Rule
>
> $$
> \lim_{ x \to a } \frac{f(x)}{g(x)}=\lim_{ x \to a } \frac{f\,'(x)}{g\,'(x)}
> $$

## Differentiation

Notes:

- [[02 Differentiation Concepts]]
- [[03 Differentiation Formulas]]

### Base formulas

#### Basic

| Rule     | Function | Derivative | Example                                                                        |
| -------- | -------- | ---------- | ------------------------------------------------------------------------------ |
| Constant | c        | $0$        | $\frac{d}{dx}(3)=0$                                                            |
| Line     | $ax$     | $a$        | $\frac{d}{dx}(7x)=7$                                                           |
| Power    | $x^n$    | $nx^{n-1}$ | $\frac{d}{dx}(5x^3)=15x^2$<br>$\frac{d}{dx}(\sqrt{ x })=\frac{1}{2\sqrt{ x }}$ |

#### Composite Functions

| Rule                | Function      | Derivative                  |
| ------------------- | ------------- | --------------------------- |
| Constant multiplier | $cf$          | $cf\,'$                     |
| Sum and Difference  | $f\pm g$      | $f\,'\pm g\,'$              |
| Product             | $fg$          | $f\,'g+fg\,'$               |
| Quotient            | $\frac{f}{g}$ | $\frac{f\,'g - fg\,'}{g^2}$ |
| Chain Rule          | $f(g(x))$     | $f\,'(g(x))\ g\,'(x)$       |

#### Trigonometry

| Function  | Derivative        |
| --------- | ----------------- |
| $\sin{x}$ | $\cos{x}$         |
| $\cos{x}$ | $-\sin{x}$        |
| $\tan{x}$ | $\sec^{2}{x}$     |
| $\sec{x}$ | $\sec{x}\tan{x}$  |
| $\cot{x}$ | $-\csc^2{x}$      |
| $\csc{x}$ | $-\csc{x}\cot{x}$ |
Related: [[Trigonometry]]

#### Exponents and Logarithms

| Function       | Derivative                     |
| -------------- | ------------------------------ |
| $a^x$          | $a^x\ln a$                     |
| $e^x$          | $e^x$                          |
| $\log_a{x}$    | $\frac{1}{x\ln(a)}$            |
| $\ln x$        | $\frac{1}{x}$                  |
| $\log_a(g(x))$ | $\frac{g\,'(x)}{\ln(a)\,g(x)}$ |
| $\ln(g(x))$    | $\frac{g\,'(x)}{g(x)}$         |

> [!NOTE]- Why no change for $\frac{d}{dx}e^x=e^x$
> Using $\frac{d}{dx}a^x=a^x\ln a$ formula,
>
> $$
> \begin{align}
> \frac{d}{dx}e^x &= e^x\ln e \\
> &= e^x(1) \\
> &= e^x
>
> \end{align}
> $$

Related: [[Exponents]], [[Logarithms]]

### Tangent Line

Given $f(x)$, the tangent line at $(a, f(a))$ is:

$$
y=f\,'(a)(x-a) + f(a)
$$

where $a$ is the x-coordinate.

Note: [[04 Tangent line|Tangent line]]

### Implicit differentiation

Note: [[05 Implicit differentiation]]

### Newton's Method

$$
p_{n+1}\approx p_n-\frac{f(p_n)}{f\,'(p_n)}
$$

Note: [[06 Newton's Law]]

#### Check if there's a root - Intermediate Value Theorem (IVT)

Root exists if $f(a)\cdot f(b) < 0$

#### Newton's Method

$$
p_{n+1}=p_n-\frac{f(p_n)}{f\,'(p_n)}
$$

### Rate of Change

### Global & Local Max

### Curvature of graphs
