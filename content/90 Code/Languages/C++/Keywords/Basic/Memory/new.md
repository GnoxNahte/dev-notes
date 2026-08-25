---
publish: true
created: 2026-06-06T08:06:55.504Z
modified: 2026-06-06T09:45:46.803Z
published: 2026-06-06T09:45:46.803Z
tags:
  - todo
---

## Overview

Using this code,

```cpp
string* ps = new string {"memory"};
```

What new does:

- Allocates enough memory to hold a `string` object
- Calls the `string`'s constructor
- Returns a pointer to that `string` object

## Overloads

### Standard overloads

```cpp
class Foo { 
	int x;
};

// Normal new operator
// operator new(std::size_t)
Foo* f1 = new Foo(12);

void* memory = malloc(sizeof(Foo));
// placement new - constructs Foo using the memory that's been allocated.
// operator new(std::size_t, void*)
Foo* f2 = new (memory) Foo(12);

// placement new to a memory pool. 
// Assuming there's a MemoryPool class,
// operator new(std::size_t, MemoryPool*)
Foo* f3 = new (pool) Foo(12);

// noexcept version. returns a nullptr if it fails to allocate memory
// operator new(size_t, const std::nothrow_t&)
Foo* f4 = new (std::nothrow) Foo(12);
```

### Custom overloads
