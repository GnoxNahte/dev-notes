---
publish: true
---

### Size - 1 byte

Use `db` for 1 byte (db - define byte)

```nasm
section .data
a db 0x55				; just the byte 0x55
b db 0x55, 0x56, 0x57 	; three bytes in succession
c db 'a', 0x55			; character consts are OK
d db 'hello', 13, 10	; string consts are OK
```

### Size - 2 byte

Use `dw` for 2 bytes (dw - define word)

```nasm
section .data
a dw 0x1234	; 0x32 0x12
b dw 'a'	; 0x61 0x00 (0x00 is padding)
c dw 'ab'	; 0x61 0x62
d dw 'abc'	; 0x61 0x62 0x63 0x00 (0x00 is padding)
```

### Size - 4 and 8 bytes

Use `dd` for 4 bytes (dd - define double word)
Use `dq` for 8 bytes (dq - define quad word)

```nasm
section .data
a dd 0x12345678			; 0x78 0x56 0x34 0x12
b dd 1.234567e20		; floating-point data
b dd 0.125				; 0x3e000000 (Stored in IEEE 754)
c dq 0x123456789abcdef0	; 8-byte const data
```

### Referencing data

Use `[<name>]`

```nasm
section .data
ten dd 10

section .start
mov rax, [dd]
```
