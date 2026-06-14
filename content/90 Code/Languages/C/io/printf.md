---
publish: true
created: 2026-01-04T15:30:57.785+08:00
modified: 2026-02-20T22:43:22.925+08:00
published: 2026-02-20T22:43:22.925+08:00
links/docs: https://cplusplus.com/reference/cstdio/printf/
---

Links:

- [cppreference - printf, fprintf, sprintf, snprintf, printf\_s, fprintf\_s, sprintf\_s, snprintf\_s](https://en.cppreference.com/w/c/io/fprintf.html)

## Declaration

```c
int printf ( const char * format, ... );
```

> [!NOTE] Difference
> `printf` outputs to the standard output stream (`stdout`)
> `fprintf` goes to a file handle (`FILE*`)
> `sprintf` goes to a buffer you allocated. (`char*`)

## Example

```c
/* printf example */
#include <stdio.h>

int main()
{
   printf ("Characters: %c %c \n", 'a', 65);        // Characters: a A
   printf ("Decimals: %d %ld\n", 1977, 650000L);    // Decimals: 1977 650000
   printf ("Preceding with blanks: %10d \n", 1977); // Preceding with blanks:       1977
   printf ("Preceding with zeros: %010d \n", 1977); // Preceding with zeros: 0000001977
   printf ("Some different radices: %d %x %o %#x %#o \n", 100, 100, 100, 100, 100); // Some different radices: 100 64 144 0x64 0144
   printf ("floats: %4.2f %+.0e %E \n", 3.1416, 3.1416, 3.1416); // floats: 3.14 +3e+000 3.141600E+000
   printf ("Width trick: %*d \n", 5, 10); // Width trick:    10
   printf ("%s \n", "A string"); // A string
   
    // My examples for flags & width
    printf("Num: '%d'\n", 123);     // Num: '123'        => Without any flags/width
    printf("Num: '%10d'\n", 123);   // Num: '       123' => Right justify text (Default)
    printf("Num: '%-10d'\n", 123);  // Num: '123       ' => Left justify text (Add '-')
    printf("Num: '%010d'\n", 123);  // Num: '0000000123' => Left pads with '0' instead of ' ' (Add '0' after '%')
   return 0;
}
```

## Params

### format

Contain embedded format specifiers that are replaced by the values in the additional arguments

Follows this prototype:

```
%[flags][width][.precision][length]specifier
```

Jump to: [[#Flags]] | [[#Width]] | [[#Precision]] | [[#Length]] | [[#Specifier/Type]]

#### Specifier/Type

| _specifier_ | Output                                                                                                                                                              | Example      |
| ----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------- |
| d _or_ i    | Signed decimal integer                                                                                                                                              | 392          |
| u           | Unsigned decimal integer                                                                                                                                            | 7235         |
| o           | Unsigned octal                                                                                                                                                      | 610          |
| x           | Unsigned hexadecimal integer                                                                                                                                        | 7fa          |
| X           | Unsigned hexadecimal integer (uppercase)                                                                                                                            | 7FA          |
| f           | Decimal floating point, lowercase                                                                                                                                   | 392.65       |
| F           | Decimal floating point, uppercase                                                                                                                                   | 392.65       |
| e           | Scientific notation (mantissa/exponent), lowercase                                                                                                                  | 3.9265e+2    |
| E           | Scientific notation (mantissa/exponent), uppercase                                                                                                                  | 3.9265E+2    |
| g           | Use the shortest representation: %e or %f                                                                                                                           | 392.65       |
| G           | Use the shortest representation: %E or %F                                                                                                                           | 392.65       |
| a           | Hexadecimal floating point, lowercase                                                                                                                               | -0xc.90fep-2 |
| A           | Hexadecimal floating point, uppercase                                                                                                                               | -0XC.90FEP-2 |
| c           | Character                                                                                                                                                           | a            |
| s           | String of characters                                                                                                                                                | sample       |
| p           | Pointer address                                                                                                                                                     | b8000000     |
| n           | Nothing printed.  <br>The corresponding argument must be a pointer to a signed int.  <br>The number of characters written so far is stored in the pointed location. |              |
| %           | A % followed by another % character will write a single % to the stream.                                                                                            | %            |

#### Flags

| _flags_   | description                                                                                                                                                                                                                                                                                                      |
| --------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -         | Left-justify within the given field width; Right justification is the default (see _width_ sub-specifier).                                                                                                                                                                                                       |
| +         | Forces to preceed the result with a plus or minus sign (+ or -) even for positive numbers. By default, only negative numbers are preceded with a - sign.                                                                                                                                                         |
| _(space)_ | If no sign is going to be written, a blank space is inserted before the value.                                                                                                                                                                                                                                   |
| #         | Used with o, x or X specifiers the value is preceeded with 0, 0x or 0X respectively for values different than zero.  <br>Used with a, A, e, E, f, F, g or G it forces the written output to contain a decimal point even if no more digits follow. By default, if no digits follow, no decimal point is written. |
| 0         | Left-pads the number with zeroes (0) instead of spaces when padding is specified (see _width_ sub-specifier).                                                                                                                                                                                                    |

#### Width

| _width_    | description                                                                                                                                                                                          |
| ---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _(number)_ | Minimum number of characters to be printed. If the value to be printed is shorter than this number, the result is padded with blank spaces. The value is not truncated even if the result is larger. |
| \*          | The _width_ is not specified in the _format_ string, but as an additional integer value argument preceding the argument that has to be formatted.                                                    |

#### Precision

| _.precision_ | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ._number_    | For integer specifiers (d, i, o, u, x, X): _precision_ specifies the minimum number of digits to be written. If the value to be written is shorter than this number, the result is padded with leading zeros. The value is not truncated even if the result is longer. A _precision_ of 0 means that no character is written for the value 0.  <br>For a, A, e, E, f and F specifiers: this is the number of digits to be printed **after** the decimal point (by default, this is 6).  <br>For g and G specifiers: This is the maximum number of significant digits to be printed.  <br>For s: this is the maximum number of characters to be printed. By default all characters are printed until the ending null character is encountered.  <br>If the period is specified without an explicit value for _precision_, 0 is assumed. |
| .\*           | The _precision_ is not specified in the _format_ string, but as an additional integer value argument preceding the argument that has to be formatted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Length

|          | specifiers                                   |                                              |                 |                                        |          |       |                                               |
| -------- | -------------------------------------------- | -------------------------------------------- | --------------- | -------------------------------------- | -------- | ----- | --------------------------------------------- |
| _length_ | d i                                          | u o x X                                      | f F e E g G a A | c                                      | s        | p     | n                                             |
| _(none)_ | int                                          | unsigned int                                 | double          | int                                    | char\*    | void\* | int\*                                          |
| hh       | signed char                                  | unsigned char                                | -               | -                                      | -        | -     | signed char\*                                  |
| h        | short int                                    | unsigned short int                           | -               | -                                      | -        | -     | short int\*                                    |
| l        | long int                                     | unsigned long int                            | -               | [wint\_t](https://cplusplus.com/wint_t) | wchar\_t\* | -     | long int\*                                     |
| ll       | long long int                                | unsigned long long int                       | -               | -                                      | -        | -     | long long int\*                                |
| j        | [intmax\_t](https://cplusplus.com/intmax_t)   | [uintmax\_t](https://cplusplus.com/uintmax_t) | -               | -                                      | -        | -     | [intmax\_t](https://cplusplus.com/intmax_t)\*   |
| z        | [size\_t](https://cplusplus.com/size_t)       | [size\_t](https://cplusplus.com/size_t)       | -               | -                                      | -        | -     | [size\_t](https://cplusplus.com/size_t)\*       |
| t        | [ptrdiff\_t](https://cplusplus.com/ptrdiff_t) | [ptrdiff\_t](https://cplusplus.com/ptrdiff_t) | -               | -                                      | -        | -     | [ptrdiff\_t](https://cplusplus.com/ptrdiff_t)\* |
| L        | -                                            | -                                            | long double     | -                                      | -        | -     | -                                             |

## Return value

On success, the total number of characters written is returned.

If a writing error occurs, the _error indicator_ ([ferror](https://cplusplus.com/ferror)) is set and a negative number is returned.

If a multibyte character encoding error occurs while writing wide characters, [errno](https://cplusplus.com/errno) is set to EILSEQ and a negative number is returned.
