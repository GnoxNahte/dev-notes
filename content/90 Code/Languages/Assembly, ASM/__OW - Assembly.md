---
publish: true
---

Links:
- Documentation
	- [Official](http://ref.x86asm.net/coder64.html)
	- [Intel](https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html)
	- [NASM](https://www.nasm.us/xdoc/2.16.01/html/nasmdoc0.html) (ASM compiler)
	- AMD
- [Tutorial point](https://www.tutorialspoint.com/assembly_programming/assembly_registers.htm) 
- [x86-64 playground](https://app.x64.halb.it/) - Online ASM emulator
- [[90 Code/Tools/Gobolt]] - Tool to see disassembly from a high level programming language

## Notes
```base
views:
  - type: list
    name: List
    filters:
      and:
        - file.inFolder(this.file.folder) && file.path != this.file.path

```

## Hello world


## Registers - [[90 Code/Languages/Assembly, ASM/Registers\|Link]]
### Commonly used registers

#todo 

## Tips
### Set to register to 0
```nasm
	xor rdi, rdi
```
[[90 Code/Concepts/Binary/Logic gates\|XOR]] with itself sets everything to 0


## Cheatsheet
