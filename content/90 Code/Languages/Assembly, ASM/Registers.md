---
publish: true
tags:
  - todo
---

[[11 Assembler basics - Lectorial.pdf#page=17|11 Assembler basics - Lectorial, p.17]]
https://cs61.seas.harvard.edu/site/2018/Asm1/

## Summary

| Full register name (64-bits/8 bytes) | 32-bit  <br>(bits 0–31) | 16-bit  <br>(bits 0–15) | 8-bit low  <br>(bits 0–7) | 8-bit high  <br>(bits 8–15) | Use in calling convention                                     | Callee-saved? |
| ------------------------------------ | ----------------------- | ----------------------- | ------------------------- | --------------------------- | ------------------------------------------------------------- | ------------- |
| General-purpose registers:           |                         |                         |                           |                             |                                                               |               |
| **%rax**                             | %eax                    | %ax                     | %al                       | %ah                         | Return value (accumulator)                                    | No            |
| **%rbx**                             | %ebx                    | %bx                     | %bl                       | %bh                         | –                                                             | **Yes**       |
| **%rcx**                             | %ecx                    | %cx                     | %cl                       | %ch                         | 4th function argument                                         | No            |
| **%rdx**                             | %edx                    | %dx                     | %dl                       | %dh                         | 3rd function argument                                         | No            |
| **%rsi**                             | %esi                    | %si                     | %sil                      | –                           | 2nd function argument                                         | No            |
| **%rdi**                             | %edi                    | %di                     | %dil                      | –                           | 1st function argument                                         | No            |
| **%r8**                              | %r8d                    | %r8w                    | %r8b                      | –                           | 5th function argument                                         | No            |
| **%r9**                              | %r9d                    | %r9w                    | %r9b                      | –                           | 6th function argument                                         | No            |
| **%r10**                             | %r10d                   | %r10w                   | %r10b                     | –                           | –                                                             | No            |
| **%r11**                             | %r11d                   | %r11w                   | %r11b                     | –                           | –                                                             | No            |
| **%r12**                             | %r12d                   | %r12w                   | %r12b                     | –                           | –                                                             | **Yes**       |
| **%r13**                             | %r13d                   | %r13w                   | %r13b                     | –                           | –                                                             | **Yes**       |
| **%r14**                             | %r14d                   | %r14w                   | %r14b                     | –                           | –                                                             | **Yes**       |
| **%r15**                             | %r15d                   | %r15w                   | %r15b                     | –                           | –                                                             | **Yes**       |
| Special-purpose registers:           |                         |                         |                           |                             |                                                               |               |
| **%rsp**                             | %esp                    | %sp                     | %spl                      | –                           | Stack pointer                                                 | **Yes**       |
| **%rbp**                             | %ebp                    | %bp                     | %bpl                      | –                           | Base pointer  <br>(general-purpose in some compiler modes)    | **Yes**       |
| **%rip**                             | %eip                    | %ip                     | –                         | –                           | Instruction pointer  <br>(Program counter; called \$pc in GDB) | \*             |
| **%rflags**                          | %eflags                 | %flags                  | –                         | –                           | Flags and condition codes                                     | No            |

| Symbol | Meaning     | Short Description        |
| ------ | ----------- | ------------------------ |
| `rax`  | Accumulator | Arithmetic Operations    |
| `rbx`  | Base        | Pointer to data          |
| `rcx`  | Counter     | Used as counter for loop |
| `rdx`  |             |                          |
| `rsi`  |             |                          |
| `rdi`  |             |                          |
| `rsp`  |             |                          |
| `rbp`  |             |                          |
| `rip`  |             |                          |

## Size

> [!WARNING] 1 Hex digit = half a byte. 2 Hex digit = 1 full byte
> So,

```nasm
section .data
; Byte
byteValue db 0x12
byteArray db 0x12, 0x2b, 0xc3, 0x7d, 0xef

; Word
wordValue dw 0x2b12
wordArray dw 0x2b12, 0x7dc3, 0xffef, 0x5138
```

```nasm
; How is it represented in binary?
; <pad with 24 zeros> 01 00 00 00
; Why 24? Hex 
mov rax 0x1000 
```

## For functions

By convention:

- Caller - Use `rdi`, `rsi`, `rdx`, `rcx`, `r8` - `r11`
- Callee - Use `rbx`, `rsp`, `rbp`, `r12` - `r15`

## `rax`
