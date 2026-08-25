---
publish: true
created: 2026-01-04T07:30:57.665Z
modified: 2026-08-04T00:40:27.615Z
published: 2026-08-04T00:40:27.615Z
tags:
  - todo
---

```c
    int a = 1, b = 2, c = 3;
    
    // Postfix - && first, || second
    printf("%d\n", a++ == 1 && b++ == 2 || c++ == 3);
    printf("a = %d, b = %d, c = %d\n", a, b, c);
    
    printf("-------------------\n");
    
    // Postfix - || first, && second
    a = 1, b = 2, c = 3;
    printf("%d\n", a++ == 1 || b++ == 2 && c++ == 3);
    printf("a = %d, b = %d, c = %d\n", a, b, c);
    
    printf("-------------------\n");
    
    // Prefix - || first, && second
    a = 1, b = 2, c = 3;
    printf("%d\n", ++a == 2 || ++b == 3 && ++c == 4);
    printf("a = %d, b = %d, c = %d\n", a, b, c);
```
