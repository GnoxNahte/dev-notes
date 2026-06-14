---
publish: true
created: 2026-01-04T15:30:57.769+08:00
modified: 2026-05-31T23:01:19.901+08:00
published: 2026-05-31T23:01:19.901+08:00
---

## Generate random double

```c
static inline double rand_d(double min, double max) {
    return (rand() / (double)INT_MAX) * (max - min) - min;
}
```
