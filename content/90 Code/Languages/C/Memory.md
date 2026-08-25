---
publish: true
created: 2026-01-04T07:30:57.768Z
modified: 2026-02-20T14:42:49.025Z
published: 2026-02-20T14:42:49.025Z
---

## All memory are stored in groups of 4 byte

4 byte = 4 \* 8 bits = 32 bits

### Example

Given a [[struct]] declaration

```c
struct Player {
	char name[21];
	int health;
}
```

How its stored:

| Type       | `char name[21]` | _padding_ | `int health` |
| ---------- | --------------- | --------- | ------------ |
| Byte count | 21 bytes        | 3 bytes   | 4 bytes      |
The padding is there because name isn't a multiple of 4, and it needs the padding to fill it

### Why is it stored this way?

Mainly for efficiency, also for backwards compatibility

Link: [StackOverflow](https://stackoverflow.com/questions/7868671/why-are-32-bit-registers-divided-into-4-parts)

## Allocating memory

### malloc

Docs: [cppreference](https://en.cppreference.com/w/c/memory/malloc)

### calloc

Same as malloc, but zeros the memory

### realloc

Docs: [cppreference](https://en.cppreference.com/w/c/memory/realloc.html)
