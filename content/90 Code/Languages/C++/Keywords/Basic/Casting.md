---
publish: true
created: 2026-01-10T11:41:03.055+08:00
modified: 2026-06-11T18:20:42.497+08:00
published: 2026-06-11T18:20:42.497+08:00
tags:
  - todo
---

## Implicit casting

## Explicit casting

### static\_cast

Casts from one related type to another

```cpp
int num = 10, denominator = 3;
double result = static_cast<double>(num)/denominator;
```

### dynamic\_cast

**Runtime cast** to cast between parent & child classes.

### const\_cast

Used to remove `const`ness from a variable.
**Not recommended to use** but tells whoever is looking at the code that removing const is intended.

> [!ERROR] Wrong way of removing const
>
> ```cpp
> int const ci = 10;
> int *pi;
> pi = (int*)(&ci); // No errors, but removes the "const" keyword
> pi = static_cast<int*>(&ci); // ERROR!!!
> ```

### reinterpret\_cast

Don't really use it, only used it when reading/writing to binary files.

## Class

### Single argument constructor

### Overload casting
