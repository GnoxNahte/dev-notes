---
publish: true
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
The first target is the *default goal*, which is called whenever `make` is called by itself. 
A convention to name the default goal is `all`, as it's responsibility is to call all other targets. 

To override it, can use a phony target called .DEFAULT_GOAL
```make
.DEFAULT_GOAL := generate
```

