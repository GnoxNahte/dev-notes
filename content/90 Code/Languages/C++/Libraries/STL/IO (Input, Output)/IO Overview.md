---
publish: true
aliases:
  - C++ Input Output
created: 2026-05-09T02:38:14.316Z
modified: 2026-06-01T02:52:00.656Z
published: 2026-06-01T02:52:00.656Z
tags:
  - todo
---

## Syntax

```cpp
#include <iostream>

int main() {
	std::cout << "Hello World\n";
	
	std::cout << "Enter your name and age";
	char name[64];
	int age;
	std::cin >> name >> age;
	std::cout << "Hello " << name << " age " << age << "\n";
}
```

## Related Notes

- [[90 Code/Languages/C++/Keywords/Classes & structs/Operator overloading#Overload streams|Overloading "<<" and ">>" operators]]
