---
publish: true
created: 2026-06-24T11:32:08.867Z
modified: 2026-06-24T12:49:44.523Z
published: 2026-06-24T12:49:44.523Z
tags:
  - todo
---

## Overview

Methods:

- [[#Edge walking]]
- [[#Triangle Testing]]

## Edge walking

Link:

- Great 5 min [YouTube video ](https://www.youtube.com/watch?v=t7Ztio8cwqM) by [HuCE - cpvrLab](https://www.youtube.com/@HuCEcpvrLab)

Not really recommended to use, use [[#Triangle Testing]] instead
#todo - write reasons

## Triangle Testing

[[Triangle Rasterization.excalidraw]] #todo

## Links

- [A fast and precise triangle rasterizer - Kristoffer Dyrkorn](https://kristoffer-dyrkorn.github.io/triangle-rasterizer/)
  - [A walkthrough of the method](https://kristoffer-dyrkorn.github.io/triangle-rasterizer/1)
  - [The first, basic rasterizer](https://kristoffer-dyrkorn.github.io/triangle-rasterizer/3)
  - [Moar triangles, moar problems](https://kristoffer-dyrkorn.github.io/triangle-rasterizer/4) (Fixing overdraw, triangles in the same mesh overlapping each other. Solve by choosing a side (e.g. top-left) and [fill based on it](https://kristoffer-dyrkorn.github.io/triangle-rasterizer/4#one-rule-to-rule-them-all-fixing-overdraw))
- [Fast triangle rasterization - erkaman](https://erkaman.github.io/posts/fast_triangle_rasterization.html)
  - [GitHub code](https://github.com/Erkaman/sse-avx-rasterization/blob/master/main.cpp)
