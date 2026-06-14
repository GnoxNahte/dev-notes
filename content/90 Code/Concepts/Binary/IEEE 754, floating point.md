---
publish: true
aliases:
  - floating point
  - double
  - IEEE 754 representation
  - floating point representation
cssclasses:
  - img-flip
---

Link:

- [Intel - IEEE754 format](https://www.intel.com/content/www/us/en/docs/programmable/683242/current/ieee-754-format.html)

Related notes:

- [[Power of 2s#Negative exponent|Power of 2 (Negative exponent)]]

## Representation (For floats - single precision value)

> [!NOTE] For doubles (double precision value),
>
> - Total 64 bits
>   - Sign bit: 1 bit
>   - Exponent: 11 bits
>   - Mantissa: 52 bits (stored), but can represent 53 bits - [[#Why it can represent n+1 bits|Why]].

![](https://upload.wikimedia.org/wikipedia/commons/d/d2/Float_example.svg)

### Sign (1 bit)

Sign (+ or -) of the whole number.

> [!Warning] Different from sign of exponent! Exponent uses [[#Why need bias?|bias]]

### Exponent (8 bits)

1. Add a bias of 127 to the result
2. Convert the the exponent to binary

#### Why need bias?

Need to remap the range from \[-127, 128] to \[0, 255] (for 8 bits)

Bias is calculated by: $2^{n-1}-1$ where $n=\text{number of exponent bits}$
For floats (8 exponent bits), bias = $2^{8-1}-1=127$

> [!EXAMPLE]
>
> - Exponent of 5, stored as "127 + 5" or "132"
> - Exponent of -5, stored as "127 + (-5)" or "122"

> [!Question] Why not use [[2's Complement|2's complement]]?
> The benefit of 2's complement is making adding/subtracting easier.
> Don't really have a need to add/subtract exponent so just remap

### Mantissa / Fractional (23 bits)

#### Why it can represent n+1 bits

The first '1' is implicitly implied (Except when its denormalised)

##### Denormalised

When the exponent is all 0s, the #todo

## Examples

![[Binary drawings.excalidraw#^frame=IF6FlAmuPgfiIz_cAMqmL|1500]]

> [!EXAMPLE]- Convert 18.625f $\to$ IEEE 754
>
> #### Step 1 - Split the whole and fractional parts
>
> - $18 = 10010_2$
> - $0.625 = 0.101000000\dots$ (pad with zeros to fill 23 bits)
>
> #### Step 2 - Combine the whole and fractional parts, putting a `.` in between them.
>
> - Combine: $10010.101_2$
>
> #### Step 3 - Shift the decimal point until there's only 1 on the left.
>
> If you shift the decimal point:
>
> - **Left**: Increment exponent
> - **Right**: Decrement exponent
>
> $$
> 10010.101_2 = 1.0010101_2 \times 2^4
> $$
>
> #### Step 4 - Find exponent and mantissa
>
> Exponent = 4\
> Biased exponent = $127 + 4 = 131$
>
> So,
>
> | Type     | Result                  | Why                        |
> | -------- | ----------------------- | -------------------------- |
> | Sign     | 0                       | +ve                        |
> | Exponent | 1000 0011               | 131 to binary (8 bits)     |
> | Mantissa | 00101010000000000000000 | (23 bits, fractional part) |
>
> ✅ **Final IEEE 754 (32-bit single-precision)**
>
> - **Binary:** `0 10000011 00101010000000000000000`

## Special cases

|                    | Sign   | Exponent | Mantissa   | How?                   |
| ------------------ | ------ | -------- | ---------- | :--------------------- |
| $\pm0$             | 0 or 1 | All 0s   | All 0s     | `float f = 0.f`        |
| Denormalised       | 0 or 1 | All 0s   | Anything   | Very small number      |
| $\pm\infty$        | 0 or 1 | All 1s   | All 0s     | `float f = 1.f / 0.f`  |
| NaN (Not a number) | 0 or 1 | All 1s   | NOT All 0s | `float f = sqrt(-1.f)` |

> [!NOTE] For 0 or $\infty$, it can be +ve or -ve depending on the sign bit
> For 0: $+0$ or $-0$
> For $\infty$: $+\infty$ $-\infty$
