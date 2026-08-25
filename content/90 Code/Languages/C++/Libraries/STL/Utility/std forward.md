---
publish: true
aliases:
  - std::forward()
created: 2026-06-25T07:09:46.093Z
modified: 2026-07-09T01:14:10.028Z
published: 2026-07-09T01:14:10.028Z
tags:
  - todo
---

## Overview

Keeps the value category (lvalue/rvalue) of the variable type.

Whenever a rvalue reference is used in a function argument, inside the function it'll become a lvalue.

Example from cppreference.

```cpp
template<class T>
void wrapper(T&& arg)
{
    // arg is always lvalue
    foo(std::forward<T>(arg)); // Forward as lvalue or as rvalue, depending on T
}
```

## Links

- [cppreference - std::forward](https://en.cppreference.com/cpp/utility/forward)
