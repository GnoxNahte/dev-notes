---
publish: true
aliases:
  - Class Polymorphism
created: 2026-04-02T13:08:29.231Z
modified: 2026-08-02T11:27:36.017Z
published: 2026-08-02T11:27:36.017Z
---

## Keywords

### virtual

Related notes:  [[Destructors#Virtual Destructors|Virtual Destructors]]

#### Cost of virtual

- Compiler can't inline functions
- Causes instruction cache misses
- 4/8 bytes per object - pointer for [[Inheritance - vtable|vtable]]

Links:

- [StackOverflow - What is the performance cost of having a virtual method in a C++ class?](https://stackoverflow.com/a/667680)

### override

This is optional but helps prevents mistakes during compile time.
If the base class doesn't have virtual OR the function doesn't exist, there'll be a compiler error
#todo - explain

### final

Prevents anything from inheriting the current class.
