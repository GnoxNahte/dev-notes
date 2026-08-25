---
publish: true
created: 2026-04-01T14:01:00.360Z
modified: 2026-06-23T04:23:15.863Z
published: 2026-06-23T04:23:15.863Z
---

## Notes

```base
views:
  - type: table
    name: Table
    filters:
      and:
        - file.inFolder(this.file.folder) && file.path != this.file.path

```

## Syntax Overview

### Function Templates

```cpp
template <typename T>
T Max(T lhs, T rhs) {
	return lhs > rhs ? lhs : rhs;
}

Max(3, 5);
Max(3.14, 2.13);
```

### Class Templates

```cpp
```

#todo

### Template Non-type parameters

```cpp
template<typename T, size_t N>
class Array {
	T data[N];
}
```

## Others

Links:

- [Back to Basics: Templates in C++](https://www.youtube.com/watch?v=HqsEHG0QJXU)
- [cppinsights.io](https://cppinsights.io/) - Useful to see what code the compiler generates
