---
publish: true
aliases:
  - glm::lookat
  - View Transformation
  - View Space
  - View Matrix
created: 2026-07-18T02:37:24.077Z
modified: 2026-08-04T00:57:19.218Z
published: 2026-08-04T00:57:19.218Z
tags:
  - todo
---

## Derivation

### Initial vectors

Given:

- $E$ - Eye Position
- $T$ - Target Position
- $\vec{u_{up}}$ - Up Vector (This is the general upward vector, usually $(0,1,0)$. Will find actual up vector later)

Derive the 3 orthonormal basis vectors ($u,v,w$) which represents the camera's local axis:

| Name              | Formula                                                                     | Description                                                                                                                                                                                                                                |
| ----------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Back ($\vec{w}$)  | $\vec{w} = \frac{E-T}{\|E-T\|}$                                             | Points opposite to view direction.<br>Needs to be Opposite to keep right-hand rule.<br><br>Represents $z$-axis from the camera's POV                                                                                                       |
| Right ($\vec{u}$) | $\vec{u}=\frac{\vec{u_{up}}\times \vec{w}}{\|\vec{u_{up}}\times \vec{w}\|}$ | Perpendicular to both $\vec{u_{up}}$ and $\vec{w}$<br><br>Represents $x$-axis from the camera's POV                                                                                                                                        |
| Up ($\vec{v}$)    | $\vec{v}=w\times u$                                                         | Perpendicular to both $\vec{w}$ and $\vec{u}$<br>This is the actual up vector, perpendicular to the other 2 axes.<br>The initial up vector might not be perpendicular so need to do this.<br><br>Represents $y$-axis from the camera's POV |
Related note: [[Camera Transformations]]

### View Transform Matrix

Using [[#Inverse of View Transform Matrix]]:

$$
\begin{align}
M_{view} &= {M_{cam}}^{-1} \\
&= (T_{cam} \cdot R_{cam}) ^ {-1} \\
&= {R_{cam}}^{-1} \cdot {T_{cam}}^{-1}
\end{align}
$$

#### Inverse Translation

Simply negate the translation vector:

$$
{T_{cam}}^{-1} = \begin{bmatrix} 
1 & 0 & 0 & -e_x \\
0 & 1 & 0 & -e_y \\
0 & 0 & 1 & -e_z \\
0 & 0 & 0 & 1 \\
\end{bmatrix}
$$

#### Inverse Rotation

Inverse of pure rotation matrix is it's transpose ($R^{-1} = R^T$)

$$
{R_{cam}}^{-1} = \begin{bmatrix} 
u_x & u_y & u_z & 0 \\
v_x & v_y & v_z & 0 \\
w_x & w_y & w_z & 0 \\
0 & 0 & 0 & 1 \\
\end{bmatrix}
$$

#### Result

$$
\begin{align}
M_{view} &= R^{-1} \cdot T^{-1} \\
&=\begin{bmatrix} 
u_x & u_y & u_z & 0 \\
v_x & v_y & v_z & 0 \\
w_x & w_y & w_z & 0 \\
0 & 0 & 0 & 1 
\end{bmatrix} 
\begin{bmatrix} 
1 & 0 & 0 & -e_x \\
0 & 1 & 0 & -e_y \\
0 & 0 & 1 & -e_z \\
0 & 0 & 0 & 1 \end{bmatrix} \\
&= \begin{bmatrix} 
u_x & u_y & u_z & -\vec{u} \cdot \vec{e} \\
v_x & v_y & v_z & -\vec{v} \cdot \vec{e} \\
w_x & w_y & w_z & -\vec{w} \cdot \vec{e} \\
0 & 0 & 0 & 1 \end{bmatrix}
\end{align}
$$

### Inverse of View Transform Matrix

Building the Camera $\to$ World matrix:

- $R_{cam}$ - Rotate the camera so it's local axis $(u,v,w)$ aligns with the world axis.
- $T_{cam}$ - Translate the camera to it's world position

$$
M_{cam} = T_{cam} \cdot R_{cam}
$$

#### Rotation

Using [[#Initial vectors]],
Put the camera's orthonormal vectors ($u,v,w$) in each of the columns to align it.
Remember [[2. Matrix and Linear Transformation#Meaning of each column in matrix - ==IMPT==!|Meaning of each column in a matrix]], each column of the matrix represents the result of what the $x, y, z$ axis will result in after the transformation.

$$
R_{cam} = \begin{bmatrix}
u_x & v_x & w_x & 0 \\ 
u_y & v_y & w_y & 0 \\
u_z & v_z & w_z & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

#### Translation

Translate to the camera's eye

$$$
T_{camera} = \begin{bmatrix}
1 & 0 & 0 & e_x \\
0 & 1 & 0 & e_y \\
0 & 0 & 1 & e_z \\
0 & 0 & 0 & 1 
\end{bmatrix}$$

#### Result
$$$

\begin{align}
M\_{camera} &= T\_{cam} \cdot R\_{cam} \\
&= \begin{bmatrix}
u\_x & v\_x & w\_x & e\_x \\
u\_y & v\_y & w\_y & e\_y \\
u\_z & v\_z & w\_z & e\_z \\
0 & 0 & 0 & 1
\end{bmatrix}
\end{align}

$$

## Links
### Related Notes
- [[Camera Transformations]]

$$
