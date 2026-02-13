---
publish: true
created: 2026-01-10T11:41:03.071+08:00
modified: 2026-01-19T20:57:10.784+08:00
cssclasses: ""
---


## Syntax
### C style
```cpp
int arr[5] {5,6,7,8,9};
for (int i = 0; i < 5; ++i) 
{
	std::cout << arr[i] << ' ';
}
```

### Range-for
```cpp
int arr[5] {5,6,7,8,9};
for (int element : arr) 
{
	std::cout << element << ' ';
}
```

> [!ERROR] This DOES NOT COMPILE! Cannot use pointers in range-for statements
> ```cpp
> int *pi = &arr; 
> for (int element : pi) 
> { 
> 	std::cout<< element<< ' '; 
> }
> ```

### Iterators
```cpp
int arr[5] {5,6,7,8,9};
for (int const *p = std::begin(arr); p != std::end(arr); ++p) 
{
	std::cout << *p << ' ';
}
```

