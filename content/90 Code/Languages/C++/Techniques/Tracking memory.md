---
publish: true
aliases:
  - overriding new operator
  - overloading new operator
created: 2026-04-05T09:36:43.235+08:00
modified: 2026-04-05T10:40:20.427+08:00
published: 2026-04-05T10:40:20.427+08:00
cssclasses: ""
---



```cpp
void* operator new(size_t size) {
	std::cout << "Allocating " << size << "\n";
	return malloc(size);
}
```


