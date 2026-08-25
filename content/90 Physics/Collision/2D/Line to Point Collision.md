---
publish: true
created: 2026-03-17T14:25:16.266Z
modified: 2026-03-21T03:16:06.661Z
published: 2026-03-21T03:16:06.661Z
cssclasses:
  - hide-notes-embed-header
---

## Example

Given a wall with 2 points ($W_\text{start}, W_\text{end}$) and a point $P$, determine if it collides

Steps:

- [[#Get Wall Normal]]
- [[#Checking if the point is on line]]

### Get Wall Normal

From [[1. Vector - Basics (2D)#Making a normal vector|Making a normal vector]]:

![[1. Vector - Basics (2D)#Making a normal vector]]

### Checking if the point is on line

If $(\hat{n}\cdot P - \hat{n}\cdot W_\text{start})$ is...,

- $=0$ the point is on the line, move to next step
- $\neq 0$ the point isn't on the line, early return _no collision_

#### Derivation 1 - Math

$$
\hat{n}\cdot(W_\text{start}-P)=(\hat{n}\cdot P - \hat{n}\cdot W_\text{start})
$$

#### Derivation 2 - Visual

![[Line to Point Collision.excalidraw|1200]]

### Check if its in the line
