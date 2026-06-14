---
publish: true
created: 2026-02-04T21:00:52.292+08:00
modified: 2026-02-21T15:49:38.949+08:00
published: 2026-02-21T15:49:38.949+08:00
tags:
  - todo
---

## Formula

Given $f(x)$, the tangent line at $(a, f(a))$ is:

$$
y=f\,'(a)(x-a) + f(a)
$$

where $a$ is the x-coordinate.

## Visualisation

![](https://www.desmos.com/calculator/hqbzzzlink)

## Derivation

Equation of straight line is:

$$
y=mx+c
$$

Gradient of line at $a$ is $f\,'(a)$:

$$
y=f\,'(a)x+c
$$

Line intersects at $(a, f(a))$, so sub into equation above $y=f\,'(a)x+c$

$$
\begin{align}
f(a)&=f\,'(a)a + c \\
c &= f(a)-f\,'(a)a
\end{align}
$$

Sub $c$ back into original equation $y=f\,'(a)x+c$

$$
\begin{align}
y&=f\,'(a)x+f(a)-f\,'(a)a \\
y&=f\,'(a)(x-a)+f(a)
\end{align}
$$

## See also

- [[05 Implicit differentiation#Tangent line|Tangent line for implicit graphs (Like circles)]]
