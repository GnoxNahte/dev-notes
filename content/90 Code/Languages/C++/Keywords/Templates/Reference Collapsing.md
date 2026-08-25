---
publish: true
tags:
  - todo
---

## Overview

If there are multiple `&`/`&&` in **templates**, it'll collapse it to become `&` or `&&`.

1. `A&` `&` becomes `A&`
2. `A&` `&&` becomes `A&`
3. `A&&` `&` becomes `A&`
4. `A&&` `&&` becomes `A&&`

#todo - example

## Links

### Notes

- [[Constructors#Forwarding references]]

### External

- [ibm](https://www.ibm.com/docs/en/xl-c-and-cpp-aix/16.1.0?topic=operators-reference-collapsing-c11)
- [StackOverflow - Reference collapsing rules](https://stackoverflow.com/questions/13725747/what-are-the-reference-collapsing-rules-and-how-are-they-utilized-by-the-c-st)
