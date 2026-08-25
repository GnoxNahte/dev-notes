---
publish: true
created: 2026-08-01T02:12:14.543Z
modified: 2026-08-04T00:51:25.003Z
published: 2026-08-04T00:51:25.003Z
tags:
  - todo
---

## Overview

> [!INFO] Perspective Projection isn't a [[2. Matrix and Linear Transformation#Definition|Linear Transformation]] in the 3D space!
> Linear transformation requires parallel lines (e.g. lines in a grid) to stay parallel, but perspective transformation breaks that.
> For example, looking on rails on a train track, the rails converge into a single point. See [[2. Matrix and Linear Transformation#Definition of Matrix Transformations|Matrix Transformation Definition]]
>
> So to represent it as a transformation, use [[5. Homogeneous Coordinates|Homogeneous Coordinates]]

### Formula

#### Method 1 - Using Viewport size

Params:

- $w$ - viewport width
- $h$ - viewport height
- $n$ - near plane distance
- $f$ - far plane distance

$$
M_{proj} = \begin{bmatrix}
\frac{n}{w} & 0 & 0 & 0 \\
0 & \frac{n}{h} & 0 & 0 \\
0 & 0 & -\frac{f + n}{f - n} & -\frac{2fn}{f - n} \\
0 & 0 & -1 & 0 \\
\end{bmatrix}
$$

#### Method 2 - Using FOV

Params:

- $a$ - viewport aspect ratio (width/height)
- $\theta$ - vertical angle (FOV - Field of View)
- $n$ - near plane distance
- $f$ - far plane distance

$$
M_{proj} = \begin{bmatrix}
\frac{1}{a\tan{(\frac{\theta}{2}})} & 0 & 0 & 0 \\
0 & \frac{1}{\tan{(\frac{\theta}{2}})} & 0 & 0 \\
0 & 0 & -\frac{f + n}{f - n} & -\frac{2fn}{f - n} \\
0 & 0 & -1 & 0 \\
\end{bmatrix}
$$

[Interactive Demo](https://webglfundamentals.org/webgl/frustum-diagram.html) by [WebGL Fundamentals](https://webglfundamentals.org/)

## Derivation

### Video

![](https://youtu.be/U0_ONQQ5ZNM?t=317)

> [!NOTE] In the video, he didn't negate the 1 for the last row $(0,0,-1,0)$ as he's doing for Vulkan
> But for OpenGL,

> [!TIP] ==IMPT== Understanding dividing by $z$ visually
> Imagine railroad tracks converging to the center of the screen.
> The further the point is from the camera, the closer to the center of the screen it will be.

### More explanation from the video

$$
M_{proj} = M_{ortho} \cdot M_{perspective}
$$

For $M_{ortho}$, simplify [[03 - Orthographic Projection|Orthographic Projection]] by assuming the we are looking through the center
So:

- right = -left
- bottom = -top

$$
\begin{align}
M_{ortho} &= \begin{bmatrix}
\frac{2}{r-l} & 0 & 0 & -\frac{r+l}{r-l} \\
0 & \frac{2}{t-b} & 0 & -\frac{t+b}{t-b} \\
0 & 0 & -\frac{2}{f-n} & -\frac{f+n}{f-n} \\
0 & 0 & 0 & 1
\end{bmatrix} \\
&= \begin{bmatrix}
w & 0 & 0 & 0 \\
0 & h & 0 & 0 \\
0 & 0 & -\frac{2}{f-n} & -\frac{f+n}{f-n} \\
0 & 0 & 0 & 1
\end{bmatrix} \\
\end{align}
$$

For $M_{perspective}$, we want objects that are further to appear closer to the screen.
Imagine rails on a train track. The parallel rails converge to a single point in the center of the screen.

To have this illusion, we want to divide the $x$ and $y$ components by $z$. Do this via homogenous coordinates. By default, OpenGL divides the vec3 by the w component.

$$
M_{perspective} = \begin{bmatrix}
n & 0 & 0 & 0 \\
0 & n & 0 & 0 \\
0 & 0 & f+n & -fn \\
0 & 0 & 1 & 0
\end{bmatrix}
$$

See the video for the derivation of this matrix and the full explanation

#reread - delete this whole heading if rewatch video, read the callout below it then check if properly understand

### Links

- [3D Perspective by _WebGL Fundamentals_](https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html)
- [The Perspective and Orthographic Projection Matrix by _Scratch a Pixel_](https://www.scratchapixel.com/lessons/3d-basic-rendering/perspective-and-orthographic-projection-matrix//building-basic-perspective-projection-matrix.html)
