---
tags:
  - computer_science/6
date: 2025-01-13
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# Sign, mantissa and exponent

***
## The sign bit
When we want to store negative numbers in binary we can use a sign bit to identify if a number is positive or negative. The sign bit is the first bit in a binary number:

***Example 1:*** The number 5 in signed binary
<p style="font-size:xx-large;text-align:center;margin:0;"><span style="color:lightgreen;">0</span> <span style="color:cyan;">1 0 1 0</span></p>

***Example 2:*** The number -5 in signed binary
<p style="font-size:xx-large;text-align:center;margin:0;"><span style="color:lightgreen;">1</span> <span style="color:cyan;">1 0 1 0</span></p>

A `1` on the signed bit indicates a negative number, while a `0` indicates a positive number.

## Mantisa and Exponent

<p style="font-size:xx-large;text-align:center;margin:0;"><span style="color:lightgreen;">0</span> . <span style="color:cyan;">1 0 1 1 0 1 0</span> <span style="color:pink;">0 0 1 1</span></p>

In this example the **green** is the sign bit, the **cyan** is the mantissa and the **pink** is the exponent:
- **Sign bit**: Determines if the number is positive or negative.
- **Mantissa**: The number itself.
- **Exponent**: The power of 2.
