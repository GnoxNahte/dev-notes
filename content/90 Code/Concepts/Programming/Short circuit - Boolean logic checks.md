---
publish: true
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

