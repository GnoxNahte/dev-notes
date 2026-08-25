---
publish: true
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

Only can use `#define`, `constexpr`, `constexpr` as `const` isn't **compile-time**
Reason: [Stackoverflow qn](https://stackoverflow.com/questions/34997660/defining-the-size-of-an-array-using-a-const-int)

## Links

- https://isocpp.org/wiki/faq/const-correctness
