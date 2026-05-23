---
publish: true
---

## Template specialisation
### Partial specialisation
```cpp
template <typename T>

```


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

