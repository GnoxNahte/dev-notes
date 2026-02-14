---
publish: true
created: 2026-01-10T11:41:03.066+08:00
modified: 2026-01-19T20:57:11.412+08:00
published: 2026-01-19T20:57:11.412+08:00
cssclasses: ""
---

## Syntax
### Base types
#### Traditional initialisation style
```cpp
int a = 100;
int b(39);
int c = int(39);
int d = int(); // d = 0

// Bad practice, removing data
double e = 2.7; // ok
int f(e);       // Narrowing e to f - (double -> int) removes fractional points
short g = f;    // Narrowing f to g - (int -> short) removes range
```

#### New style, prevents narrowing initialisations
```cpp
double x{};  // x = 0.0
int a{1000}; // a = 10
char b {a};  // ERROR: (int -> char) will remove bytes

char c{1000}; // ERROR: Narrowing chars
char d{48};   // ok
```

### Lists/Arrays
[cppreference](https://en.cppreference.com/w/cpp/language/list_initialization)


