---
publish: true
created: 2026-05-31T04:20:17.694Z
modified: 2026-08-02T22:46:40.229Z
published: 2026-08-02T22:46:40.229Z
tags:
  - todo
---

## Overview

Better to have

```cpp
std::vector<Foo> vFoo;
std::vector<Foo*> vFooPtrs;
```

| Scenario                                       | Use...             | Why                                                      |
| ---------------------------------------------- | ------------------ | -------------------------------------------------------- |
| Iterating when `sizeof(Foo) * size` is _small_ | Vector of class    | Can fit the whole vector in CPU's cache                  |
| Iterating when `sizeof(Foo) * size` is _large_ | Vector of pointers | Can't fit it in CPU cache, has to keep fetching from RAM |
| Swapping order/Sorting                         | Vector of pointers | `sizeof(Foo*) < sizeof(Foo)` so easier to swap           |
