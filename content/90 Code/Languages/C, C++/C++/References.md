---
publish: true
---

## Overview
References are an alias to a variable.
```cpp
int x = 5;
int& y = x; // y points to the same variable as x 

y = 10; // x = 10
std::cout << x << "," << y; // outputs "10,10"

y = 20; // x = 20
std::cout << x << "," << y; // outputs "20,20"

int z = 30;
// y = z; // This is an error! Cannot reassign!

const int& cx = x; // Cannot change the 'x'
```








