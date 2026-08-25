---
publish: true
tags:
aliases:
  - C-style Variadic Functions
cpp/library: cstdarg
---

## Overview

> [!NOTE] This is **c-style** variadic arguments.
> C++ use [[Parameter Packing]] (Templates), see:
>
> - [[Variadic Template Classes]]
> - [[Variadic Template Functions]]
>
> Prefer to use those as those are type-safe.

To use:

- Declare `va_list` - Holds information needed by `va_start`, `va_arg`, `va_end`, `va_copy`
- `va_start` - Point `va_list` to the first unnamed parameter
- `va_arg` - Gets the next parameter as the type passed in
- `va_end` - Must be called to reset global variables and perform cleanup

There's also `va_copy` but haven't really used it. ([cppreference - `va_copy`](https://en.cppreference.com/c/variadic/va_copy))

> [!ERROR] Undefined behaviour when using `va_arg` if...
> Using `printf` as an example,
>
> - Type is wrong (`printf("%s", 100)`)
> - Overshot number of arguments (`printf("%s %s %s", firstName, lastName)`)

> [!WARNING] Implicit conversions
> Compiler performs default promotions on all parameters in the ellipsis.
>
> - `char`, `short` -> `int`
> - `float` -> `double`
>
> Docs - [cppreference (C) - Implicit conversions](https://en.cppreference.com/c/language/conversion)

### Example - Count

```cpp
#include <cstdarg>
int sum(int count, ...) {
	va_list argp;
	va_start(argp, count);
	
	int total = 0;
	// Loop over the parameters "count" times
	for (int i = 0; i < count; ++i) {
		// Get the next argument as an int
		// and add it to total
		total += va_arg(argp, int);
	}
	
	va_end(argp);
	return total;
}
```

### Example - Delimiter

```cpp
#include <cstdarg>
// Simple implementation of printf
void print(const char* str, ...) {
	va_list argp,
	va_start(argp, str);
	
	size_t index = 0;
	while (str[i++]) {
		if (index != '%')
		{
			putchar(str[i]);
			continue;
		}
		
		switch (str[i++]) {
			case 'i': {
				int i = va_arg(argp, int);
				// print i (int)
				break;
			}
			case 'f': {
				float f = va_arg(argp, float);
				// print f (float)
				break;
			}
			// continue for different types...
		}
	}
	
	va_end(argp);
}
```

## Related Notes

- [[Variadic Template Classes]]
- [[Variadic Template Functions]]

## Links

- [cppreference (C++) - Variadic arguments](https://en.cppreference.com/cpp/language/variadic_arguments)
- [cppreference (C) - Variadic arguments](https://en.cppreference.com/c/language/variadic)
- [cppreference (C) - Implicit conversions](https://en.cppreference.com/c/language/conversion)
