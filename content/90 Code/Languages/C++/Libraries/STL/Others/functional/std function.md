---
publish: true
tags:
  - todo
---

## Overview

Benefits:

- Can store
  - Functions pointers
  - [[Lambdas]]
  - [[Functors, Function Objects]]
- Can be copied moved, and assigned
- Has null state that indicates when no callable is bound

Performance:

- Lambdas can be inlined but not functions wrapped in `std::function`
- `std::function` may use heap-allocated memory to store captured variables
- Slight additional runtime overhead when calling functions wrapped in `std::function`

## Links

- [cppreference - std::function](https://en.cppreference.com/cpp/utility/functional/function)
