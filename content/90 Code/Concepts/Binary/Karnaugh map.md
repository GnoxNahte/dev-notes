---
publish: true
aliases:
  - K-Map
  - K map
---

## Info
Quick method to simplify 3 [[90 Code/Concepts/Binary/Boolean algebra]] variables

## Karnaugh map
Simplifying 3 variables
### Example scenarios
```tabs

--- Y = C

| AB\C | 0   | 1   |
| ---- | --- | --- |
| 00   | 0   | 1   |
| 01   | 0   | 1   |
| 11   | 0   | 1   |
| 10   | 0   | 1   |

--- Y = B

| AB\C | 0   | 1   |
| ---- | --- | --- |
| 00   | 0   | 0   |
| 01   | 1   | 1   |
| 11   | 1   | 1   |
| 10   | 0   | 0   |

--- Y = 1

| AB\C | 0   | 1   |
| ---- | --- | --- |
| 00   | 1   | 1   |
| 01   | 1   | 1   |
| 11   | 1   | 1   |
| 10   | 1   | 1   |

--- Y = !AB!C + ABC

| AB\C | 0   | 1   |
| ---- | --- | --- |
| 00   | 0   | 0   |
| 01   | 1   | 0   |
| 11   | 0   | 1   |
| 10   | 0   | 0   |
```



