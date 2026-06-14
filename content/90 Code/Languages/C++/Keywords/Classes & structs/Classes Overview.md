---
publish: true
created: 2026-04-01T22:01:00.337+08:00
modified: 2026-06-11T18:20:31.853+08:00
published: 2026-06-11T18:20:31.853+08:00
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
