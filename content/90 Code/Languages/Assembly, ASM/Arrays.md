---
publish: true
---

Prerequisite:

- [[Defining data]]

See also:

- [[Control Flow#Loop through array|Loop through array]]

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
