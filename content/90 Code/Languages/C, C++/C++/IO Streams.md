---
publish: true
created: 2026-01-10T11:41:03.060+08:00
modified: 2026-01-19T20:57:11.118+08:00
cssclasses: ""
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
- [[90 Code/Languages/C, C++/C++/Operator overloading#Overload streams\|Overloading "<<" and ">>" operators]]



