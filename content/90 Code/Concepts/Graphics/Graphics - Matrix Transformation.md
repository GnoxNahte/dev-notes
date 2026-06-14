---
publish: true
aliases:
  - MVP
  - SRT
  - TRS
created: 2026-06-02T21:30:01.978+08:00
modified: 2026-06-06T22:56:47.375+08:00
published: 2026-06-06T22:56:47.375+08:00
tags:
  - todo
cssclasses:
  - img-fill-transparent-bg
---

## Overview

![[90 Code/z_Images/OpenGL/LearnOpenGL - Coordinate Systems.png]]
Image from: [Learn OpenGL - Coordinate Systems](https://learnopengl.com/Getting-started/Coordinate-Systems)

## Breakdown

### MVP - Model View Projection

$$
M = M_{\text{proj}} \cdot M_{\text{view}} \cdot M_{\text{model}}
$$

### Model - Model to World

Most common Matrix order: **SRT**

- Translate (if the model has a different pivot)
- Scale
- Rotation
- Translate

> [!NOTE] If the model has a different pivot, then translate to the other pivot before scaling

$$
M_{\text{model}} = M_T \cdot M_R \cdot M_S
$$

> [!IMPORTANT] Order in matrix calculation is M=TRS because...
> When getting the resulting vector, it goes through this order:
>
> $$
> \begin{align}
> \vec{v_2}&=(M_T \ (M_R \ (M_S \cdot \vec{v_1}))) \\
> &=(M_T \cdot M_R \cdot M_S) \vec{v_1}
> \end{align}
> $$
>
> [[1. Matrix Basics - Notation, Multiply, Inverse, Determinant#^354ab8]]

### View - World to Camera

Let camera properties be:

- $\vec{r}$ - Right vector
- $\vec{u}$ - Up vector
- $\vec{p}$ - Position vector

$$
M_{\text{view}}=
\begin{bmatrix}
r_x & r_y & -\vec{p} \cdot \vec{r} \\
u_x & u_y & -\vec{p} \cdot \vec{u} \\
0 & 0 & 1
\end{bmatrix}
$$

This is derived from the inverse of [[#Camera to World]].

### Projection - Camera to NDC

Let window properties be:

- $w$ = width
- $h$ = height

$$
M_{\text{proj}}=
\begin{bmatrix}
\frac{2}{w} & 0 & 0 \\
0 & \frac{2}{h} & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

Scale by 2 because NDC's size is 2 as the range is: \[-1, 1]

## Inverse matrices

### Camera to World

Let camera properties be:

- $\vec{r}$ - Right vector
- $\vec{u}$ - Up vector
- $\vec{p}$ - Position vector

$$
M_{\text{cam}}=
\begin{bmatrix}
r_x & u_x & p_x \\
r_y & u_y & p_y \\
0 & 0 & 1
\end{bmatrix}
$$
