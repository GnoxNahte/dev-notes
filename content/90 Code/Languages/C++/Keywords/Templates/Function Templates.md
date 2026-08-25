---
publish: true
created: 2026-04-01T14:01:00.354Z
modified: 2026-06-01T02:32:40.292Z
published: 2026-06-01T02:32:40.292Z
---

## Syntax

### Basic

```cpp
template <typename T>
T Max(T lhs, T rhs) {
	return lhs > rhs ? lhs : rhs;
}

// Generates a new function of type int
// int Max<int>(int lhs, int rhs) {...}
Max(3, 5); // returns 5

// Generates a new function of type double
// double Max<double>(double lhs, double rhs) {...}
Max(3.14, 2.13); // returns 3.14

// ERROR! 
// - Template only takes in 1 type param but function param has 2 different types
// - doesn't implicitly convert unlike normal functions!
Max(3, 3.14); 

// Explicity generate a new function of type double
Max<double>(3, 3.14);
```

### With variables

```cpp
int i;
const int ci;
int& ri {i};
int* pi;
int ai[5];

```

#todo

## Notes

- Only generated where needed

## References

- [cppreference - Function Templates](https://en.cppreference.com/w/cpp/language/function_template.html)
