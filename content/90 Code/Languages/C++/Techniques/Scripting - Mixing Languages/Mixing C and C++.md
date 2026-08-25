---
publish: true
tags:
  - todo
---

## Overview

### Example - Summary

```cpp
#ifdef __cplusplus
extern "C" {
#endif

// OK: C-compatible declarations
void simulate(int iterations);
int get_frame_count(void);

// Illegal: Classes don't exist in C
class Particle { float x, y; };

// Illegal: Templates cannot be expressed in C
template<typename T>
T max(T a, T b);

// Illegal: Default arguments don't exist in C
void set_gravity(float g = 9.8f);

// Illegal: Can't overload functions in C
int min(int a, int b);
float min(float a, float b);

#ifdef __cplusplus
}
#endif
```

## Name mangling

- C++ mangles function names to handle function overloading
- C doesn't do it as function overloading doesn't exist

Example:

```cpp
void 
```

#todo - write a program with functions, compile on C and C++ then show `nm`'s output. Test with non-overloaded function too?

> [!TIP] Use [Linux's `nm` command](https://www.man7.org/linux/man-pages/man1/nm.1.html) to view mangled names from object files

To tell the C++ compiler to suppress name mangling, add `extern "C"`

```cpp
// Add to top of file to apply to the whole 
extern "C"
void foo(int, int, int, int);

// OR use braces to specify only functions in this block
extern "C" {
	void doSomething(int, int, int);
	void doMore(int, int);
}
```

If this file is being used by both C and C++ files, add `#ifdef __cplusplus` check

```cpp
#ifdef __cplusplus
extern "C" {
#endif

	void doSomething(int, int, int);
	void doMore(int, int);

#ifdef __cplusplus
}
#endif
```

## Initialising of statics

## Dynamic memory allocation

Basic rule:

- C++ Use `new`, `delete`
- C Use `malloc` (and its variants - e.g. `calloc`) and `free`

## Data structure compatibility

| Restrictions                                             | Why                                                                                                                                                           |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pointer to object of class type with `virtual` functions | C cannot interpret hidden [[Inheritance - vtable]] pointer in object                                                                                                        |
| Object of non-[[POD]] struct/class type with ctors/dtor  | C doesn't have have concept of construction causing object bytes to uninitialised.                                                                            |
| Object of STL type                                       | Internal layout of stl types is implementation-defined (different between _gcc_, _clang_, _msvc_) + C doesn't have concept of non-[[POD]] objects (top point) |
| Reference to objects                                     | C has no concept of references and must instead pass pointers                                                                                                 |
| Function pointer to overload                             | C has no mechanism for function overload resolution                                                                                                           |
| Function pointer to member function                      | C has no concept of `this` pointer                                                                                                                            |

## Using C libraries in C++

#todo - Compare libraries like `<cstdio>` vs `<stdio.h>`
#todo - not really in this note? put somewhere else

> [!TLDR] For C++, use `c<name>` over `name.h` libraries
