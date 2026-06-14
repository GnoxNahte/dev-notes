---
publish: true
tags:
  - todo
aliases:
  - std::move()
---

## Overview

Cast any variable or expression to an rvalue, allowing other code to use move semantics and 'steal' the variable's data

### Simplified implementation

Internally a simplified version of it is:

```cpp
template <typename T>
struct remove_reference {
	using type = T;
};

template <typename T>
struct remove_reference<T&> {
	using type = T;
};

template <typename T>
struct remove_reference<T&&> {
	using type = T;
};

template <typename T>
[[nodiscard]] constexpr remove_reference<T>&& move(T&& _Arg) noexcept {
    return static_cast<remove_reference<T>&&>(_Arg);
}
```

> [!NOTE] remove\_reference`explanation:
> Using [[Template specialisation|Template specialisation]],`remove\_reference::type\`
> If never use this, when passing lvalues, it'll become a copy construction
> For example
>
> ```cpp
> Foo f1, f2;
> f1 = move(f2);
> ```
>
> Why?
>
> - Tt'll instantiate a `move<T&>` function,
> - Then `return static_cast<T& &&>(_Arg)`
> - Which becomes `return static_cast<T&>(_Arg)`
> - So it'll return a lvalue reference which becomes a copy contruction

Usage and explanation of the implementation:

```cpp
```

TLDR:

- Takes the parameter
- Remove any references to prevent [[Reference Collapsing]]
- `static_cast` to a rvalue reference
- return that rvalue reference

## Example

```cpp
template<typename T>
void swap(T& lhs, T& rhs) {
	T& tmp { std::move(lhs) };
	lhs = std::move(rhs);
	rhs = std::move(tmp);
}
```

## Links

- [cppreference](https://en.cppreference.com/cpp/utility/move)
