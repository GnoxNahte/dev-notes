---
publish: true
created: 2026-04-01T22:01:00.360+08:00
modified: 2026-05-17T16:15:56.033+08:00
published: 2026-05-17T16:15:56.033+08:00
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
