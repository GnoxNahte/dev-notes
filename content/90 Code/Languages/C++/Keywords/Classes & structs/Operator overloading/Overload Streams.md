---
publish: true
aliases:
  - Overload bitshift operators
  - Overload bit-shift operators
created: 2026-06-01T10:54:31.594+08:00
modified: 2026-06-01T10:56:34.854+08:00
published: 2026-06-01T10:56:34.854+08:00
tags:
  - todo
code/operator:
  - ">>"
  - <<
---

## Example

For things like `iostream`, `fstream`, etc

Writing a custom `Int` type

```cpp
#include <iostream>
#include <fstream>

struct Int {
    int mi{10};
    void print() const { 
        std::cout << "mi: " << mi << std::endl;
    }
};

std::ostream& operator<<(std::ostream& os, Int const& rhs) {
    return os << rhs.mi;
}

std::istream& operator>>(std::istream& os, Int& rhs) {
    return os >> rhs.mi;
}

int main() {
    Int i;
    i.print(); // Prints 10

    i.mi = 12;
    i.print(); // Prints 12

    i.mi = 15;
    std::cout << "mi: " << i << std::endl; // Prints 15

    std::cout << "Input a number" << std::endl;
    std::cin >> i;
    std::cout << "Your number is: " << i << std::endl;

    // Create a text file
    std::ofstream ofs{"hello.txt"};
    i.mi = 20;
    ofs << i; // Write to text file "20"
}
```
