---
publish: true
---

## Syntax
```cpp
template <typename T>
T Max(T lhs, T rhs) {
	return lhs > rhs ? lhs : rhs;
}

// Generates a new function of type int
// int Max<int>(int lhs, int rhs) {...}
Max(3, 5); // returns 5

// Generates 
// double Max<double>(double lhs, double rhs) {...}
Max(3.14, 2.13); // returns 3.14

// ERROR! 
// - Template only takes in 1 type param but function param has 2 different types
// - doesn't implicitly convert unlike normal functions!
Max(3, 3.14); 


```

## Notes
- Only generated where needed


## References
- [cppreference - Function Templates](https://en.cppreference.com/w/cpp/language/function_template.html) 

