---
publish: true
created: 2026-01-04T15:30:57.825+08:00
modified: 2026-03-30T21:28:00.834+08:00
published: 2026-03-30T21:28:00.834+08:00
tags:
---

## Compiling

### Compile and run (Enabling all warnings)

```wsl
gcc -std=c11 -pedantic-errors -Wstrict-prototypes -Wall -Wextra -Werror q.c -o q.out && ./q.out
```

### Automatically run and check for memory leaks

```wsl
gcc -std=c11 -pedantic-errors -Wstrict-prototypes -Wall -Wextra -Werror q.c -o q.out && valgrind --leak-check=yes ./q.out
```

Change `q.c` and `q.out`

## Options

### Main

Link: [Option Summary](https://gcc.gnu.org/onlinedocs/gcc-13.1.0/gcc/Option-Summary.html)

| <img width=75/>Option<img width=75/> | Description                                                                 | Link                                                                                 |
| -----------------------------------: | :-------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
|                           `-std=c11` | Use C11 standard                                                            | [Link](https://gcc.gnu.org/onlinedocs/gcc/C-Dialect-Options.html#index-std-1)        |
|                   `-pedantic-errors` | Generate errors (not just warnings) if code is not following C11 standard   |                                                                                      |
|                `-Wstrict-prototypes` | Disallow things allowed in old C standards                                  |                                                                                      |
|                              `-Wall` | Warn about anything the compiler finds shady                                | [Link](https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html#index-Wall)           |
|                            `-Wextra` | Warn about things shadier than `-Wall`                                      |                                                                                      |
|                            `-Werror` | Convert warnings to errors so that code with warnings can never be compiled |                                                                                      |
|                   `-o <output-file>` | Specify name of output file. (Defaults to a.out)                            |                                                                                      |
|                          `-D<MACRO>` | Defines a macro to pass to the program. Example: `-DMAX_ARR_SIZE=10`        |                                                                                      |
|                   `-g`, `-fsanitize` | #todo  (Check pointers address `fsanitize=address`)                         | [Link](https://gcc.gnu.org/onlinedocs/gcc-13.1.0/gcc/Debugging-Options.html#index-g) |

### Separating each compilation step

| Step name  | Option | Input<br>file ext | Output<br>file ext | Description                                                  | Link                                                                    |
| ---------- | ------ | ----------------- | ------------------ | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| Preprocess | `-E`   | `.c`              | `.i`               | Replacing header files and preprocessor macros               | [Link](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html#index-E) |
| Compile    | `-S`   | `.i`              | `.s`               | Preprocess C to Assembly                                     | [Link](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html#index-S) |
| Assemble   | `-c`   | `.s`              | `.o`               | Assembly to binary/object files                              | [Link](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html#index-c) |
| Link       | `-o`   | `.o`              | `.out`             | Link individual object files into a single binary executable | [Link](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html#index-o) |
To execute :

```bash
./<file-name>.out
```

To compile and execute in 1 command:

```bash
gcc <options> -o <file-name>.out && <file-name>.out
```

The `&&` means the command on the command will only execute if the left command runs successfully

Single dot (.) = Current directory
Double dot (..) = Parent directory

The options tell the compiler on step to stop at. Which means that the later steps can accept previous file extensions.
For example, Link (`-o`) can accept `.c`

[Stackoverflow](https://stackoverflow.com/questions/8527743/running-gccs-steps-manually-compiling-assembling-linking)

## Checking libraries (like \<stdio.h>)

List all libraries

```bash
cd /usr/include
ls
```

Opening a file

```bash
cd /usr/include
code <file-name>
```

## Relevant links

- [Documentation - Option summary](https://gcc.gnu.org/onlinedocs/gcc/Option-Summary.html)
