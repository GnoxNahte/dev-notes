---
publish: true
created: 2026-01-04T15:30:57.751+08:00
modified: 2026-06-11T18:20:57.052+08:00
published: 2026-06-11T18:20:57.052+08:00
tags:
  - todo
---

## Overview

|                            | lvalue                      | rvalue                             |
| -------------------------- | --------------------------- | ---------------------------------- |
| Description                | Refers to a memory location | Value resulting from an expression |
| Position                   | Left of '='                 | Right of '='                       |
| Name                       | L = Left/Locator (Memory)   | R = RIght                          |
| Can assign                 | ✅                           | ❌                                  |
| Can read                   | ✅                           | ✅                                  |
| Others                     | Has name/variable/address   |                                    |
| Examples <br>(`int a,b,c`) |                             |                                    |

## Examples

### Legal usage

```c
int a = 1, b = 2, c = 3;

// === Normal use ===
a = b + c; // a - lvalue, b + c - 
a = 7; // a - lvalue, 7 - rvalue

// === Weird but still able to compile ===
// Breakdown:
// - (b = c) -> b assigned to c, returns a rvalue
// - c = a + (return value)
// - NOTE: This is different from: "c = a + b = c;" which is illegal (Shown below)
c = a + (b = c);
```

### Illegal usage

```c
int a = 1, b = 2, c = 3;
// === Clearly wrong ===
// a + b = rvalue -> no memory -> cannot be assigned
a + b = c;

// === Less clearly wrong ===
// Operator precedence: '+' has higher precedence than '='
// So, "a + b" evaluates to an rvalue and 'c' can't be assigned to it
c = a + b = c;

// Why? (a = b) => rvalue, which can't be assigned to c
(a = b) = c; 
(((a = b) = c) = 5); 
```

## Links

- [Operator precedence](https://en.cppreference.com/w/c/language/operator_precedence.html) - NOTE: Equal is the least priority.
- [Cherno video ](https://www.youtube.com/watch?v=fbYknr-HPYE)(More on C++)
