---
tags: 
date: 2025-01-25
aliases:
  - lmc
  - Little man computer
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
lang:
  - en
properties-ver: "1.1"
---
# LMC

***
Little man computer is a simulator that allows you to write and run assembly code. It is a simple computer architecture that is used to teach the basics of computer science.


Taking the table from [[Assembly Instructions|assembly instructions]] we can see how the instructions are used in the LMC. LMC will use a number to represent the instruction instead of the mnemonic code. For example, `ADD` will be represented as `1` and `SUB` will be represented as `2`.

| Instruction (Mnemonic code) | Explanation                                                            | Little man computer code number |
| --------------------------- | ---------------------------------------------------------------------- | ------------------------------- |
| `ADD`                       | Add the current item in the accumulator with the address defined       | `1XX`                           |
| `SUB`                       | Subtract the current item in the accumulator with ther address defined | `2XX`                           |
| `STA`                       | Store the current item in the accumulator into memory                  | `3XX`                           |
| `LDA`                       | Load from memory                                                       | `5XX`                           |
| `BRA`                       | Branch always                                                          | `6XX`                           |
| `BRZ`                       | Branch if the accumulator is zero                                      | `7XX`                           |
| `BRP`                       | Branch if the accumulator is positive                                  | `8XX`                           |
| `INP`                       | Take in a input and store into the accumilator                         | `901`                           |
| `OUT`                       | Print out the current state of the accumulator                         | `902`                           |
| `HLT`                       | End the program                                                        | `0`                             |
| `DAT`                       | Data location                                                          |                                 |

***
## See also
- [[Assembly Instructions]]
- [[Programming Basics]]

## References
- [Little man computer website](https://peterhigginson.co.uk/LMC/))k