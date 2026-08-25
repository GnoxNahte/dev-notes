---
publish: true
aliases:
  - Model space
created: 2026-07-18T02:37:24.065Z
modified: 2026-08-04T01:06:12.944Z
published: 2026-08-04T01:06:12.944Z
tags:
  - todo
---

## Overview

Transforms the vertices from Model space -> World space.

Order should be: Scale -> Rotation -> Translate

When calculating the matrix (in OpenGL),
$M_M=M_T \times M_R \times M_S$
as it multiplies with the position: $M_MPv$

#todo - cleanup
