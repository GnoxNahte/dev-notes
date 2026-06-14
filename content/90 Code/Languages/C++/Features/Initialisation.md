---
publish: true
created: 2026-01-10T11:41:03.066+08:00
modified: 2026-06-11T18:20:23.944+08:00
published: 2026-06-11T18:20:23.944+08:00
tags:
  - todo
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

#### 2D array initialisation

```c
int[4][4] a = {
	 0,  1,  2,  3,
	 4,  5,  6,  7,
	 8,  9, 10, 11,
	12, 13, 14, 15,
}

void process(int (*arr)[])
{
	for (int x = 0; x <= 4; ++x) {
		for (int y = 0; y <= 4; ++y) {
			printf("%i", *(*arr + x) + y);
		}
	}
}
```
