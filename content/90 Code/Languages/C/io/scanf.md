---
publish: true
created: 2026-01-04T07:30:57.785Z
modified: 2026-05-31T15:01:50.022Z
published: 2026-05-31T15:01:50.022Z
tags:
  - todo
links/docs: https://cplusplus.com/reference/cstdio/scanf/
---

## Declaration

```c
int scanf ( const char * format, ... );
```

## Example

### Code

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

### Output

```c
Enter your family name: Soulie
Enter your age: 29
Mr. Soulie , 29 years old.
Enter a hexadecimal number: ff
You have entered 0xff (255).
```
