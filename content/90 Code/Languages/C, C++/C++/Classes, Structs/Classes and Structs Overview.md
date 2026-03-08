---
publish: true
---

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

