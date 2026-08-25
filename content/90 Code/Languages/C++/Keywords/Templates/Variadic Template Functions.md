---
publish: true
tags:
  - todo
aliases:
---

## Parameter packing

### sizeof... operator

Gets the number of elements in a parameter pack

```cpp
template <typename ...Types>
void f(Types ...params) {
	std::cout << "Param count: " << sizeof...(Types) << "\n";
}

f();    // 0
f(1,2); // 2
f(1,'a', "Hi"); // 3
```

### Links

- [Microsoft - Ellipsis and variadic templates](https://learn.microsoft.com/en-us/cpp/cpp/ellipses-and-variadic-templates?view=msvc-170)
- [cppreference - Parameter packs](https://cppreference.com/cpp/language/pack)

## Head-tail recursion (Not recommended)

> [!WARNING] Not recommended because...
>
> - Function recursion
> - Long compile times
> - Harder to write
>
> Instead, see [[#Fold expressions (Recommended)]]

```cpp
template<typename T, typename ...Types>
void print(T t, Types ...params) {
	std::cout << t << "\n";
	print(params...);
}

print(42, 3.5, "Hi");
```

> [!EXAMPLE] The code above will be expanded to...
>
> ```cpp
> // Expansion order:
> void print<int, double, const char *>(int t, double __params1, const char * __params2);
> void print<double, const char *>(double t, const char * __params1)
> void print<const char *>(const char * t)
> ```
>
> Full expanded code (Referenced from [cppinsights.io](https://cppinsights.io/) but made more readable):
>
> ```cpp
> template<typename T>
> void print(T t)
> {
>   (std::cout << t) << "\n";
> }
>
> template<typename T, typename ... Types>
> void print(T t, Types... params)
> {
>   (std::cout << t) << "\n";
>   print(params... );
> }
>
> // 3rd - Use the function template with 1 param, need a fallback
> template<>
> void print<const char *>(const char * t)
> {
>   std::operator<<(std::operator<<(std::cout, t), "\n");
> }
>
> // 2nd - Expansion (2 params)
> template<>
> void print<double, const char *>(double t, const char * __params1)
> {
>   std::cout << t << "\n";
>   print(__params1);
> }
>
> // 1st - Expand to this (3 params)
> template<>
> void print<int, double, const char *>(int t, double __params1, const char * __params2)
> {
>   std::cout << t << "\n";
>   print(__params1, __params2); // Call print with 2 params
> }
>
> template<>
> void print<const char *>(const char * t);
> ```

## Fold expressions (Recommended)

### Fold types

#### Right fold

#### Left fold

### Using comma operator to chain expressions

This is a common method to help chain various expressions

### Links

- [cppreference - Fold expressions](https://en.cppreference.com/cpp/language/fold)

## Related Notes

- [[Variadic Template Classes]]
- [[C-style Variadic Arguments]]
