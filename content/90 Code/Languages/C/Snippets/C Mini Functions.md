---
publish: true
created: 2026-01-04T07:30:57.769Z
modified: 2026-05-31T15:01:19.901Z
published: 2026-05-31T15:01:19.901Z
---

## Generate random double

```c
static inline double rand_d(double min, double max) {
    return (rand() / (double)INT_MAX) * (max - min) - min;
}
```
