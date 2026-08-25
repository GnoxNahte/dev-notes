---
publish: true
created: 2026-06-11T13:45:45.495Z
modified: 2026-06-11T13:49:34.266Z
published: 2026-06-11T13:49:34.266Z
tags:
  - todo
---

## Steps

You need to seek to the end of the file and then ask for the position:

```cpp
fseek(fp, 0L, SEEK_END); 
sz = ftell(fp);
```

You can then seek back, e.g.:

```cpp
fseek(fp, 0L, SEEK_SET);
```

or (if seeking to go to the beginning)

```cpp
rewind(fp);
```

Source:

- [StackOverflow - How can I get a file's size in C?](https://stackoverflow.com/questions/238603/how-can-i-get-a-files-size-in-c)
