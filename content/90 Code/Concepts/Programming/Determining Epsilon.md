---
publish: true
created: 2026-08-01T02:12:07.988Z
modified: 2026-08-04T00:42:54.896Z
published: 2026-08-04T00:42:54.896Z
tags:
  - todo
---

## Overview

In general, use the language's given epsilon.
However, for more control,

If comparing against...

| Compare against... | Epsilon should be... | Why?                                                          |
| ------------------ | -------------------- | ------------------------------------------------------------- |
| Very small values  | Small                | Floating-point precision is _more_ accurate at smaller values |
| Very large values  | Larger               | Floating-point precision is _less_ accurate at smaller values |
