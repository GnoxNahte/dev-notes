---
publish: true
created: 2026-07-24T14:16:23.398Z
modified: 2026-08-01T04:03:09.940Z
published: 2026-08-01T04:03:09.940Z
tags:
  - todo
---

## Overview

A lambda is a anonymous function

> [!NOTE] The actual type is unspecified
> See [[#How it works internally]]

## Capturing

### Syntax

### Capturing variables

### Capturing all

> [!NOTE] It will only capture used variables

### Capturing none

If there's no variables to be captured, the compiler might (MSVS doesn't do this) make the type of the lambda to be a function pointer instead of a function object.

## Explicit return

## How it works internally

It uses [[Functors, Function Objects|Function Objects]],

> [!QUOTE] From [StackOverflow - What is the type of lambda when deduced with "auto" in C++11?](https://stackoverflow.com/questions/7951377/what-is-the-type-of-lambda-when-deduced-with-auto-in-c11)
> The type of a lambda expression is unspecified.
>
> But they are generally mere syntactic sugar for functors. A lambda is translated directly into a functor. Anything inside the \[] are turned into constructor parameters and members of the functor object, and the parameters inside () are turned into parameters for the functor's operator().
>
> A lambda which captures no variables (nothing inside the \[]'s) can be converted into a function pointer (MSVC2010 doesn't support this, if that's your compiler, but this conversion is part of the standard).
>
> But the actual type of the lambda isn't a function pointer. It's some unspecified functor type

## Links

- [cppreference - Lambda expressions](https://en.cppreference.com/cpp/language/lambda)
