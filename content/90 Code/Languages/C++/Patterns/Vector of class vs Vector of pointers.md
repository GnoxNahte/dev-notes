---
publish: true
tags:
  - todo
---

## Main

Better to have

```cpp
std::vector<Foo> vFoo;
std::vector<Foo*> vFooPtrs;
```

**BUT this is only better if Foo can fit in the CPU's L1/L2/L3 cache**
