---
publish: true
tags:
  - todo
---

## Types

Examples below use this base class:

```cpp
class Foo 
{
	int* data;
	
}
```

### Copy assignment

> [!WARNING] [[#Shallow copy]] when using pointers

> [!WARNING] Need to handle self-assignment

Best way to handle, use [[Swapping|Copy-swap idiom]]

### Move assignment

> [!WARNING] Need to handle self-assignment

Best way to handle, use [[Swapping|Copy-swap idiom]]

## Related Notes

- [[Rule of 0, 3, 5]]
