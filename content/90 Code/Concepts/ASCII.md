---
publish: true
links: https://www.ascii-code.com/
---

![](https://media.geeksforgeeks.org/wp-content/uploads/20240304094301/ASCII-Table.png)

## Common ASCII values

| DEC | Symbol          | Alt name |
| --- | --------------- | -------- |
| 0   | NULL            | 0        |
| 10  | Line Feed       | `\n`     |
| 13  | Carriage Return | `\r`     |
| 48  | 0               |          |
| 57  | 9               |          |
| 65  | A               |          |
| 90  | Z               |          |
| 97  | a               |          |
| 122 | z               |          |


## ASCII (Main)

```tabs
--- Control characters (0-31)
Unprintable control codes and are used to control peripherals

| DEC                                                 | HEX | BIN      | Symbol | Description                 |
| --------------------------------------------------- | --- | -------- | ------ | :-------------------------- |
| [0](https://www.ascii-code.com/0 "ASCII Code 0")    | 00  | 00000000 | NUL    | Null character              |
| [1](https://www.ascii-code.com/1 "ASCII Code 1")    | 01  | 00000001 | SOH    | Start of Heading            |
| [2](https://www.ascii-code.com/2 "ASCII Code 2")    | 02  | 00000010 | STX    | Start of Text               |
| [3](https://www.ascii-code.com/3 "ASCII Code 3")    | 03  | 00000011 | ETX    | End of Text                 |
| [4](https://www.ascii-code.com/4 "ASCII Code 4")    | 04  | 00000100 | EOT    | End of Transmission         |
| [5](https://www.ascii-code.com/5 "ASCII Code 5")    | 05  | 00000101 | ENQ    | Enquiry                     |
| [6](https://www.ascii-code.com/6 "ASCII Code 6")    | 06  | 00000110 | ACK    | Acknowledge                 |
| [7](https://www.ascii-code.com/7 "ASCII Code 7")    | 07  | 00000111 | BEL    | Bell, Alert                 |
| [8](https://www.ascii-code.com/8 "ASCII Code 8")    | 08  | 00001000 | BS     | Backspace                   |
| [9](https://www.ascii-code.com/9 "ASCII Code 9")    | 09  | 00001001 | HT     | Horizontal Tab              |
| [10](https://www.ascii-code.com/10 "ASCII Code 10") | 0A  | 00001010 | LF     | Line Feed                   |
| [11](https://www.ascii-code.com/11 "ASCII Code 11") | 0B  | 00001011 | VT     | Vertical Tabulation         |
| [12](https://www.ascii-code.com/12 "ASCII Code 12") | 0C  | 00001100 | FF     | Form Feed                   |
| [13](https://www.ascii-code.com/13 "ASCII Code 13") | 0D  | 00001101 | CR     | Carriage Return             |
| [14](https://www.ascii-code.com/14 "ASCII Code 14") | 0E  | 00001110 | SO     | Shift Out                   |
| [15](https://www.ascii-code.com/15 "ASCII Code 15") | 0F  | 00001111 | SI     | Shift In                    |
| [16](https://www.ascii-code.com/16 "ASCII Code 16") | 10  | 00010000 | DLE    | Data Link Escape            |
| [17](https://www.ascii-code.com/17 "ASCII Code 17") | 11  | 00010001 | DC1    | Device Control One (XON)    |
| [18](https://www.ascii-code.com/18 "ASCII Code 18") | 12  | 00010010 | DC2    | Device Control Two          |
| [19](https://www.ascii-code.com/19 "ASCII Code 19") | 13  | 00010011 | DC3    | Device Control Three (XOFF) |
| [20](https://www.ascii-code.com/20 "ASCII Code 20") | 14  | 00010100 | DC4    | Device Control Four         |
| [21](https://www.ascii-code.com/21 "ASCII Code 21") | 15  | 00010101 | NAK    | Negative Acknowledge        |
| [22](https://www.ascii-code.com/22 "ASCII Code 22") | 16  | 00010110 | SYN    | Synchronous Idle            |
| [23](https://www.ascii-code.com/23 "ASCII Code 23") | 17  | 00010111 | ETB    | End of Transmission Block   |
| [24](https://www.ascii-code.com/24 "ASCII Code 24") | 18  | 00011000 | CAN    | Cancel                      |
| [25](https://www.ascii-code.com/25 "ASCII Code 25") | 19  | 00011001 | EM     | End of medium               |
| [26](https://www.ascii-code.com/26 "ASCII Code 26") | 1A  | 00011010 | SUB    | Substitute                  |
| [27](https://www.ascii-code.com/27 "ASCII Code 27") | 1B  | 00011011 | ESC    | Escape                      |
| [28](https://www.ascii-code.com/28 "ASCII Code 28") | 1C  | 00011100 | FS     | File Separator              |
| [29](https://www.ascii-code.com/29 "ASCII Code 29") | 1D  | 00011101 | GS     | Group Separator             |
| [30](https://www.ascii-code.com/30 "ASCII Code 30") | 1E  | 00011110 | RS     | Record Separator            |
| [31](https://www.ascii-code.com/31 "ASCII Code 31") | 1F  | 00011111 | US     | Unit Separator              |

--- Printable characters (32-127)

| DEC                                                    | HEX | BIN      | Symbol  | Description                            |
| ------------------------------------------------------ | --- | -------- | ------- | :------------------------------------- |
| [32](https://www.ascii-code.com/32 "ASCII Code 32")    | 20  | 00100000 | SP      | Space                                  |
| [33](https://www.ascii-code.com/33 "ASCII Code 33")    | 21  | 00100001 | !       | Exclamation mark                       |
| [34](https://www.ascii-code.com/34 "ASCII Code 34")    | 22  | 00100010 | "       | Double quotes (or speech marks)        |
| [35](https://www.ascii-code.com/35 "ASCII Code 35")    | 23  | 00100011 | #       | Number sign                            |
| [36](https://www.ascii-code.com/36 "ASCII Code 36")    | 24  | 00100100 | $       | Dollar                                 |
| [37](https://www.ascii-code.com/37 "ASCII Code 37")    | 25  | 00100101 | %       | Per cent sign                          |
| [38](https://www.ascii-code.com/38 "ASCII Code 38")    | 26  | 00100110 | &       | Ampersand                              |
| [39](https://www.ascii-code.com/39 "ASCII Code 39")    | 27  | 00100111 | '       | Single quote                           |
| [40](https://www.ascii-code.com/40 "ASCII Code 40")    | 28  | 00101000 | (       | Open parenthesis (or open bracket)     |
| [41](https://www.ascii-code.com/41 "ASCII Code 41")    | 29  | 00101001 | )       | Close parenthesis (or close bracket)   |
| [42](https://www.ascii-code.com/42 "ASCII Code 42")    | 2A  | 00101010 | *       | Asterisk                               |
| [43](https://www.ascii-code.com/43 "ASCII Code 43")    | 2B  | 00101011 | +       | Plus                                   |
| [44](https://www.ascii-code.com/44 "ASCII Code 44")    | 2C  | 00101100 | ,       | Comma                                  |
| [45](https://www.ascii-code.com/45 "ASCII Code 45")    | 2D  | 00101101 | -       | Hyphen-minus                           |
| [46](https://www.ascii-code.com/46 "ASCII Code 46")    | 2E  | 00101110 | .       | Period, dot or full stop               |
| [47](https://www.ascii-code.com/47 "ASCII Code 47")    | 2F  | 00101111 | /       | Slash or divide                        |
| [48](https://www.ascii-code.com/48 "ASCII Code 48")    | 30  | 00110000 | 0       | Zero                                   |
| [49](https://www.ascii-code.com/49 "ASCII Code 49")    | 31  | 00110001 | 1       | One                                    |
| [50](https://www.ascii-code.com/50 "ASCII Code 50")    | 32  | 00110010 | 2       | Two                                    |
| [51](https://www.ascii-code.com/51 "ASCII Code 51")    | 33  | 00110011 | 3       | Three                                  |
| [52](https://www.ascii-code.com/52 "ASCII Code 52")    | 34  | 00110100 | 4       | Four                                   |
| [53](https://www.ascii-code.com/53 "ASCII Code 53")    | 35  | 00110101 | 5       | Five                                   |
| [54](https://www.ascii-code.com/54 "ASCII Code 54")    | 36  | 00110110 | 6       | Six                                    |
| [55](https://www.ascii-code.com/55 "ASCII Code 55")    | 37  | 00110111 | 7       | Seven                                  |
| [56](https://www.ascii-code.com/56 "ASCII Code 56")    | 38  | 00111000 | 8       | Eight                                  |
| [57](https://www.ascii-code.com/57 "ASCII Code 57")    | 39  | 00111001 | 9       | Nine                                   |
| [58](https://www.ascii-code.com/58 "ASCII Code 58")    | 3A  | 00111010 | :       | Colon                                  |
| [59](https://www.ascii-code.com/59 "ASCII Code 59")    | 3B  | 00111011 | ;       | Semicolon                              |
| [60](https://www.ascii-code.com/60 "ASCII Code 60")    | 3C  | 00111100 | <       | Less than (or open angled bracket)     |
| [61](https://www.ascii-code.com/61 "ASCII Code 61")    | 3D  | 00111101 | =       | Equals                                 |
| [62](https://www.ascii-code.com/62 "ASCII Code 62")    | 3E  | 00111110 | >       | Greater than (or close angled bracket) |
| [63](https://www.ascii-code.com/63 "ASCII Code 63")    | 3F  | 00111111 | ?       | Question mark                          |
| [64](https://www.ascii-code.com/64 "ASCII Code 64")    | 40  | 01000000 | @       | At sign                                |
| [65](https://www.ascii-code.com/65 "ASCII Code 65")    | 41  | 01000001 | A       | Uppercase A                            |
| [66](https://www.ascii-code.com/66 "ASCII Code 66")    | 42  | 01000010 | B       | Uppercase B                            |
| [67](https://www.ascii-code.com/67 "ASCII Code 67")    | 43  | 01000011 | C       | Uppercase C                            |
| [68](https://www.ascii-code.com/68 "ASCII Code 68")    | 44  | 01000100 | D       | Uppercase D                            |
| [69](https://www.ascii-code.com/69 "ASCII Code 69")    | 45  | 01000101 | E       | Uppercase E                            |
| [70](https://www.ascii-code.com/70 "ASCII Code 70")    | 46  | 01000110 | F       | Uppercase F                            |
| [71](https://www.ascii-code.com/71 "ASCII Code 71")    | 47  | 01000111 | G       | Uppercase G                            |
| [72](https://www.ascii-code.com/72 "ASCII Code 72")    | 48  | 01001000 | H       | Uppercase H                            |
| [73](https://www.ascii-code.com/73 "ASCII Code 73")    | 49  | 01001001 | I       | Uppercase I                            |
| [74](https://www.ascii-code.com/74 "ASCII Code 74")    | 4A  | 01001010 | J       | Uppercase J                            |
| [75](https://www.ascii-code.com/75 "ASCII Code 75")    | 4B  | 01001011 | K       | Uppercase K                            |
| [76](https://www.ascii-code.com/76 "ASCII Code 76")    | 4C  | 01001100 | L       | Uppercase L                            |
| [77](https://www.ascii-code.com/77 "ASCII Code 77")    | 4D  | 01001101 | M       | Uppercase M                            |
| [78](https://www.ascii-code.com/78 "ASCII Code 78")    | 4E  | 01001110 | N       | Uppercase N                            |
| [79](https://www.ascii-code.com/79 "ASCII Code 79")    | 4F  | 01001111 | O       | Uppercase O                            |
| [80](https://www.ascii-code.com/80 "ASCII Code 80")    | 50  | 01010000 | P       | Uppercase P                            |
| [81](https://www.ascii-code.com/81 "ASCII Code 81")    | 51  | 01010001 | Q       | Uppercase Q                            |
| [82](https://www.ascii-code.com/82 "ASCII Code 82")    | 52  | 01010010 | R       | Uppercase R                            |
| [83](https://www.ascii-code.com/83 "ASCII Code 83")    | 53  | 01010011 | S       | Uppercase S                            |
| [84](https://www.ascii-code.com/84 "ASCII Code 84")    | 54  | 01010100 | T       | Uppercase T                            |
| [85](https://www.ascii-code.com/85 "ASCII Code 85")    | 55  | 01010101 | U       | Uppercase U                            |
| [86](https://www.ascii-code.com/86 "ASCII Code 86")    | 56  | 01010110 | V       | Uppercase V                            |
| [87](https://www.ascii-code.com/87 "ASCII Code 87")    | 57  | 01010111 | W       | Uppercase W                            |
| [88](https://www.ascii-code.com/88 "ASCII Code 88")    | 58  | 01011000 | X       | Uppercase X                            |
| [89](https://www.ascii-code.com/89 "ASCII Code 89")    | 59  | 01011001 | Y       | Uppercase Y                            |
| [90](https://www.ascii-code.com/90 "ASCII Code 90")    | 5A  | 01011010 | Z       | Uppercase Z                            |
| [91](https://www.ascii-code.com/91 "ASCII Code 91")    | 5B  | 01011011 | [       | Opening bracket                        |
| [92](https://www.ascii-code.com/92 "ASCII Code 92")    | 5C  | 01011100 | \|&#92; |                                        |
| [93](https://www.ascii-code.com/93 "ASCII Code 93")    | 5D  | 01011101 | ]       | Closing bracket                        |
| [94](https://www.ascii-code.com/94 "ASCII Code 94")    | 5E  | 01011110 | ^       | Caret - circumflex                     |
| [95](https://www.ascii-code.com/95 "ASCII Code 95")    | 5F  | 01011111 | _       | Underscore                             |
| [96](https://www.ascii-code.com/96 "ASCII Code 96")    | 60  | 01100000 | `       | Grave accent                           |
| [97](https://www.ascii-code.com/97 "ASCII Code 97")    | 61  | 01100001 | a       | Lowercase a                            |
| [98](https://www.ascii-code.com/98 "ASCII Code 98")    | 62  | 01100010 | b       | Lowercase b                            |
| [99](https://www.ascii-code.com/99 "ASCII Code 99")    | 63  | 01100011 | c       | Lowercase c                            |
| [100](https://www.ascii-code.com/100 "ASCII Code 100") | 64  | 01100100 | d       | Lowercase d                            |
| [101](https://www.ascii-code.com/101 "ASCII Code 101") | 65  | 01100101 | e       | Lowercase e                            |
| [102](https://www.ascii-code.com/102 "ASCII Code 102") | 66  | 01100110 | f       | Lowercase f                            |
| [103](https://www.ascii-code.com/103 "ASCII Code 103") | 67  | 01100111 | g       | Lowercase g                            |
| [104](https://www.ascii-code.com/104 "ASCII Code 104") | 68  | 01101000 | h       | Lowercase h                            |
| [105](https://www.ascii-code.com/105 "ASCII Code 105") | 69  | 01101001 | i       | Lowercase i                            |
| [106](https://www.ascii-code.com/106 "ASCII Code 106") | 6A  | 01101010 | j       | Lowercase j                            |
| [107](https://www.ascii-code.com/107 "ASCII Code 107") | 6B  | 01101011 | k       | Lowercase k                            |
| [108](https://www.ascii-code.com/108 "ASCII Code 108") | 6C  | 01101100 | l       | Lowercase l                            |
| [109](https://www.ascii-code.com/109 "ASCII Code 109") | 6D  | 01101101 | m       | Lowercase m                            |
| [110](https://www.ascii-code.com/110 "ASCII Code 110") | 6E  | 01101110 | n       | Lowercase n                            |
| [111](https://www.ascii-code.com/111 "ASCII Code 111") | 6F  | 01101111 | o       | Lowercase o                            |
| [112](https://www.ascii-code.com/112 "ASCII Code 112") | 70  | 01110000 | p       | Lowercase p                            |
| [113](https://www.ascii-code.com/113 "ASCII Code 113") | 71  | 01110001 | q       | Lowercase q                            |
| [114](https://www.ascii-code.com/114 "ASCII Code 114") | 72  | 01110010 | r       | Lowercase r                            |
| [115](https://www.ascii-code.com/115 "ASCII Code 115") | 73  | 01110011 | s       | Lowercase s                            |
| [116](https://www.ascii-code.com/116 "ASCII Code 116") | 74  | 01110100 | t       | Lowercase t                            |
| [117](https://www.ascii-code.com/117 "ASCII Code 117") | 75  | 01110101 | u       | Lowercase u                            |
| [118](https://www.ascii-code.com/118 "ASCII Code 118") | 76  | 01110110 | v       | Lowercase v                            |
| [119](https://www.ascii-code.com/119 "ASCII Code 119") | 77  | 01110111 | w       | Lowercase w                            |
| [120](https://www.ascii-code.com/120 "ASCII Code 120") | 78  | 01111000 | x       | Lowercase x                            |
| [121](https://www.ascii-code.com/121 "ASCII Code 121") | 79  | 01111001 | y       | Lowercase y                            |
| [122](https://www.ascii-code.com/122 "ASCII Code 122") | 7A  | 01111010 | z       | Lowercase z                            |
| [123](https://www.ascii-code.com/123 "ASCII Code 123") | 7B  | 01111011 | {       | Opening brace                          |
| [124](https://www.ascii-code.com/124 "ASCII Code 124") | 7C  | 01111100 | \|      | Vertical bar                           |
| [125](https://www.ascii-code.com/125 "ASCII Code 125") | 7D  | 01111101 | }       | Closing brace                          |
| [126](https://www.ascii-code.com/126 "ASCII Code 126") | 7E  | 01111110 | ~       | Equivalency sign - tilde               |
| [127](https://www.ascii-code.com/127 "ASCII Code 127") | 7F  | 01111111 | DEL     | Delete                                 |
```

## Extended
| DEC                                                                          | HEX | BIN      | Symbol | Description                                |
| ---------------------------------------------------------------------------- | --- | -------- | ------ | :----------------------------------------- |
| [128](https://www.ascii-code.com/CP1252/128 "ASCII Code 128 (Windows-1252)") | 80  | 10000000 | €      | Euro sign                                  |
| [129](https://www.ascii-code.com/CP1252/129 "ASCII Code 129 (Windows-1252)") | 81  | 10000001 |        | Unused                                     |
| [130](https://www.ascii-code.com/CP1252/130 "ASCII Code 130 (Windows-1252)") | 82  | 10000010 | ‚      | Single low-9 quotation mark                |
| [131](https://www.ascii-code.com/CP1252/131 "ASCII Code 131 (Windows-1252)") | 83  | 10000011 | ƒ      | Latin small letter f with hook             |
| [132](https://www.ascii-code.com/CP1252/132 "ASCII Code 132 (Windows-1252)") | 84  | 10000100 | „      | Double low-9 quotation mark                |
| [133](https://www.ascii-code.com/CP1252/133 "ASCII Code 133 (Windows-1252)") | 85  | 10000101 | …      | Horizontal ellipsis                        |
| [134](https://www.ascii-code.com/CP1252/134 "ASCII Code 134 (Windows-1252)") | 86  | 10000110 | †      | Dagger                                     |
| [135](https://www.ascii-code.com/CP1252/135 "ASCII Code 135 (Windows-1252)") | 87  | 10000111 | ‡      | Double dagger                              |
| [136](https://www.ascii-code.com/CP1252/136 "ASCII Code 136 (Windows-1252)") | 88  | 10001000 | ˆ      | Modifier letter circumflex accent          |
| [137](https://www.ascii-code.com/CP1252/137 "ASCII Code 137 (Windows-1252)") | 89  | 10001001 | ‰      | Per mille sign                             |
| [138](https://www.ascii-code.com/CP1252/138 "ASCII Code 138 (Windows-1252)") | 8A  | 10001010 | Š      | Latin capital letter S with caron          |
| [139](https://www.ascii-code.com/CP1252/139 "ASCII Code 139 (Windows-1252)") | 8B  | 10001011 | ‹      | Single left-pointing angle quotation       |
| [140](https://www.ascii-code.com/CP1252/140 "ASCII Code 140 (Windows-1252)") | 8C  | 10001100 | Œ      | Latin capital ligature OE                  |
| [141](https://www.ascii-code.com/CP1252/141 "ASCII Code 141 (Windows-1252)") | 8D  | 10001101 |        | Unused                                     |
| [142](https://www.ascii-code.com/CP1252/142 "ASCII Code 142 (Windows-1252)") | 8E  | 10001110 | Ž      | Latin capital letter Z with caron          |
| [143](https://www.ascii-code.com/CP1252/143 "ASCII Code 143 (Windows-1252)") | 8F  | 10001111 |        | Unused                                     |
| [144](https://www.ascii-code.com/CP1252/144 "ASCII Code 144 (Windows-1252)") | 90  | 10010000 |        | Unused                                     |
| [145](https://www.ascii-code.com/CP1252/145 "ASCII Code 145 (Windows-1252)") | 91  | 10010001 | ‘      | Left single quotation mark                 |
| [146](https://www.ascii-code.com/CP1252/146 "ASCII Code 146 (Windows-1252)") | 92  | 10010010 | ’      | Right single quotation mark                |
| [147](https://www.ascii-code.com/CP1252/147 "ASCII Code 147 (Windows-1252)") | 93  | 10010011 | “      | Left double quotation mark                 |
| [148](https://www.ascii-code.com/CP1252/148 "ASCII Code 148 (Windows-1252)") | 94  | 10010100 | ”      | Right double quotation mark                |
| [149](https://www.ascii-code.com/CP1252/149 "ASCII Code 149 (Windows-1252)") | 95  | 10010101 | •      | Bullet                                     |
| [150](https://www.ascii-code.com/CP1252/150 "ASCII Code 150 (Windows-1252)") | 96  | 10010110 | –      | En dash                                    |
| [151](https://www.ascii-code.com/CP1252/151 "ASCII Code 151 (Windows-1252)") | 97  | 10010111 | —      | Em dash                                    |
| [152](https://www.ascii-code.com/CP1252/152 "ASCII Code 152 (Windows-1252)") | 98  | 10011000 | ˜      | Small tilde                                |
| [153](https://www.ascii-code.com/CP1252/153 "ASCII Code 153 (Windows-1252)") | 99  | 10011001 | ™      | Trade mark sign                            |
| [154](https://www.ascii-code.com/CP1252/154 "ASCII Code 154 (Windows-1252)") | 9A  | 10011010 | š      | Latin small letter S with caron            |
| [155](https://www.ascii-code.com/CP1252/155 "ASCII Code 155 (Windows-1252)") | 9B  | 10011011 | ›      | Single right-pointing angle quotation mark |
| [156](https://www.ascii-code.com/CP1252/156 "ASCII Code 156 (Windows-1252)") | 9C  | 10011100 | œ      | Latin small ligature oe                    |
| [157](https://www.ascii-code.com/CP1252/157 "ASCII Code 157 (Windows-1252)") | 9D  | 10011101 |        | Unused                                     |
| [158](https://www.ascii-code.com/CP1252/158 "ASCII Code 158 (Windows-1252)") | 9E  | 10011110 | ž      | Latin small letter z with caron            |
| [159](https://www.ascii-code.com/CP1252/159 "ASCII Code 159 (Windows-1252)") | 9F  | 10011111 | Ÿ      | Latin capital letter Y with diaeresis      |
| [160](https://www.ascii-code.com/CP1252/160 "ASCII Code 160 (Windows-1252)") | A0  | 10100000 | NBSP   | Non-breaking space                         |
| [161](https://www.ascii-code.com/CP1252/161 "ASCII Code 161 (Windows-1252)") | A1  | 10100001 | ¡      | Inverted exclamation mark                  |
| [162](https://www.ascii-code.com/CP1252/162 "ASCII Code 162 (Windows-1252)") | A2  | 10100010 | ¢      | Cent sign                                  |
| [163](https://www.ascii-code.com/CP1252/163 "ASCII Code 163 (Windows-1252)") | A3  | 10100011 | £      | Pound sign                                 |
| [164](https://www.ascii-code.com/CP1252/164 "ASCII Code 164 (Windows-1252)") | A4  | 10100100 | ¤      | Currency sign                              |
| [165](https://www.ascii-code.com/CP1252/165 "ASCII Code 165 (Windows-1252)") | A5  | 10100101 | ¥      | Yen sign                                   |
| [166](https://www.ascii-code.com/CP1252/166 "ASCII Code 166 (Windows-1252)") | A6  | 10100110 | ¦      | Pipe, broken vertical bar                  |
| [167](https://www.ascii-code.com/CP1252/167 "ASCII Code 167 (Windows-1252)") | A7  | 10100111 | §      | Section sign                               |
| [168](https://www.ascii-code.com/CP1252/168 "ASCII Code 168 (Windows-1252)") | A8  | 10101000 | ¨      | Spacing diaeresis - umlaut                 |
| [169](https://www.ascii-code.com/CP1252/169 "ASCII Code 169 (Windows-1252)") | A9  | 10101001 | ©      | Copyright sign                             |
| [170](https://www.ascii-code.com/CP1252/170 "ASCII Code 170 (Windows-1252)") | AA  | 10101010 | ª      | Feminine ordinal indicator                 |
| [171](https://www.ascii-code.com/CP1252/171 "ASCII Code 171 (Windows-1252)") | AB  | 10101011 | «      | Left double angle quotes                   |
| [172](https://www.ascii-code.com/CP1252/172 "ASCII Code 172 (Windows-1252)") | AC  | 10101100 | ¬      | Negation                                   |
| [173](https://www.ascii-code.com/CP1252/173 "ASCII Code 173 (Windows-1252)") | AD  | 10101101 | ­SHY   | Soft hyphen                                |
| [174](https://www.ascii-code.com/CP1252/174 "ASCII Code 174 (Windows-1252)") | AE  | 10101110 | ®      | Registered trade mark sign                 |
| [175](https://www.ascii-code.com/CP1252/175 "ASCII Code 175 (Windows-1252)") | AF  | 10101111 | ¯      | Spacing macron - overline                  |
| [176](https://www.ascii-code.com/CP1252/176 "ASCII Code 176 (Windows-1252)") | B0  | 10110000 | °      | Degree sign                                |
| [177](https://www.ascii-code.com/CP1252/177 "ASCII Code 177 (Windows-1252)") | B1  | 10110001 | ±      | Plus-or-minus sign                         |
| [178](https://www.ascii-code.com/CP1252/178 "ASCII Code 178 (Windows-1252)") | B2  | 10110010 | ²      | Superscript two - squared                  |
| [179](https://www.ascii-code.com/CP1252/179 "ASCII Code 179 (Windows-1252)") | B3  | 10110011 | ³      | Superscript three - cubed                  |
| [180](https://www.ascii-code.com/CP1252/180 "ASCII Code 180 (Windows-1252)") | B4  | 10110100 | ´      | Acute accent - spacing acute               |
| [181](https://www.ascii-code.com/CP1252/181 "ASCII Code 181 (Windows-1252)") | B5  | 10110101 | µ      | Micro sign                                 |
| [182](https://www.ascii-code.com/CP1252/182 "ASCII Code 182 (Windows-1252)") | B6  | 10110110 | ¶      | Pilcrow sign - paragraph sign              |
| [183](https://www.ascii-code.com/CP1252/183 "ASCII Code 183 (Windows-1252)") | B7  | 10110111 | ·      | Middle dot - Georgian comma                |
| [184](https://www.ascii-code.com/CP1252/184 "ASCII Code 184 (Windows-1252)") | B8  | 10111000 | ¸      | Spacing cedilla                            |
| [185](https://www.ascii-code.com/CP1252/185 "ASCII Code 185 (Windows-1252)") | B9  | 10111001 | ¹      | Superscript one                            |
| [186](https://www.ascii-code.com/CP1252/186 "ASCII Code 186 (Windows-1252)") | BA  | 10111010 | º      | Masculine ordinal indicator                |
| [187](https://www.ascii-code.com/CP1252/187 "ASCII Code 187 (Windows-1252)") | BB  | 10111011 | »      | Right double angle quotes                  |
| [188](https://www.ascii-code.com/CP1252/188 "ASCII Code 188 (Windows-1252)") | BC  | 10111100 | ¼      | Fraction one quarter                       |
| [189](https://www.ascii-code.com/CP1252/189 "ASCII Code 189 (Windows-1252)") | BD  | 10111101 | ½      | Fraction one half                          |
| [190](https://www.ascii-code.com/CP1252/190 "ASCII Code 190 (Windows-1252)") | BE  | 10111110 | ¾      | Fraction three quarters                    |
| [191](https://www.ascii-code.com/CP1252/191 "ASCII Code 191 (Windows-1252)") | BF  | 10111111 | ¿      | Inverted question mark                     |
| [192](https://www.ascii-code.com/CP1252/192 "ASCII Code 192 (Windows-1252)") | C0  | 11000000 | À      | Latin capital letter A with grave          |
| [193](https://www.ascii-code.com/CP1252/193 "ASCII Code 193 (Windows-1252)") | C1  | 11000001 | Á      | Latin capital letter A with acute          |
| [194](https://www.ascii-code.com/CP1252/194 "ASCII Code 194 (Windows-1252)") | C2  | 11000010 | Â      | Latin capital letter A with circumflex     |
| [195](https://www.ascii-code.com/CP1252/195 "ASCII Code 195 (Windows-1252)") | C3  | 11000011 | Ã      | Latin capital letter A with tilde          |
| [196](https://www.ascii-code.com/CP1252/196 "ASCII Code 196 (Windows-1252)") | C4  | 11000100 | Ä      | Latin capital letter A with diaeresis      |
| [197](https://www.ascii-code.com/CP1252/197 "ASCII Code 197 (Windows-1252)") | C5  | 11000101 | Å      | Latin capital letter A with ring above     |
| [198](https://www.ascii-code.com/CP1252/198 "ASCII Code 198 (Windows-1252)") | C6  | 11000110 | Æ      | Latin capital letter AE                    |
| [199](https://www.ascii-code.com/CP1252/199 "ASCII Code 199 (Windows-1252)") | C7  | 11000111 | Ç      | Latin capital letter C with cedilla        |
| [200](https://www.ascii-code.com/CP1252/200 "ASCII Code 200 (Windows-1252)") | C8  | 11001000 | È      | Latin capital letter E with grave          |
| [201](https://www.ascii-code.com/CP1252/201 "ASCII Code 201 (Windows-1252)") | C9  | 11001001 | É      | Latin capital letter E with acute          |
| [202](https://www.ascii-code.com/CP1252/202 "ASCII Code 202 (Windows-1252)") | CA  | 11001010 | Ê      | Latin capital letter E with circumflex     |
| [203](https://www.ascii-code.com/CP1252/203 "ASCII Code 203 (Windows-1252)") | CB  | 11001011 | Ë      | Latin capital letter E with diaeresis      |
| [204](https://www.ascii-code.com/CP1252/204 "ASCII Code 204 (Windows-1252)") | CC  | 11001100 | Ì      | Latin capital letter I with grave          |
| [205](https://www.ascii-code.com/CP1252/205 "ASCII Code 205 (Windows-1252)") | CD  | 11001101 | Í      | Latin capital letter I with acute          |
| [206](https://www.ascii-code.com/CP1252/206 "ASCII Code 206 (Windows-1252)") | CE  | 11001110 | Î      | Latin capital letter I with circumflex     |
| [207](https://www.ascii-code.com/CP1252/207 "ASCII Code 207 (Windows-1252)") | CF  | 11001111 | Ï      | Latin capital letter I with diaeresis      |
| [208](https://www.ascii-code.com/CP1252/208 "ASCII Code 208 (Windows-1252)") | D0  | 11010000 | Ð      | Latin capital letter ETH                   |
| [209](https://www.ascii-code.com/CP1252/209 "ASCII Code 209 (Windows-1252)") | D1  | 11010001 | Ñ      | Latin capital letter N with tilde          |
| [210](https://www.ascii-code.com/CP1252/210 "ASCII Code 210 (Windows-1252)") | D2  | 11010010 | Ò      | Latin capital letter O with grave          |
| [211](https://www.ascii-code.com/CP1252/211 "ASCII Code 211 (Windows-1252)") | D3  | 11010011 | Ó      | Latin capital letter O with acute          |
| [212](https://www.ascii-code.com/CP1252/212 "ASCII Code 212 (Windows-1252)") | D4  | 11010100 | Ô      | Latin capital letter O with circumflex     |
| [213](https://www.ascii-code.com/CP1252/213 "ASCII Code 213 (Windows-1252)") | D5  | 11010101 | Õ      | Latin capital letter O with tilde          |
| [214](https://www.ascii-code.com/CP1252/214 "ASCII Code 214 (Windows-1252)") | D6  | 11010110 | Ö      | Latin capital letter O with diaeresis      |
| [215](https://www.ascii-code.com/CP1252/215 "ASCII Code 215 (Windows-1252)") | D7  | 11010111 | ×      | Multiplication sign                        |
| [216](https://www.ascii-code.com/CP1252/216 "ASCII Code 216 (Windows-1252)") | D8  | 11011000 | Ø      | Latin capital letter O with slash          |
| [217](https://www.ascii-code.com/CP1252/217 "ASCII Code 217 (Windows-1252)") | D9  | 11011001 | Ù      | Latin capital letter U with grave          |
| [218](https://www.ascii-code.com/CP1252/218 "ASCII Code 218 (Windows-1252)") | DA  | 11011010 | Ú      | Latin capital letter U with acute          |
| [219](https://www.ascii-code.com/CP1252/219 "ASCII Code 219 (Windows-1252)") | DB  | 11011011 | Û      | Latin capital letter U with circumflex     |
| [220](https://www.ascii-code.com/CP1252/220 "ASCII Code 220 (Windows-1252)") | DC  | 11011100 | Ü      | Latin capital letter U with diaeresis      |
| [221](https://www.ascii-code.com/CP1252/221 "ASCII Code 221 (Windows-1252)") | DD  | 11011101 | Ý      | Latin capital letter Y with acute          |
| [222](https://www.ascii-code.com/CP1252/222 "ASCII Code 222 (Windows-1252)") | DE  | 11011110 | Þ      | Latin capital letter THORN                 |
| [223](https://www.ascii-code.com/CP1252/223 "ASCII Code 223 (Windows-1252)") | DF  | 11011111 | ß      | Latin small letter sharp s - ess-zed       |
| [224](https://www.ascii-code.com/CP1252/224 "ASCII Code 224 (Windows-1252)") | E0  | 11100000 | à      | Latin small letter a with grave            |
| [225](https://www.ascii-code.com/CP1252/225 "ASCII Code 225 (Windows-1252)") | E1  | 11100001 | á      | Latin small letter a with acute            |
| [226](https://www.ascii-code.com/CP1252/226 "ASCII Code 226 (Windows-1252)") | E2  | 11100010 | â      | Latin small letter a with circumflex       |
| [227](https://www.ascii-code.com/CP1252/227 "ASCII Code 227 (Windows-1252)") | E3  | 11100011 | ã      | Latin small letter a with tilde            |
| [228](https://www.ascii-code.com/CP1252/228 "ASCII Code 228 (Windows-1252)") | E4  | 11100100 | ä      | Latin small letter a with diaeresis        |
| [229](https://www.ascii-code.com/CP1252/229 "ASCII Code 229 (Windows-1252)") | E5  | 11100101 | å      | Latin small letter a with ring above       |
| [230](https://www.ascii-code.com/CP1252/230 "ASCII Code 230 (Windows-1252)") | E6  | 11100110 | æ      | Latin small letter ae                      |
| [231](https://www.ascii-code.com/CP1252/231 "ASCII Code 231 (Windows-1252)") | E7  | 11100111 | ç      | Latin small letter c with cedilla          |
| [232](https://www.ascii-code.com/CP1252/232 "ASCII Code 232 (Windows-1252)") | E8  | 11101000 | è      | Latin small letter e with grave            |
| [233](https://www.ascii-code.com/CP1252/233 "ASCII Code 233 (Windows-1252)") | E9  | 11101001 | é      | Latin small letter e with acute            |
| [234](https://www.ascii-code.com/CP1252/234 "ASCII Code 234 (Windows-1252)") | EA  | 11101010 | ê      | Latin small letter e with circumflex       |
| [235](https://www.ascii-code.com/CP1252/235 "ASCII Code 235 (Windows-1252)") | EB  | 11101011 | ë      | Latin small letter e with diaeresis        |
| [236](https://www.ascii-code.com/CP1252/236 "ASCII Code 236 (Windows-1252)") | EC  | 11101100 | ì      | Latin small letter i with grave            |
| [237](https://www.ascii-code.com/CP1252/237 "ASCII Code 237 (Windows-1252)") | ED  | 11101101 | í      | Latin small letter i with acute            |
| [238](https://www.ascii-code.com/CP1252/238 "ASCII Code 238 (Windows-1252)") | EE  | 11101110 | î      | Latin small letter i with circumflex       |
| [239](https://www.ascii-code.com/CP1252/239 "ASCII Code 239 (Windows-1252)") | EF  | 11101111 | ï      | Latin small letter i with diaeresis        |
| [240](https://www.ascii-code.com/CP1252/240 "ASCII Code 240 (Windows-1252)") | F0  | 11110000 | ð      | Latin small letter eth                     |
| [241](https://www.ascii-code.com/CP1252/241 "ASCII Code 241 (Windows-1252)") | F1  | 11110001 | ñ      | Latin small letter n with tilde            |
| [242](https://www.ascii-code.com/CP1252/242 "ASCII Code 242 (Windows-1252)") | F2  | 11110010 | ò      | Latin small letter o with grave            |
| [243](https://www.ascii-code.com/CP1252/243 "ASCII Code 243 (Windows-1252)") | F3  | 11110011 | ó      | Latin small letter o with acute            |
| [244](https://www.ascii-code.com/CP1252/244 "ASCII Code 244 (Windows-1252)") | F4  | 11110100 | ô      | Latin small letter o with circumflex       |
| [245](https://www.ascii-code.com/CP1252/245 "ASCII Code 245 (Windows-1252)") | F5  | 11110101 | õ      | Latin small letter o with tilde            |
| [246](https://www.ascii-code.com/CP1252/246 "ASCII Code 246 (Windows-1252)") | F6  | 11110110 | ö      | Latin small letter o with diaeresis        |
| [247](https://www.ascii-code.com/CP1252/247 "ASCII Code 247 (Windows-1252)") | F7  | 11110111 | ÷      | Division sign                              |
| [248](https://www.ascii-code.com/CP1252/248 "ASCII Code 248 (Windows-1252)") | F8  | 11111000 | ø      | Latin small letter o with slash            |
| [249](https://www.ascii-code.com/CP1252/249 "ASCII Code 249 (Windows-1252)") | F9  | 11111001 | ù      | Latin small letter u with grave            |
| [250](https://www.ascii-code.com/CP1252/250 "ASCII Code 250 (Windows-1252)") | FA  | 11111010 | ú      | Latin small letter u with acute            |
| [251](https://www.ascii-code.com/CP1252/251 "ASCII Code 251 (Windows-1252)") | FB  | 11111011 | û      | Latin small letter u with circumflex       |
| [252](https://www.ascii-code.com/CP1252/252 "ASCII Code 252 (Windows-1252)") | FC  | 11111100 | ü      | Latin small letter u with diaeresis        |
| [253](https://www.ascii-code.com/CP1252/253 "ASCII Code 253 (Windows-1252)") | FD  | 11111101 | ý      | Latin small letter y with acute            |
| [254](https://www.ascii-code.com/CP1252/254 "ASCII Code 254 (Windows-1252)") | FE  | 11111110 | þ      | Latin small letter thorn                   |
| [255](https://www.ascii-code.com/CP1252/255 "ASCII Code 255 (Windows-1252)") | FF  | 11111111 | ÿ      | Latin small letter y with diaeresis        |

