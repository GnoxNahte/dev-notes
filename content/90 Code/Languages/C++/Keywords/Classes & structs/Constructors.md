---
publish: true
created: 2026-05-23T10:55:03.234+08:00
modified: 2026-06-01T11:23:34.388+08:00
published: 2026-06-01T11:23:34.388+08:00
tags:
  - todo
---

## When its implicitly declared

|     | Default constructor | Destructor | Copy Constructor | Copy Assignment |     |
| --- | ------------------- | ---------- | ---------------- | --------------- | --- |
|     |                     |            |                  |                 |     |

## Types of Constructors

### Single-argument constructor

### Copy constructor

> [!WARNING] [[#Shallow copy]] when using pointers

### Move constructor

> [!IMPORTANT] Move constructors must always be `noexcept`

### Member initialiser list

#### Catching exceptions from member initialiser list - Function try block

Link:

- [cppreference - Function try block](https://en.cppreference.com/cpp/language/try#:~:text=Function%20try%20block,-A)

## Aggregate initialization

When there is no constructor defined explicitly
Reference: [cppreference](https://en.cppreference.com/w/cpp/language/aggregate_initialization.html)
