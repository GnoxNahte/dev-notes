---
publish: true
cssclasses:
  - hide-bases-header
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

## Others
Links:
- [Back to Basics: Templates in C++](https://www.youtube.com/watch?v=HqsEHG0QJXU)



