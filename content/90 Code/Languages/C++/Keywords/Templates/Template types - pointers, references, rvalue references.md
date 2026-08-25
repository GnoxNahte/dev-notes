---
publish: true
created: 2026-06-23T04:14:48.096Z
modified: 2026-06-23T04:17:12.700Z
published: 2026-06-23T04:17:12.700Z
tags:
  - todo
---

## Array

When passing an array, it'll pass a array reference instead of a pointer.

For example, passing a c-style string

```cpp
template <typename T>
void print(T val) {
	std::cout << val;
}

int main() {
	print("c-style string");
}
```
