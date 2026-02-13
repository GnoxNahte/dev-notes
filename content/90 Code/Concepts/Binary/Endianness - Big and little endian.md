---
publish: true
aliases:
  - Big endian
  - Little endian
---

## Things to note

- It uses [[90 Code/Concepts/Binary/Bits and Byte\|Byte instead of Bits!]]
	- So it groups the bytes together
	- See the little endian example below, 
		- Big Endian: "87" -> "65" -> " 43" -> "21"
		- Little Endian: "21" -> "43" -> "65" -> "87"
- Most operating systems today use **little endian**
- Endianness only affects byte order! It DOES NOT affect array order
	- Example, given `unsigned int x[2] = { 0x9381DC7E, 0x274B1A9D };`
		- Big Endian: `9381DC7E, 274B1A9D`
		- Little Endian: `7EDC8193, 9D1A4B27`

## Difference
Terms:
- MSB (Most significant bit)
- LSB (Least significant bit)

> [!EXAMPLE] Given a HEX value 0x87654321
> 
> | Type          | Value      |
> | ------------- | ---------- |
> | Big Endian    | `87654321` |
> | Little Endian | `21436587` |

### Big Endian
 MSB on the left byte, LSB on the right most byte

### Little Endian
MSB on the right most byte, LSB on the left byte

## Code to change endian
```c
uint32_t ChangeEndianness(uint32_t value) {
	uint32_t result = 0;
	
	// NOTE: 
	// - 8 bits = 1 byte
	// - 24 bits = 3 bytes
	result |= (value & 0x000000FF) << 24; // Shift last byte left by 3 bytes
	result |= (value & 0x0000FF00) << 8; // Shift 2nd last byte left by 1 byte
	result |= (value & 0x00FF0000) >> 8; // Shift 2nd byte right by 1 byte
	result |= (value & 0xFF000000) >> 24; // Shift first byte right by 3 bytes
	return result;
}
```

Explaining the code at their different points

> [!NOTE]- `value & 0x000000FF`
> Get the last byte (last 8 bits)

> [!NOTE]- `(value & 0x000000FF) << 24`
> Shift the last bit to the front.
> Why 24? 
> - 24 bits = 3 byte
> - Shift it to the front

> [!NOTE]- `result |= (value & 0x000000FF) << 24`
> Set the first byte (8 bits) to the result


