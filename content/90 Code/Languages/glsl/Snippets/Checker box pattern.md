---
publish: true
tags:
  - todo
---

```cpp
float checker(vec2 worldXZ, float tileSize) {
	vec2 cell = floor(worldXZ / tileSize);
	return mod(cell.x + cell.y, 2.0);
}
```
