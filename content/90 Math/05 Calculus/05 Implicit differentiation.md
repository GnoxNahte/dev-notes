---
publish: true
created: 2026-02-04T22:24:30.516+08:00
modified: 2026-02-07T18:11:45.518+08:00
tags:
  - todo
cssclasses: ""
---


## Example
Given $x^2+y^2=1$, find $\frac{dy}{dx}$.

Differentiate both sides with respect to $x$
$$
\begin{align}
\frac{d}{dx}(x^2+y^2)&=\frac{d}{dx}(1)\\
\frac{d}{dx}x^2+\frac{d}{dx}y^2&=0 \\
2x+2y\cdot \frac{dy}{dx}&=0 \tag{Explained in callout} \\
2y\cdot \frac{dy}{dx}&=-2x \\
\frac{dy}{dx}&=-\frac{x}{y} \\
\end{align}
$$

> [!NOTE] How $\frac{d}{dx}y^2=2y\cdot \frac{dy}{dx}$
> 
> Treat $y$ as an expression, so splitting it using [[90 Math/05 Calculus/03 Differentiation Formulas#Composite Functions\|Chain Rule]], $\frac{d}{dx}y^2$ can be separated into
> - Outer function: $\frac{d}{dx}(\dots)^2=2(\dots)$ 
> - Inner function: $\frac{d}{dx}y=\frac{dy}{dx}$
> 
> Combining using [[90 Math/05 Calculus/03 Differentiation Formulas#Composite Functions\|Chain Rule]] - $\frac{d}{dx}f(g(x))=f\,'(g(x))g\,'(x)$,
> 
> $$
> \begin{align}
> \frac{d}{dx}y^2&=2y \cdot\frac{dy}{dx}
> \end{align}
> $$


> [!EXAMPLE] Another example - Find $\frac{dy}{dx}$ for $x^2+y^2=25$
> 


## Tangent line

