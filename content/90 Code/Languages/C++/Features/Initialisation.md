---
publish: true
created: 2026-07-24T14:16:23.392Z
modified: 2026-07-26T12:49:18.028Z
published: 2026-07-26T12:49:18.028Z
tags:
  - todo
---

## Syntax

### () vs {} / Braces vs curly braces initialisation

#### Traditional initialisation style `()`

Don't use unless you want to explicitly call the constructor and not the `std::inializer_list` version.

```cpp
int a = 100;
int b(39);
int c = int(39);
int d = int(); // d = 0

// Bad practice, removing data
double e = 2.7; // ok
int f(e);       // Narrowing e to f - (double -> int) removes fractional points
short g = f;    // Narrowing f to g - (int -> short) 
```

#### New style `{}`

Pros:

- Prevents data loss (narrowing) from type conversions
- Clearer syntax as `()` can be calling a function
- Uses `std::intializer_list` if there's a supported constructor that accepts it
- Allows [[Constructors#Aggregate initialization|Aggregate initialization]]

```cpp
// ===== Preevnt data narrowing =====
double x{};  // x = 0.0
int a{1000}; // a = 1000
char b {a};  // ERROR: (int -> char) will remove bytes

char c{1000}; // ERROR: Narrowing chars
char d{48};   // ok


// ===== Different syntax than functions =====
Widget w1(); // Function Declaration: Return Widget, name is w1, takes in 0 params
Widget w2{}; // Object initalisation using default constructor


// ===== Use std::intializer_list if available =====
// Example using std::vector:
// Constructor called: vector( size_type count, const T& value, const Allocator& alloc )
// v1 = { 2, 2, 2, 2, 2 };
std::vector<int> v1(5, 2); 

// Constructor called: vector( std::initializer_list<T> init, const Allocator& alloc );
// v2 = { 5, 2 };
std::vector<int> v2 { 5, 2 };


// ===== Aggregate Initialisation =====
// For classes with no user-defined constructor, private members
struct Point {
	int x;
	int y;
};

Point p1 { 10, 20 }; // p1.x = 10, p1.y = 20
```

Links:

- [Designated initializer](https://en.cppreference.com/cpp/language/aggregate_initialization#Designated_initializers "cpp/language/aggregate initialization")

### Lists/Arrays

[cppreference](https://en.cppreference.com/w/cpp/language/list_initialization)
#todo - shift/link to a array note

#### Array initialisation

```cpp
constexpr int COUNT = 5;

int a1[COUNT] { 2 };       // This only sets the FIRST element to 2!
std::fill_n(a1, COUNT, 4); // Fills the array with 4
```

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
