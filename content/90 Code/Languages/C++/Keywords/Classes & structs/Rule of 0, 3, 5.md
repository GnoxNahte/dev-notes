---
publish: true
aliases:
  - Rule of Three
  - Rule of Five
  - Rule of Zero
created: 2026-04-01T22:01:00.347+08:00
modified: 2026-06-11T18:21:59.340+08:00
published: 2026-06-11T18:21:59.340+08:00
tags:
  - todo
links/docs:
  - https://en.cppreference.com/w/cpp/language/rule_of_three.html
---

## Overview

When to use

- When the class holds dynamic memory
- Does _deep copy_ instead of _shallow copy_

```cpp
class Foo 
{
	Foo(); // Default constructor
	Foo(const Foo&); // Copy constructor
	Foo& operator=(const Foo&); // Copy assignment
	Foo(Foo&&) noexcept; // Move constructor
	Foo& operator=(const Foo&&) noexcept; // Move assignment
	~Foo(); // Destructor
}
```
