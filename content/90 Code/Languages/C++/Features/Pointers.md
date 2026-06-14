---
publish: true
created: 2026-01-04T15:30:57.736+08:00
modified: 2026-05-31T23:00:54.461+08:00
published: 2026-05-31T23:00:54.461+08:00
---

## Recap - video

![](https://youtu.be/DTxHyVn0ODg?t=10)

## Pointer arithmetic

### Basics

Array is syntax sugar for pointers

```c
int arr[] = { 1, 2, 3, 4, 5 };
int* ptr = arr;

*(ptr + 0) == arr[0]; // 1st element
*(ptr + 1) == arr[2]; // 2nd element
*(ptr + 4) == arr[4]; // 4th/last element
*(ptr + 5) == arr[5]; // Segmentation fault, out of bounds

ptr     == arr    ; // Address of 1st element
ptr + 0 == arr + 0; // Address of 1st element, same as ^
ptr + 1 == arr + 1; // Address of 2nd element
ptr + 4 == arr + 4; // Address of last element
ptr + 5 == arr + 5; // Address of last element + int size (4 bytes). No error as it's just an address
```

When adding or subtracting, it adds `sizeof(type)` \* amt added/subtracted

```c
int arrInt[] = { 1, 2, 3, 4, 5 };
double arrDbl[] = { 1.0, 2.0, 3.0, 4.0, 5.0 };


```

#todo

## sizeof keyword

[[Data Types]]
[cppreference](https://en.cppreference.com/w/cpp/language/sizeof.html)

## const keyword

```c
const int* const ptr = &value;
```

- **First const** (before type): Prevents changing the value when dereferencing
- **Second const** (after type): Prevents changing the pointer's memory address

> [!EXAMPLE]
>
> ```c
> int a = 1;
> int b = 2;
>
> // const before type
> const int* const_before = &a;
> const_before = &b; // ALLOWED. Can change memory address
> *const_before = 3; // NOT ALLOWED. Cannot change the value
>
> // const after type
> int* const const_after = &a;
> const_after = &b; // NOT ALLOWED. Cannot change memory address
> *const_after = 3; // ALLOWED. Can change the value
>
> // both combined
> const int* const const_both = &a;
> const_both = &b; // NOT ALLOWED. Cannot change memory address
> *const_both = 3; // NOT ALLOWED. Cannot change the value
>
> // const in the middle. Same as const before (const_before)
> int const * const_middle = &a;
> const_middle = &b; // ALLOWED. Can change memory address
> *const_middle = 3; // NOT ALLOWED. Cannot change the value
> ```

> [!IMPORTANT] Recommended to use `const` when passing pointers in functions

> [!NOTE] In general, the const applies to the type on the left.
> But when its on the extreme left, the applies to first part of the type. Source: [Stackoverflow](https://stackoverflow.com/questions/3247285/const-int-int-const)

## Function pointers

Link: [Stackoverflow](https://stackoverflow.com/a/840504/21099543)
alias: Function ptr

Let's start with a basic function which we will be _pointing to_:

```c
int addInt(int n, int m) {
    return n+m;
}
```

First thing, let's define a pointer to a function which receives 2 `int`s and returns an `int`:

```c
int (*functionPtr)(int,int);
```

Now we can safely point to our function:

```c
functionPtr = &addInt;
```

Now that we have a pointer to the function, let's use it:

```c
int sum = (*functionPtr)(2, 3); // sum == 5
```

Passing the pointer to another function is basically the same:

```c
int add2to3(int (*functionPtr)(int, int)) {
    return (*functionPtr)(2, 3);
}
```

We can use function pointers in return values as well (try to keep up, it gets messy):

```c
// this is a function called functionFactory which receives parameter n
// and returns a pointer to another function which receives two ints
// and it returns another int
int (*functionFactory(int n))(int, int) {
    printf("Got parameter %d", n);
    int (*functionPtr)(int,int) = &addInt;
    return functionPtr;
}
```

But it's much nicer to use a `typedef`:

```c
typedef int (*myFuncDef)(int, int);
// note that the typedef name is indeed myFuncDef

myFuncDef functionFactory(int n) {
    printf("Got parameter %d", n);
    myFuncDef functionPtr = &addInt;
    return functionPtr;
}
```
