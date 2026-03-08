---
publish: true
aliases:
  - enum class
  - enum struct
  - scoped enums
  - enum scope
---

## Syntax - C enums
```cpp
enum Suit {
	SPADE, // Default set to 0
	HEART, // 1
	CLUB,  // 2
	DIAMOND, // 3
	SUIT_COUNT, // 4
}

// Unnamed enums - used for defining integer consts
enum {
	ZERO,
	ONE,
	TWO,
	TEN = 10,
}

// Implicit converts to int, suit = 2
int suit = CLUB; 

```

> [!NOTE] Implicit conversions between `int` $\iff$ `enum`
> #todo 

## Syntax - Scoped Enums (C++)
Why use this? - Has more type safety as there's no implicit conversions between `int` and `enum`
#todo 
```cpp

```

### Overloading operators
```cpp
enum Week { Mon = 1, Tue, Wed, Thu, Fri, Sat, Sun };

// Prefix
Week& operator++(Week& w) {
	if (w == Week::Sun)
		w = Week::Mon;
	else 
		w = Week{static_cast<int>(w) + 1};	
	return w;
}

// Postfix
Week operator++(Week& w, int) {
	Week tmp{w};
	++w; // Use overloaded prefix
	return tmp;
}

Week w = Week{4};
Week w2 = ++w; // w2 = Fri, w = Fri
Week w3 = w++; // w3 = Fri, w = Sat
```




