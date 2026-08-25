---
publish: true
aliases:
  - overriding new operator
  - overloading new operator
created: 2026-04-05T01:36:43.235Z
modified: 2026-04-05T02:40:20.427Z
published: 2026-04-05T02:40:20.427Z
---

```cpp
void* operator new(size_t size) {
	std::cout << "Allocating " << size << "\n";
	return malloc(size);
}
```
