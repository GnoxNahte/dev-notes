---
publish: true
created: 2026-01-10T11:41:03.055+08:00
modified: 2026-01-19T20:57:16.972+08:00
published: 2026-01-19T20:57:16.972+08:00
cssclasses: ""
---


## Implicit, Explicit casting
### Implicit cast

### Explicit cast
```cpp
int i = ;
double d = 3.14;
```

## Function cast
### Base(?)


### static_cast
Casts from one related type to another
```cpp
int num = 10, denominator = 3;
double result = static_cast<double>(num)/denominator;
```

#### Why use static_cast
##### Prevents const casting
```cpp
int const ci = 10;
int *pi;
pi = (int*)(&ci); // No errors, but removes the "const" keyword
pi = static_cast<int*>(&ci); // ERROR!!!
```

### reinterpret_cast
#todo 


### idk one more cast #todo

