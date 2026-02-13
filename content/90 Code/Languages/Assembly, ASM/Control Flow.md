---
publish: true
---

## Instructions
### jmp

### cmp

### Jump variations (je, jz, jne, jnz)
See the [[90 Code/Languages/Assembly, ASM/Control Flow#Jump variations Table\|table below]] for more info

> [!NOTE] `je` (jump if equal) and `jz` (jump if zero) are the same instructions
> Both will check [[90 Code/Languages/Assembly, ASM/EFLAGS#ZF\|ZF]] (Zero Flag) is set

### loop

## Examples
### Loop X times
#### Using jnz
By convention, use `rcx` as the counter (or as `i` in for loops)
```nasm
global main
main:
	mov rcx, 5

labelLoopStart:
	; Body of loop
	; For now simulate printing rcx
	; Will print "54321". NOTE without 0 (Because it uses jnz)
	PRINT rcx
	
	loop label
```

### Loop through array


## Other notes
### Jump variations Table
Source: [unixwiz.net - x86-jumps](http://unixwiz.net/techtips/x86-jumps.html)

| Instruction           | Description                                                          | signed-ness | Flags                 | short  <br>jump  <br>opcodes | near  <br>jump  <br>opcodes |
| --------------------- | -------------------------------------------------------------------- | ----------- | --------------------- | ---------------------------- | --------------------------- |
| JO                    | Jump if overflow                                                     |             | OF = 1                | 70                           | 0F 80                       |
| JNO                   | Jump if not overflow                                                 |             | OF = 0                | 71                           | 0F 81                       |
| JS                    | Jump if sign                                                         |             | SF = 1                | 78                           | 0F 88                       |
| JNS                   | Jump if not sign                                                     |             | SF = 0                | 79                           | 0F 89                       |
| JE  <br>JZ            | Jump if equal  <br>Jump if zero                                      |             | ZF = 1                | 74                           | 0F 84                       |
| JNE  <br>JNZ          | Jump if not equal  <br>Jump if not zero                              |             | ZF = 0                | 75                           | 0F 85                       |
| JB  <br>JNAE  <br>JC  | Jump if below  <br>Jump if not above or equal  <br>Jump if carry     | unsigned    | CF = 1                | 72                           | 0F 82                       |
| JNB  <br>JAE  <br>JNC | Jump if not below  <br>Jump if above or equal  <br>Jump if not carry | unsigned    | CF = 0                | 73                           | 0F 83                       |
| JBE  <br>JNA          | Jump if below or equal  <br>Jump if not above                        | unsigned    | CF = 1 or ZF = 1      | 76                           | 0F 86                       |
| JA  <br>JNBE          | Jump if above  <br>Jump if not below or equal                        | unsigned    | CF = 0 and ZF = 0     | 77                           | 0F 87                       |
| JL  <br>JNGE          | Jump if less  <br>Jump if not greater or equal                       | signed      | SF <> OF              | 7C                           | 0F 8C                       |
| JGE  <br>JNL          | Jump if greater or equal  <br>Jump if not less                       | signed      | SF = OF               | 7D                           | 0F 8D                       |
| JLE  <br>JNG          | Jump if less or equal  <br>Jump if not greater                       | signed      | ZF = 1 or SF <> OF    | 7E                           | 0F 8E                       |
| JG  <br>JNLE          | Jump if greater  <br>Jump if not less or equal                       | signed      | ZF = 0 and SF = OF    | 7F                           | 0F 8F                       |
| JP  <br>JPE           | Jump if parity  <br>Jump if parity even                              |             | PF = 1                | 7A                           | 0F 8A                       |
| JNP  <br>JPO          | Jump if not parity  <br>Jump if parity odd                           |             | PF = 0                | 7B                           | 0F 8B                       |
| JCXZ  <br>JECXZ       | Jump if %CX register is 0  <br>Jump if %ECX register is 0            |             | %CX = 0  <br>%ECX = 0 | E3                           |                             |

> [!NOTE] `ja` and `jb` are unsigned, `jg` and `jl` is signed
> To remember? 'a' and 'b' does not care about the sign
> ```nasm
> 	mov r10, 5
> 	mov r11, -7
> 	
> 	cmp r10, r11       ; r10 > r11 = 5 > -7 (TRUE)
> 	jg labelLarger     ; This is true, will jump
> 	
> 	PRINT "NOT Larger" ; Won't run (skip by jump)
> 	ret                ; Won't run
> 
> labelLarger:
> 	cmp r10, r11       ; Ignore sign so: abs(r10) > abs(r11) = 5 > 7 (FALSE)
> 	ja labelAbove      ; This is false, won't jump
> 	PRINT "NOT Above"  ; This will run
> 	
> 	ret                ; Will run and return
> 	
> labelAbove:
> 	ret                ; Won't run as won't jump to labelAbove
> ```

