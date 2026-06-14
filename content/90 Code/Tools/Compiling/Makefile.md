---
publish: true
created: 2026-01-04T15:30:57.819+08:00
modified: 2026-03-30T21:28:23.328+08:00
published: 2026-03-30T21:28:23.328+08:00
---

Links:

- [Intro](https://opensource.com/article/18/8/what-how-makefile)

## Summary

Format:

```make
target: prerequisites
<TAB> recipe
```

Example:

```make
final_target: sub_target final_target.c
	Recipe_to_create_final_target

sub_target: sub_target.c
	Recipe_to_create_sub_target
```

## Default target/goal

The first target is the _default goal_, which is called whenever `make` is called by itself.
A convention to name the default goal is `all`, as it's responsibility is to call all other targets.

To override it, can use a phony target called .DEFAULT\_GOAL

```make
.DEFAULT_GOAL := generate
```
