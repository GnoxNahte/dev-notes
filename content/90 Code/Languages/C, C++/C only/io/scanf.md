---
publish: true
created: 2026-01-04T15:30:57.785+08:00
modified: 2026-02-20T22:43:25.757+08:00
published: 2026-02-20T22:43:25.757+08:00
tags:
  - todo
cssclasses: ""
links/docs: https://cplusplus.com/reference/cstdio/scanf/
---



## Declaration
```c
int scanf ( const char * format, ... );
```

## Example
```c
/* scanf example */
#include <stdio.h>

int main ()
{
  char str [80];
  int i;

  printf ("Enter your family name: ");
  scanf ("%79s",str);  
  printf ("Enter your age: ");
  scanf ("%d",&i);
  printf ("Mr. %s , %d years old.\n",str,i);
  printf ("Enter a hexadecimal number: ");
  scanf ("%x",&i);
  printf ("You have entered %#x (%d).\n",i,i);
  
  return 0;
}
```

```c
Enter your family name: Soulie
Enter your age: 29
Mr. Soulie , 29 years old.
Enter a hexadecimal number: ff
You have entered 0xff (255).
```
