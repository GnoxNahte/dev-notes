---
publish: true
created: 2026-01-04T15:30:57.729+08:00
modified: 2026-01-05T22:00:02.213+08:00
cssclasses: ""
---


```c
int[4][4] a = {
	 0,  1,  2,  3,
	 4,  5,  6,  7,
	 8,  9, 10, 11,
	12, 13, 14, 15,
}

void process(int (*arr)[])
{
	for (int x = 0; x <= 4; ++x) {
		for (int y = 0; y <= 4; ++y) {
			printf("%i", *(*arr + x) + y);
		}
	}
}
```

