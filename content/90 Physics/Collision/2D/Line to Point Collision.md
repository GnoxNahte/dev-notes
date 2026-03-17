---
publish: true
created: 2026-03-17T22:25:16.266+08:00
modified: 2026-03-17T22:45:05.655+08:00
published: 2026-03-17T22:45:05.655+08:00
cssclasses: ""
---


## Example
Given a wall with 2 points ($W_\text{start}, W_\text{end}$) and a point $P$, determine if it collides

Steps:
- [[90 Physics/Collision/2D/Line to Point Collision#Get Wall Normal]]
- Compare 

### Get Wall Normal
From [[90 Math/03 Vectors/1. Vector - Basics (2D)#Making a normal vector\|Making a normal vector]]:

### Making a normal vector
In 2 steps:
1. Swap $x$ and $y$
2. Negate either the $x$ or $y$
	- Negate $x$ to rotate $90^{\circ}$ anti-clockwise
	- Negate $y$ to rotate $90^{\circ}$ clockwise

> [!Example]
> $\vec{d} = \begin{bmatrix}2\\3\end{bmatrix}$
> 
> $\vec{n}=\begin{bmatrix}3\\-2\end{bmatrix}$


### Checking if the point is on line


Equation: $\hat{n}_w\cdot P - n$ 

| Type | Result |
| ---- | ------ |
|      |        |






