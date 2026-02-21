---
publish: true
created: 2026-01-04T15:30:57.763+08:00
modified: 2026-02-20T22:42:27.801+08:00
published: 2026-02-20T22:42:27.801+08:00
tags:
  - todo
cssclasses: ""
---

Link: [C Operator Precedence](https://en.cppreference.com/w/c/language/operator_precedence.html) 

<table>
  <tr>
    <th>Precedence</th>
    <th>Operator</th>
    <th>Description</th>
    <th>Associativity</th>
  </tr>
  <tr>
    <td rowspan="6">1</td>
    <td><code>++</code>, <code>--</code></td>
    <td>Suffix/postfix increment and decrement</td>
    <td rowspan="6">Left-to-right</td>
  </tr>
  <tr>
    <td><code>()</code></td>
    <td>Function call</td>
  </tr>
  <tr>
    <td><code>[]</code></td>
    <td>Array subscripting</td>
  </tr>
  <tr>
    <td><code>.</code></td>
    <td>Structure and union member access</td>
  </tr>
  <tr>
    <td><code>-&gt;</code></td>
    <td>Structure and union member access through pointer</td>
  </tr>
  <tr>
    <td><code>(type){list}</code></td>
    <td>Compound literal (C99)</td>
  </tr>
  <tr>
    <td rowspan="8">2</td>
    <td><code>++</code>, <code>--</code></td>
    <td>Prefix increment and decrement</td>
    <td rowspan="8">Right-to-left</td>
  </tr>
  <tr>
    <td><code>+</code>, <code>-</code></td>
    <td>Unary plus and minus</td>
  </tr>
  <tr>
    <td><code>!</code>, <code>~</code></td>
    <td>Logical NOT and bitwise NOT</td>
  </tr>
  <tr>
    <td><code>(type)</code></td>
    <td>Cast</td>
  </tr>
  <tr>
    <td><code>*</code></td>
    <td>Indirection (dereference)</td>
  </tr>
  <tr>
    <td><code>&amp;</code></td>
    <td>Address-of</td>
  </tr>
  <tr>
    <td><code>sizeof</code></td>
    <td>Size-of</td>
  </tr>
  <tr>
    <td><code>_Alignof</code></td>
    <td>Alignment requirement (C11)</td>
  </tr>
  <tr>
    <td>3</td>
    <td><code>*</code>, <code>/</code>, <code>%</code></td>
    <td>Multiplication, division, and remainder</td>
    <td rowspan="11">Left-to-right</td>
  </tr>
  <tr>
    <td>4</td>
    <td><code>+</code>, <code>-</code></td>
    <td>Addition and subtraction</td>
  </tr>
  <tr>
    <td>5</td>
    <td><code>&lt;&lt;</code>, <code>&gt;&gt;</code></td>
    <td>Bitwise left shift and right shift</td>
  </tr>
  <tr>
    <td rowspan="2">6</td>
    <td><code>&lt;</code>, <code>&lt;=</code></td>
    <td>Relational less-than and less-than-or-equal</td>
  </tr>
  <tr>
    <td><code>&gt;</code>, <code>&gt;=</code></td>
    <td>Relational greater-than and greater-than-or-equal</td>
  </tr>
  <tr>
    <td>7</td>
    <td><code>==</code>, <code>!=</code></td>
    <td>Equality and inequality</td>
  </tr>
  <tr>
    <td>8</td>
    <td><code>&amp;</code></td>
    <td>Bitwise AND</td>
  </tr>
  <tr>
    <td>9</td>
    <td><code>^</code></td>
    <td>Bitwise XOR</td>
  </tr>
  <tr>
    <td>10</td>
    <td><code>|</code></td>
    <td>Bitwise OR</td>
  </tr>
  <tr>
    <td>11</td>
    <td><code>&amp;&amp;</code></td>
    <td>Logical AND</td>
  </tr>
  <tr>
    <td>12</td>
    <td><code>||</code></td>
    <td>Logical OR</td>
  </tr>
  <tr>
    <td>13</td>
    <td><code>?:</code></td>
    <td>Ternary conditional</td>
    <td rowspan="6">Right-to-left</td>
  </tr>
  <tr>
    <td rowspan="5">14</td>
    <td><code>=</code></td>
    <td>Simple assignment</td>
  </tr>
  <tr>
    <td><code>+=</code>, <code>-=</code></td>
    <td>Assignment by sum and difference</td>
  </tr>
  <tr>
    <td><code>*=</code>, <code>/=</code>, <code>%=</code></td>
    <td>Assignment by product, quotient, and remainder</td>
  </tr>
  <tr>
    <td><code>&lt;&lt;=</code>, <code>&gt;&gt;=</code></td>
    <td>Assignment by bitwise left and right shift</td>
  </tr>
  <tr>
    <td><code>&amp;=</code>, <code>^=</code>, <code>|=</code></td>
    <td>Assignment by bitwise AND, XOR, and OR</td>
  </tr>
  <tr>
    <td>15</td>
    <td><code>,</code></td>
    <td>Comma</td>
    <td>Left-to-right</td>
  </tr>
</table>
