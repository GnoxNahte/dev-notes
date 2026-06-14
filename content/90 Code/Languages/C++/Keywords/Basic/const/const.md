---
publish: true
created: 2026-06-01T10:18:26.162+08:00
modified: 2026-06-06T18:30:01.360+08:00
published: 2026-06-06T18:30:01.360+08:00
tags:
  - todo
---

## Overview

Makes a variable read-only

> [!NOTE] `const` doesn't guarantee compile-time const
> If you want compile-time const, use [[constexpr]] or [[consteval]]

## For pointers

![[Pointers#const keyword]]

## Const vs enum class vs define

| Difference | `const` | `#define` |
| ---------- | ------- | --------- |
| Type       | Typed   | not typed |
|            |         |           |
|            |         |           |
|            |         |           |
|            |         |           |
|            |         |           |
|            |         |           |
|            |         |           |
|            |         |           |

### Defining array size

Only can use `#define`
Reason: [Stackoverflow qn](https://stackoverflow.com/questions/34997660/defining-the-size-of-an-array-using-a-const-int)

## Links

- https://isocpp.org/wiki/faq/const-correctness
