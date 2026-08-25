---
publish: true
created: 2026-05-20T15:23:08.453Z
modified: 2026-05-20T15:41:58.030Z
published: 2026-05-20T15:41:58.030Z
tags:
  - todo
---

## Overview

Used for `GL_LINE_STRIPS` or `GL_TRIANGLE_STRIPS` to reduce the number of degenerate indices

> [!NOTE] Remember to enable and disable it!
> `glEnable(GL_PRIMITIVE_RESTART)` and `glDisable(GL_PRIMITIVE_RESTART)`

## Examples

- [roxlu/primitive-restart.cpp](https://gist.github.com/roxlu/51fc685b0303ee55c05b3ad96992f3ec)

Minimal example in case gist above is gone:

```cpp
constexpr GLushort restartIndex = 0xFFFF;

std::vector<GLushort> indexes;
for (int i = 0; i < shapeCount; ++i) {
	// Generate shape
	// indexes.emplace_back(vertex0);
	// indexes.emplace_back(vertex1);
	// ...
	
	// Don't insert restart token on the last shape
	if (i != shapeCount - 1)
		indexes.emplace_back(restartIndex);
}

glEnable(GL_PRIMITIVE_RESTART);
glPrimitiveRestartIndex(restartIndex);
glDrawElements(primitiveType, drawCnt, GL_UNSIGNED_SHORT, NULL);
glDisable(GL_PRIMITIVE_RESTART);
```
