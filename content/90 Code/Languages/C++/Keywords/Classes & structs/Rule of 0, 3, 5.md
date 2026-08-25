---
publish: true
aliases:
  - Rule of Three
  - Rule of Five
  - Rule of Zero
created: 2026-06-25T07:09:46.074Z
modified: 2026-08-02T10:03:16.055Z
published: 2026-08-02T10:03:16.055Z
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
	Foo(Foo&&) noexcept; // Move constructor
	Foo& operator=(const Foo&); // Copy assignment
	Foo& operator=(Foo&&) noexcept; // Move assignment
	~Foo(); // Destructor
}
```
