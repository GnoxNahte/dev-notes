---
publish: true
tags:
  - todo
---

## Overview

Only can use in _fragment shader_.
Discards the fragments

### Example

Drawing a circle inside a rectangle

```glsl
#version 450 core
in vec2 vUV;
out vec4 FragColor;

void main() {
	float dist = length(vUV);
	float radius = 0.5;
	if (distance > radius)
		discard; // Discards any fragments outside the circle
	
	FragColor = vec4(vUV.x, vUV.y, 1.0, 1.0);
}
```
