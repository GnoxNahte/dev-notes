---
publish: true
tags:
  - todo
---

## Warning! - Circular ownership causes memory leaks

TLDR: Because both of them will reference each other, keeping each other alive as the referenced count won't be == 0, causing a memory leak.

To prevent this, use [[weak_ptr]].

Links:

- [cppreference `weak_ptr` example on breaking cyclic references](https://en.cppreference.com/cpp/memory/weak_ptr/~weak_ptr#Example)
- [StackOverflow - Explaining cyclic dependency with shared\_ptr](https://stackoverflow.com/questions/22185896/what-is-the-cyclic-dependency-issue-with-shared-ptr)

### Example

```cpp
```
