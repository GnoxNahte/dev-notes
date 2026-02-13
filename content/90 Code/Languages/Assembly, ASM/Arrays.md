---
publish: true
---

Prerequisite:
- [[90 Code/Languages/Assembly, ASM/Defining data]] 

See also:
- [[90 Code/Languages/Assembly, ASM/Control Flow#Loop through array\|Loop through array]]

## Defining arrays

```nasm
section .data
; "Hello world!" - Interpreted as a char array
; 10 - ASCII new line
; 0  - Null terminating character
str db "Hello World!",10,0 
```

> [!IMPORTANT] Adding adds by **byte**! NOT the type


#todo 
