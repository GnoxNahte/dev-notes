---
publish: true
created: 2026-02-15T01:09:58.757Z
modified: 2026-07-27T12:15:17.911Z
published: 2026-07-27T12:15:17.911Z
---

## Keybinds

| Shortcut                       | Action                                 | Command name                 |
| ------------------------------ | -------------------------------------- | ---------------------------- |
| `Ctrl + Alt + <Arrow>`         | Move caret to next ^\[subnote]subword   | Edit.NextSubword             |
| `Ctrl + Shift + Alt + <Arrow>` | Select next/previous ^\[subnote]subword | Edit.NextSubwordExtend       |
| `Shift + Alt + .`              | Select next word occurance             | Edit.InsertNextMatchingCaret |

[^subnote]: Subword - E.g. "MyVarName" - Will select "My", "Var", "Name" with each keypress

## Tips

### Find & Replace

#### Replace 2 spaces with 4 spaces

Find:

```
^  ([\w\/\@])
```

Replace:

```
    $1
```
