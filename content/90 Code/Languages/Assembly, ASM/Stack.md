---
publish: true
---

This is related to the `rsp` register
`rsp` will

Whenever u `push`, `rsp` will **decrease** by data size (`db`, `dw`, `dd`, `dq`)
Opposite for `pop` - `rsp` will **increase** by data size (`db`, `dw`, `dd`, `dq`)

> [!WARNING] There must be the same number of `push` and `pop`!

Whenever [[90 Code/Languages/Assembly, ASM/Functions|function is called]], the instruction of the next instruction will be pushed to the stack.
Once the function is returned, it'll pop `rsp`. See [[90 Code/Languages/Assembly, ASM/Functions|Functions]] for more info.

If want to access the value of stack without popping,
can use `rsp + 8` - This
