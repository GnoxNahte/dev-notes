---
publish: true
aliases:
  - binary
  - decimal
  - hexadecimal
---

## Numbering systems
Types: Decimal, Oct, Hex, Binary
Syntax: Subscript is used to show the base. 
- $10_{2}$ = 10 in BIN = $2_{10}$
- $10_{8}$ = 10 in OCT = $8_{10}$
- $10_{10}$ = 10 in DEC = $10_{10}$
- $10_{16}$ = 10 in HEX = $16_{10}$
### Adding in other systems
Example: In Oct

### Converting between systems
#### BIN to DEC
Multiply wherever it has 1 by $2^{\text{bit pos}}$ then add everything. (bit pos start from 0)

> [!EXAMPLE]
> | Binary      | 1   | 0   | 1   | 0   | 1   | 1   | 0   | 1   | Result             |
> | ----------- | --- | --- | --- | --- | --- | --- | --- | --- | ------------------ |
> | Multiply by | 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   | -                  |
> | Decimal     | 128 | 0   | 32  | 0   | 8   | 4   | 0   | 1   | $128+32+8+4+1=173$ |

#### DEC to BIN
1. Divide decimal number by 2
2. Save remainder (It represents the binary number on the right (Least significant bit))
3. If quotient is > 0, repeat step 1 but divide by quotient
4. Binary result = the remainders of Step 2 from the last

> [!EXAMPLE] 
> $$
> \begin{align}
> \text{Division} &= \text{Quotient (Remainder)} \\
> \frac{10}{2} &= 5 (0) \\
> \frac{5}{2} &= 2(1) \\
> \frac{2}{2} &= 1(0) \\
> \frac{1}{2} &= 0(1)
> \end{align}
> $$
> As shown, need to divide until Quotient == 0
> $10_{10}=1010_{2}$

> [!Example]- Another example
> From 72 (DEC) $\to$ BIN
> 72/2 = 36, 0
> 36/2 = 18, 0
> 18/2 = 9, 0
> 9/2 = 4, 1
> 4/2 = 2, 0
> 2/2 = 1, 0
> 1/2 = 0, 1
> 
> $72_{10}=1001000_{2}$

#### Lookup table
Useful for converting between BIN $\Leftrightarrow$ HEX or BIN $\Leftrightarrow$ OCT
- 4 digits of BIN $=$ 1 digit of HEX
- 

|BIN|OCT|HEX|DEC|
|---|---|---|---|
|0000|0|0|0|
|0001|1|1|1|
|0010|2|2|2|
|0011|3|3|3|
|0100|4|4|4|
|0101|5|5|5|
|0110|6|6|6|
|0111|7|7|7|
|1000|10|8|8|
|1001|11|9|9|
|1010|12|A|10|
|1011|13|B|11|
|1100|14|C|12|
|1101|15|D|13|
|1110|16|E|14|
|1111|17|F|15|

> [!TIP] Memorise converting $A_{16}$ to binary ($1010_{2}$)
> $A_{16} =10_{10}=1010_{2}$ - Note in binary, there's two "10"s

