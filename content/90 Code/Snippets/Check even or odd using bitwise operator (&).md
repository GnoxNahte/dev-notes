---
publish: true
created: 2026-06-22T04:39:26.677Z
modified: 2026-06-22T04:51:38.809Z
published: 2026-06-22T04:51:38.809Z
tags:
notes: Works for negative numbers too!
---

## Overview

```c
if (number & 1)
    number is odd
else // (number & 1) == 0
    number is even
```

For example, let's take integer 25, which is odd. In binary 25 is `00011001`. Notice that the least significant bit `b0` is 1.

```cpp
00011001    
00000001   (00000001 is 1 in binary)
       &
--------
00000001
```

Source: [StackOverflow](https://stackoverflow.com/a/25244680)

## Notes

> [!TIP] Works for negative numbers too!
> See: [[2's Complement]]
> Negative is only in the left-most bit which isn't affected

Other sources:

- [Redblob Games](https://www.redblobgames.com/grids/hexagons/implementation.html#offset)
