---
publish: true
created: 2026-01-04T07:30:57.610Z
modified: 2026-02-02T14:20:32.002Z
published: 2026-02-02T14:20:32.002Z
related-notes:
  - "[[SOP and POS]]"
  - "[[Logic gates]]"
---

Related links:

- [C Operator precedence](https://en.cppreference.com/w/c/language/operator_precedence.html) (TLDR - for simple boolean logic: NOT > AND > OR).
  NOTE!!! ^ AND has higher precedence than OR

## Laws

### Trivial Laws

| Name             | OR              | AND         |
| ---------------- | --------------- | ----------- |
| Logical Inverse  | !0=1            | !1=0        |
| Involution       | !!A=A           | -           |
| Dominance        | 1+A=1           | 0A=0        |
| Identity         | 0+A=A           | 1A=A        |
| Idempotence      | A+A=A           | AA=A        |
| Complementatrity | A+!A=1          | A!A=0       |
| Commutativity    | A+B=B+A         | AB=BA       |
| Associativity    | (A+B)+C=A+(B+C) | (AB)C=A(BC) |

### Non-Trivial Laws

| Name           | OR           | AND             |
| -------------- | ------------ | --------------- |
| Distributivity | A(B+C)=AB+AC | A+BC=(A+B)(A+C) |
| Absorption     | A(A+B)=A     | A+AB=A          |
| DeMorgan's     | !(A+B)=!A!B  | !(AB)=!A+!B     |
| No name        | A+!AB=A+B    | -               |

> [!WARNING] Given X+Z = Y+Z, note that it **doesn't mean** that X=Y
> Because Z can be 1. Which means X and Y can be any value

Read More: [Karnaugh map (K-Map)](https://en.wikipedia.org/wiki/Karnaugh_map) - deriving the expression through the truth table result

## Karnaugh map

Simplifying 3 variables

### Example scenarios

```tabs

--- Y = C

| AB\C | 0   | 1   |
| ---- | --- | --- |
| 00   | 0   | 1   |
| 01   | 0   | 1   |
| 11   | 0   | 1   |
| 10   | 0   | 1   |

--- Y = B

| AB\C | 0   | 1   |
| ---- | --- | --- |
| 00   | 0   | 0   |
| 01   | 1   | 1   |
| 11   | 1   | 1   |
| 10   | 0   | 0   |

--- Y = 1

| AB\C | 0   | 1   |
| ---- | --- | --- |
| 00   | 1   | 1   |
| 01   | 1   | 1   |
| 11   | 1   | 1   |
| 10   | 1   | 1   |

--- Y = !AB!C + ABC

| AB\C | 0   | 1   |
| ---- | --- | --- |
| 00   | 0   | 0   |
| 01   | 1   | 0   |
| 11   | 0   | 1   |
| 10   | 0   | 0   |
```
