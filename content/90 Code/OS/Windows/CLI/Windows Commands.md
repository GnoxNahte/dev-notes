---
related-notes: "[[90 Code/OS/Linux/Linux Commands]]"
publish: true
---


## General

| Command | Description           | Usage            |
| ------- | --------------------- | ---------------- |
| `cls`   | Clear screen          | `cls`            |
| `help`  | Show info on commands | `help <command>` |

### Snippets

| Snippet           | Description           |
| ----------------- | --------------------- |
| `doskey /history` | Check command history |

## File system

| Command        | Description                 | Usage                             |
| -------------- | --------------------------- | --------------------------------- |
| `dir`          | Lists files and folder      |                                   |
| `cd`           | Change directory            | `cd <dir>` or <br>`cd ../<dir>`   |
| `mkdir`or `md` | Create directory            | `mkdir <dir>`                     |
| `rmdir`        | Remove directory            | `rmdir <dir>`                     |
| `copy`         | Copy files                  | `copy <src-file> <dst-file-path>` |
| `del`          | Delete files                | `del <file>`                      |
| `move`         | Move/rename files           | `move <src-file> <dst-file-path>` |
| `type`         | Print contents of text file | `type <file>`                     |

### Snippets

| Snippet             | Description         |
| ------------------- | ------------------- |
| `type > nul <file>` | Create a empty file |

### Passing files

| Snippet                | Description                                                     |
| ---------------------- | --------------------------------------------------------------- |
| `./q.out < input.txt`  | Passes `input.txt` into the input stream when running `./q.out` |
| `./q.out > output.txt` | Outputs the result of `q.out` into `output.txt`                 |
