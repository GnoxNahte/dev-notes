---
publish: true
created: 2026-06-06T16:06:55.499+08:00
modified: 2026-06-14T09:32:33.636+08:00
published: 2026-06-14T09:32:33.636+08:00
tags:
  - todo
---

## Partial specialisation

```cpp
template <typename T>

```

> [!WARNING] If the base template has default types, the partial specialisation doesn't have to define the default type too
> [StackOverflow explanation](https://stackoverflow.com/a/18701381/21099543)
>
> Example from StackOverflow:
>
> ```cpp
> template<class A = int, class B=double>
> class Base
> {};
>
> template<class B=char>
> // ...
> ```
>
> ^ is an error.

## Full specialisation

## Examples

### Example 1 - check is pointer

```cpp
template <typename T>
struct is_pointer {
	static bool constexpr value = false;
};

template <typename T>
struct is_pointer<T*> {
	static bool constexpr value = true;
};

int main() {
	std::cout << is_pointer<int>::value; // Instantiates a struct on line 2, returning false
	std::cout << is_pointer<int*>::value; // Instantiates a struct on line 7, returning true
}
```

### Example 2 - remove references

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
```

Uses [[Reference Collapsing]]

## NOTES

### A specialisation is treated as a completely different class.

So no methods/members from the base specialisations are brought over and need to redefine all methods.

Some workarounds to avoid repeating code assuming there are minimal changes between specialisations:

#### Use a common base class

```cpp
template <typename T>
class SharedBase {
public:
	// Put common methods here
	void method1();
	void method2();
	void method3();
};

template <typename T>
class ActualClass : public SharedBase<T> {
public:
	void specialisedMethod() { /* default behaviour */ }
};

template <>
class ActualClass<int> : public SharedBase<int> {
public:
	void specialisedMethod() { /* Custom behaviour for ints */ }
};

```

#### Use `if constexpr` (C++17)

```cpp
template <typename T>
class MyClass {
public:
	// Put common methods here
    void method1();
    void method2();
	void method3();

    // No class specialization needed!
    void specializedMethod() {
        if constexpr (std::is_same_v<T, int>) {
            // Custom behavior for int
        } 
        else {
            // Default behavior
        }
    }
};
```

Links:

- [cppreference - constexpr if](https://en.cppreference.com/cpp/language/if#constexpr-if:~:text=Constexpr%20if,-The)

#### Only specialize the method

```cpp
template <typename T>
class MyClass {
public:
    void method1() { /* ... */ }
    void specializedMethod(); // Leave definition out
};

// Default implementation
template <typename T>
void MyClass<T>::specializedMethod() {
    // Default behavior
}

// Full specialization of just this ONE method
template <>
void MyClass<int>::specializedMethod() {
    // Custom behavior for int
}
```

Links:

- [StackOverflow - If I want to specialise just one method in a template, how do I do it?](https://stackoverflow.com/questions/9330561/if-i-want-to-specialise-just-one-method-in-a-template-how-do-i-do-it)
