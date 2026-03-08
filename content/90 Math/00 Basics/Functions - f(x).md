---
publish: true
created: 2026-01-10T11:41:03.085+08:00
modified: 2026-03-01T16:59:58.416+08:00
published: 2026-03-01T16:59:58.416+08:00
cssclasses: ""
math-level: 3 - Uni Yr 1
---


Related notes:
- [[90 Math/04 Matrix/2. Matrix and Linear Transformation\|Matrix transformations]] - Functions for points/vectors
## Concepts
$f(x) = x+1$, can be treated as $y=x+1$

### Composite Function
$fg(x)=f(g(x))$
So to get the expression for $fg(x)$,
1. solve for $g(x)$, 
2. set output of $g(x)$ as the input of $f(x)$ then solve it.

> [!WARNING] Order matters
> $fg(x)\neq gf(x)$

> [!NOTE] Alt syntax
> $fg(x)=(f \circ g)(x)$
>--------------^ circle

#### Composite Function Example
Given these 3 functions:
- $f(x)=x^2-1$
- $g(x)=\frac{x-1}{x+5}$
- $h(x)=\sqrt{ x+1 }$

Compositing the functions:
1. $fg(x)$

$$
\begin{align}
fg(x)&=f\left( \frac{x-1}{x+5} \right) \\ 
&=\left( \frac{x-1}{x+5} \right)^2-1
\end{align}
$$
2. $fh(x)$
$$
\begin{align}
fh(x)&=f(\sqrt{ x+1 }) \\
&=(\sqrt{ x+1 })^2-1 \\
&=x+1-1 \\
&=x
\end{align}
$$
NOTE: Since $fh(x)$ gives x, it means that $f(x)$ and $g(x)$ are [[90 Math/00 Basics/Functions - f(x)#Inverse Functions]]. See [[90 Math/00 Basics/Functions - f(x)#Inverse Function\|Inverse Function Example]].

### Inverse Function
Syntax: $f^{-1}(x)$
To solve,
1. Write out the whole equation as $f(x)$ but substitute $f(x)$ with $y$
2. Swap $x$ and $y$
3. Solve y

> [!INFO] Inverse functions reflect about $y=x$

> [!WARNING] Not all functions have inverse
> To test, either:
> - Imagine plotting the graph, then draw a horizontal line on anywhere on the function. If there's > 1 intersection between the horizontal line and the function, 
> - Or try solving. If can't solve, no inverse
> 
> Why? 
> ==Because functions can only have 1 output== 
> See [[90 Math/00 Basics/Functions - f(x)#Inverse Function Example (When **cannot** inverse)\|Example below]]

#### Inverse Function Example 
Let $f(x)=x^3-1$, find the expression for $f^{-1}(x)$
$$
\begin{align}
f(x)&=x^3-1 \\
y&=x^3-1 \\
\end{align}
$$
Swap x and y
$$
\begin{align}
x&=y^3-1 \\
y^3&=x+1 \\ \\
y&=\sqrt[3]{ x+1 } \\
f^{-1}(x)&=\sqrt[3]{ x+1 }
\end{align}
$$
Since there's 2 outputs, it's **not** a valid function

#### Inverse Function Example (When **cannot** inverse)
Let $f(x)=x^2-1$, find the expression for $f^{-1}(x)$
$$
\begin{align}
f(x)&=x^2-1 \\
y&=x^2-1 \\
\end{align}
$$
Swap x and y
$$
\begin{align}
x&=y^2-1 \\
y^2&=x+1 \\
y&=\pm\sqrt{ x+1 } \\
f^{-1}(x)&=\pm\sqrt{ x+1 }
\end{align}
$$
Since there's 2 outputs, it's **not** a valid function

### Identity Function
When swapping the order $f$ and $g$ both gets the initial $x$, it's an Identity Function
$$
(f \circ g)(x) = (g \circ f)(x) = x
$$
For example, 
Multiplying a function with it's [[90 Math/00 Basics/Functions - f(x)#Inverse Function]] - $(f \circ f^{-1})(x)$  results in $x$

## Transforming functions
You can composite the functions to shift, scale and reflect 
For the examples below, let $f(x)=x^2+c$
### Summary

|                          | Vertically    | Horizontally  | Comments                                           |
| ------------------------ | ------------- | ------------- | -------------------------------------------------- |
| Shift                    | $g(x)=f(x)+c$ | $g(x)=f(x+c)$ |                                                    |
| Stretch &<br>Compression | $g(x)=cf(x)$  | $g(x)=f(cx)$  | If $c<0$, it'll flip<br>If $0<c<1$, it'll compress |
### Transforming vertically vs horizontally
- To transform **vertically**: Modify the result. 
- To transform **horizontally**: Modify the parameter - x.

> [!WARNING] Transforming horizontally is opposite of what's expected
> $g(x)=f(x-3)$ will shift the graph **up** by 3 units
> For example, 
> - Let $x=0$, y will be -3
> - Let $x=3$, y will be 0
>
> This also happens with stretching. 
> $g(x)=f(2x)$ will **compress** the graph by half

### Transform types
- **Shift**: $g(x)=f(x)+c$
- **Stretch**: $g(x)=cf(x)$

### Visualisation
Try to modify 
- c for shifting
- d for stretching
![](https://www.desmos.com/calculator/aql9cewhhu)
Stretching might be hard to notice but it's scaling the graph horizontally/vertically depending if it's multiplied to the parameter/result
## Terminology - Intervals
- **Domain**: Range of input - $x$
- **Range**: Range of result - $y$

Given: $f(x) = \sqrt{ x }$
- Domain: $[0, \infty)$
- Range: $[0, \infty)$

### For graphs
- Open dot = Point excluded
- Closed dot = Point included



