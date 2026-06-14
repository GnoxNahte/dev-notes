---
publish: true
created: 2026-01-04T15:30:57.730+08:00
modified: 2026-01-05T22:00:13.301+08:00
published: 2026-01-05T22:00:13.301+08:00
links/docs: https://en.cppreference.com/index.html
links/docs/alt: https://manual.cs50.io/
---

## Concepts

### Declaration

Contains the function signature to let the compiler know what the function is (name, return type, params type and count)

```c
int sum(int a, int b)
```

> [!NOTE]- Parameter names are optional
> This is correct too
>
> ```c
> int sum(int, int)
> ```

### Definition

Contains the actual logic of the function. Can act as a [[#Declaration]] too, but need to be before calling it

```c
int sum(int a, int b) {
	return a + b;
}
```

### Memory, Variables

```c
int x; // This doesn't initialise the variable. It's data is whatever the previous program used it for (garbage). DO NOT USE it before setting it to a value
int y = 0; // This initialises the variable.
```

In general practice it's ok (?) to not initialize a variable but **do not** use it before setting a value to it.
To play safe, set it to a neutral value like 0

## Keywords

| Keywords | Notes                                                                                                                                                     | Link |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| `size_t` | Different OS might have different memory sizes. This makes sure that it uses the correct size. <br><br>NOTE: If don't use it, might have integer overflow |      |
