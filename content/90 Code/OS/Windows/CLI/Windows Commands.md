---
publish: true
created: 2026-01-04T07:30:57.800Z
modified: 2026-08-20T11:12:31.241Z
published: 2026-08-20T11:12:31.241Z
related-notes: "[[Linux Commands]]"
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

### Others

| Snippet                                     | Description       |
| ------------------------------------------- | ----------------- |
| `certutil -hashfile <file> <MD5 or SHA256>` | Get hash for file |
