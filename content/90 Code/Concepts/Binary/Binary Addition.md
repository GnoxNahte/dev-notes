---
publish: true
---

## Addition

Links: [Visualizing the full circuit](https://circuitverse.org/users/205243/projects/somador-completo-4008)

### Half adder

Calculate A(`0011`) + B(`0101`)

| A   | B   | Sum | Carry |
| --- | --- | --- | ----- |
| 0   | 0   | 0   | 0     |
| 0   | 1   | 1   | 0     |
| 1   | 0   | 1   | 0     |
| 1   | 1   | 0   | 1     |

> [!NOTE] Sum and carry pattern
> Sum = [[Logic gates#XOR|XOR]]\(A, B)
> Carry = AND(A, B)
