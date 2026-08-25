---
publish: true
created: 2026-04-01T14:01:00.337Z
modified: 2026-06-11T10:20:31.853Z
published: 2026-06-11T10:20:31.853Z
tags:
  - todo
---

```cpp
// In .h
class Person {
public:
	Person(); // Constructor
	Person(const char* name, int age); // Overloaded Constructor
	~Person(); // Destructor
	
	Person(Person const& rhs); // Copy constructor
	Person& operator=(Person const& rhs); // Copy assignment
private:
	std::string name;
	int age;	
}

// In .cpp 

```

> [!TIP] If required and if any of the [[#Constructor]]/[[#Copy Constructor]]/[[#Copy Assignment]] functions aren't defined, the compiler will automatically generate it

```cpp
// Default Constructor
Person() : name{}, age{} {  }


```
