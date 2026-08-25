---
publish: true
created: 2026-07-27T12:49:46.591Z
modified: 2026-08-01T06:44:31.431Z
published: 2026-08-01T06:44:31.431Z
tags:
  - todo
---

## Overview

A quick _O(N)_ and simple algorithm to find the estimated (5-20% larger) bounding sphere given several points (or vertices in a mesh).

### Features

- Fast - _O(N)_
- Simple to implement
- Around 5-20% larger than the optimised minimum size

## Steps

Will explain in 3D but works in 2D too.

1. First Pass, loop all points then:
   1. Get the **min** and **max** for each axis
   2. Get the circle's center and radius from the **min** and **max**
2. Second Pass, loop all points again then:
   1. Check distance, if in sphere,
      1. continue to next point
   2. Else, point is in sphere
      1. Get the furthest point in the sphere, opposite the current point
      2. Update center (Midpoint of Furthest point and current point)
      3. Update radius (Distance of center and current point)

## Code

```cpp
Sphere ComputeBoundingSphere(std::vector<glm::vec3>& verts) {
    if (verts.empty()) 
	    return Sphere(glm::vec3(0.0f), 0.0f); 
    
    // === First pass ===
    // Get min & max for the x, y, z axes
    glm::vec3 min { verts[0] }, max { verts[0] };
    for (auto& i: verts)
    {
        min = glm::min(min, i);
        max = glm::max(max, i);
    }

    // Get first estimated center & radius
    glm::vec3 center = (min + max) * 0.5f;
    glm::vec3 diff = max - min;
    float radius = std::max({ diff.x, diff.y, diff.z }) * 0.5f;
    float radiusSqr = radius * radius;

    // === Second pass ===
    // Expand and shift the sphere's center and radius 
    // whenever a point is outside the current circle
    for (auto& i : verts)
    {
        diff = i - center;
        float lenSqr = glm::length2(diff);

        // Point in sphere, continue to next point
        if (lenSqr < radiusSqr)
            continue;

        glm::vec3 dir = diff / glm::sqrt(lenSqr);
        glm::vec3 oppsitePoint = center - radius * dir;

        center = (oppsitePoint + i) * 0.5f;
        radiusSqr = glm::length2(i - center);
        radius = glm::sqrt(radiusSqr);
    }
    
    return Sphere(center, radius);
}
```
