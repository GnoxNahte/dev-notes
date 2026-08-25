---
publish: true
created: 2026-06-25T12:23:53.123Z
modified: 2026-08-04T00:50:25.537Z
published: 2026-08-04T00:50:25.537Z
tags:
  - todo
---

## Check

```cpp
bool check_backface_cull(const glm::vec3& v0, const glm::vec3& v1, const glm::vec3& v2)
{
	return ((v1.x - v0.x) * (v2.y - v0.y) - (v2.x - v0.x) * (v1.y - v0.y)) > 0;
}
```

Get the [[1. Matrix Basics - Notation, Multiply, Inverse, Determinant#Determinant|Determinant]] and check if $>0$
