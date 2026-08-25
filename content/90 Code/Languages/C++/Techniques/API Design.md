---
publish: true
created: 2026-06-11T09:26:48.384Z
modified: 2026-06-11T09:29:33.274Z
published: 2026-06-11T09:29:33.274Z
tags:
  - todo
---

## Overview

- Try to use your API incorrectly
- Use better naming
- Use `[[nodiscard]]` (with reasons) liberally
- Never return a raw pointer
- Use `noexcept` to help indicate the type of error handling
- Provide consistent, impossible to ignore, in-band error handling
- Use stronger types and avoid default conversions
- (Sparingly) delete problematic overloads / prevent conversions
- Avoid passing pointers (only to be used for single/optional objects)
- Avoid passing smart pointers
- Limit your API as much as possible

## Link

- [YouTube - Back to Basics: C++ API Design - Jason Turner](https://www.youtube.com/watch?v=zL-vn_pGGgY)
