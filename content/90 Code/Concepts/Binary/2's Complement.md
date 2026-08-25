---
publish: true
aliases:
  - Twos complement
  - One's complement
  - Signed Magnitude
  - Integers represented in Binary
  - Int in Binary
created: 2026-01-04T07:30:57.603Z
modified: 2026-01-04T08:01:31.693Z
published: 2026-01-04T08:01:31.693Z
---

## Overview

[[#Signed Magnitude (SM)|Signed Magnitude]] and [[#One's complement|1's Complement]] are used as steps to find 2's Complement. Can skip directly to [[#2's complement]] if you want.
[[#Signed Magnitude (SM)|Signed Magnitude]] and [[#One's complement|1's Complement]] aren't really used as they have 2 representations of '0'.

### Table

Given the binary, see the Decimal, Signed Magnitude, 1's and 2's complement representation:

| Binary | Decimal | SM  | 1's Complement | 2's Complement |
| ------ | ------- | --- | -------------- | -------------- |
| 0000   | 0       | 0   | 0              | 0              |
| 0001   | 1       | 1   | 1              | 1              |
| 0010   | 2       | 2   | 2              | 2              |
| 0011   | 3       | 3   | 3              | 3              |
| 0100   | 4       | 4   | 4              | 4              |
| 0101   | 5       | 5   | 5              | 5              |
| 0110   | 6       | 6   | 6              | 6              |
| 0111   | 7       | 7   | 7              | 7              |
| 1000   | 8       | -0  | -7             | -8             |
| 1001   | 9       | -1  | -6             | -7             |
| 1010   | 10      | -2  | -5             | -6             |
| 1011   | 11      | -3  | -4             | -5             |
| 1100   | 12      | -4  | -3             | -4             |
| 1101   | 13      | -5  | -2             | -3             |
| 1110   | 14      | -6  | -1             | -2             |
| 1111   | 15      | -7  | -0             | -1             |

> [!NOTE] SM and 1's complement has 2 representations of '0' (0 and -0)
> So it's not used often. It's just used as steps to find 2's complement.

> [!NOTE] Table for 8 bit, two's complement vs unsigned given the same binary value
> | Binary value | Two's complement interpretation | Unsigned interpretation |
> | ------------ | ------------------------------- | ----------------------- |
> | 00000000     | 0                               | 0                       |
> | 00000001     | 1                               | 1                       |
> | ⋮            | ⋮                               | ⋮                       |
> | 01111110     | 126                             | 126                     |
> | 01111111     | 127                             | 127                     |
> | 10000000     | −128                            | 128                     |
> | 10000001     | −127                            | 129                     |
> | 10000010     | −126                            | 130                     |
> | ⋮            | ⋮                               | ⋮                       |
> | 11111110     | −2                              | 254                     |
> | 11111111     | −1                              | 255                     |

## Signed Magnitude (SM)

Most significant bit (MSB) (Left most bit) represents the sign.

- 0 = +ve
- 1 = -ve

> [!EXAMPLE] Decimal (from -3 to 3) to Signed Magnitude (4-bit)
> | Decimal | Signed-Magnitude |
> |---------|-------------------|
> | -3      | 1011              |
> | -2      | 1010              |
> | -1      | 1001              |
> | -0      | 1000              |
> | 0       | 0000              |
> | 1       | 0001              |
> | 2       | 0010              |
> | 3       | 0011              |

## One's complement

If MSB == 0

- Represents a **positive** number.
- Simply convert to decimal.
  If (MSB == 1)
- Represents a **negative** number
- So, flip all of the bits
- Then convert to the decimal number (And put the negative sign)

| Decimal | One's complement |
| ------- | ---------------- |
| 2       | 0010             |
|         |                  |
|         |                  |
#todo

## 2's complement

Combination of [[#Signed Magnitude (SM)|Signed Magnitude]], [[#One's complement]], but after that, +1 to the result

Features of 2's complement:

- Only 1 representation of 0
- Can add 2's complement directly

### Binary $\to$ decimal

#### Method 1

#### Method 2

### Decimal $\to$ binary

1. Convert to [[Encoding - BIN, OCT, DEC, HEX|binary]] (ignore the sign)
2. If negative, flip the result
3. Add 1. If it overflow, discard it
4. If the decimal is negative, add 1 to the start. Else add 0 to the start.

> [!EXAMPLE] ==\[NEGATIVE]== Convert _-6_ to binary represented as 2's complement.
>
> 1. **Convert binary**: _+6_ in binary is _110_
> 2. **Flip the result**: _001_
> 3. **Add 1**: _010_
> 4. **Add 1 to the start as it's negative**: _1010_

> [!EXAMPLE] ==\[POSITIVE]== Convert _7_ to binary represented as 2's complement.
>
> 1. **Convert binary**: _+7_ in binary is _111_\*\*~~
> 2. **Add 0 to the start as it's positive**: _0111_
>
> NOTE: Don't need to flip and add 1 as it's positive

### Adding numbers
