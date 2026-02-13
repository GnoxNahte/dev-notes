---
publish: true
---

## Basics

Whenever `call` is ran, it pushes the address instruction of the next line to `rsp`
Example:
#todo 
```nasm
	push rcx
	push rbx
	push rax
	
	push 1 ; Push param 1
	push 2 ; Push param 2
	call foo ; Push the next instruction (Line 9) to stack (rsp). 
	
	add rsp, 16 ; Pop but don't store the data anywhere (Add 16 to the )
	
	pop rcx
	pop rbx
	pop rax

foo:
	PRINT 

```

So, in summary:
- `call` - pushes the address of the next instruction to the stack
- `ret` - pops the address of the next instruction from the stack and jump to it.

> [!TIP] Push any registers you are still using to the stack
> Other functions might use those registers so to make sure it doesn't overwrite and lose it's original value


## Passing parameters
### Convention (?) - System V

### Using stack
#todo 
Another version using `rbp`:
#todo 
Why use this? - If the function also pushes to the stack, it `rsp` will change.
By using this, `rbp` will always be the same and stable.
```nasm
    ;;;Picture of stack;;;
    ;rbp address
    ;rip of add rsp, 16
    ;22
    ;11
    mov rbp, rsp;
    
    ; How to rewind the stack to the needed parameters
    mov rax, [rbp + 16] ;means 22
    add rax, [rbp + 24] ;means 11
    mov rcx, rax
```
### Using others



