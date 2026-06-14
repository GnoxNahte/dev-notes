---
publish: true
description: Resource Acquisition Is Initialization
created: 2026-05-16T10:14:12.436+08:00
modified: 2026-06-11T18:23:25.078+08:00
published: 2026-06-11T18:23:25.078+08:00
tags:
  - todo
---

## Overview

### Best practices

#### If an exception is thrown from constructor

If thrown, the object isn't fully constructed, so the destructor isn't called.

Example:

```cpp
class Foo {
	int* data;
	
	Foo() {
		// sz underflows and becomes the size_t
		size_t sz = -1;
		// Trying to allocate a very large amt of memory, 
		// likely failing throwing a std::bad_alloc exception
		data = new int[sz];
	}
}
```

So to solve this,

## Others

> [!INFO] What is a Resource?
> Memory, locks, sockets, threads, files handles, window handles, etc...

## Links

Online

- [cppreference - raii](https://en.cppreference.com/cpp/language/raii)
  Notes
- [[Constructors]]
