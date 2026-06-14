---
publish: true
created: 2026-05-21T17:53:00.216+08:00
modified: 2026-06-06T18:32:59.230+08:00
published: 2026-06-06T18:32:59.230+08:00
tags:
  - todo
---

## Overview

If there's multiple `&`/`&&`, mainly in **templates**, it'll collapse it to become `&` or `&&`.

1. `A&` `&` becomes `A&`
2. `A&` `&&` becomes `A&`
3. `A&&` `&` becomes `A&`
4. `A&&` `&&` becomes `A&&`

Links:

- [ibm](https://www.ibm.com/docs/en/xl-c-and-cpp-aix/16.1.0?topic=operators-reference-collapsing-c11)
- [stackoverflow](https://stackoverflow.com/questions/13725747/what-are-the-reference-collapsing-rules-and-how-are-they-utilized-by-the-c-st)
