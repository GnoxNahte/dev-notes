---
publish: true
aliases:
  - C++ Input Output
created: 2026-05-09T10:38:14.316+08:00
modified: 2026-06-01T10:52:00.656+08:00
published: 2026-06-01T10:52:00.656+08:00
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
