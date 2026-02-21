---
publish: true
created: 2026-02-12T10:21:43.744+08:00
modified: 2026-02-15T15:24:50.708+08:00
published: 2026-02-15T15:24:50.708+08:00
tags:
  - todo
cssclasses: ""
---

## Base class

```cpp
// In .h
class Person {
public:
	Person(); // Constructor
	Person(const char* name, int age); // Overloaded Constructor
	~Person(); // Deconstructor
	
	Person(Person const& rhs); // Copy constructor
	Person& operator=(Person const& rhs); // Copy assignment
private:
	std::string name;
	int age;	
}

// In .cpp 

```

> [!TIP] If required and if any of the [[90 Code/Languages/C, C++/C++/Classes, Structs/Constructors, Copy Constructor, Copy assignment#Constructor]]/[[90 Code/Languages/C, C++/C++/Classes, Structs/Constructors, Copy Constructor, Copy assignment#Copy Constructor]]/[[90 Code/Languages/C, C++/C++/Classes, Structs/Constructors, Copy Constructor, Copy assignment#Copy Assignment]] functions aren't defined, the compiler will automatically generate it

```cpp
// Default Constructor
Person() : name{}, age{} {  }


```

### Constructor



### Copy Constructor




> [!WARNING] [[90 Code/Languages/C, C++/C++/Classes, Structs/Constructors, Copy Constructor, Copy assignment#Shallow copy]] when using pointers

### Copy Assignment


> [!WARNING] [[90 Code/Languages/C, C++/C++/Classes, Structs/Constructors, Copy Constructor, Copy assignment#Shallow copy]] when using pointers

## Copying objects with pointers
### Shallow copy


### Deep copy

## Aggregate initialization 
When there is no constructor defined explicitly
Reference: [cppreference](https://en.cppreference.com/w/cpp/language/aggregate_initialization.html) 



