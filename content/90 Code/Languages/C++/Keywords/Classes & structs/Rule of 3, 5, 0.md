---
publish: true
aliases:
  - Rule of Three
  - Rule of Five
  - Rule of Zero
created: 2026-04-01T22:01:00.347+08:00
modified: 2026-05-19T11:39:15.746+08:00
published: 2026-05-19T11:39:15.746+08:00
cssclasses: ""
links/docs:
  - https://en.cppreference.com/w/cpp/language/rule_of_three.html
---

## Overview
When to use
- When the class holds dynamic memory
- Does *deep copy* instead of *shallow copy*

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

