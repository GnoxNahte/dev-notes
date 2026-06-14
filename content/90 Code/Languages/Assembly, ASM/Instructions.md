---
publish: true
created: 2026-01-04T15:30:57.696+08:00
modified: 2026-02-15T08:57:40.092+08:00
published: 2026-02-15T08:57:40.092+08:00
tags:
  - todo
---

## Summary (Common instructions)

| Instruction    | Action    |
| -------------- | --------- |
| `mov src, dst` | src = dst |
|                |           |

### General

#### mov

### Arithmetic

#### add

#### sub

> [!NOTE] Similar to [[#cmp]], just that sub WILL set the result to the destination
> Both will set the [[EFLAGS]] (SF, ZF, OF)

#### imul

````tabs
--- Format
```nasm
imul <register>
```
Multiplies rax by `<register>`
--- Example
```nasm
imul r10
```
Multiplies rax by `r10`
````

#todo

```nasm
;This is 1 x 16^15 = 16^15
mov rax, 0x1000000000000000
mov r10, 0x1000000000000000

;This calculates 16^(15*2) = 16^30
;Product will be 0x0100000000000000:0000000000000000
imul r10
```

#### idiv

```nasm
idiv r10
```

Divides `rdx`:`rax` by r10. (Integer division)
Upper 8 bytes stored in `rdx`, Lower 8 bytes stored in `rax`

If not intended to divide by the extremely large number, set `rdx` to 0 - `xor rdx, rdx`. Remember to push if `rdx` is still needed.

Example:

```nasm
mov rdx, 0x00000001
mov rax, 0x00000002
;rdx:rax = 0x0000000100000002 (in hex)

mov r10, 3

; This divides 0x0000000100000002 / 0x3
idiv r10
```

### Control Flow

## cmp

```nasm
```

> [!NOTE] Similar to [[#sub]], just that sub cmp WILL NOT set the result to the destination
> Both will set the [[EFLAGS]] (SF, ZF, OF)

## jmp

## Notes
