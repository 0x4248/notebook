---
tags:
  - computer_science/8
date: 2025-01-23
aliases:
  - binary logic
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
lang:
  - en
properties-ver: "1.1"
---
# Binary Logic

***
Since computers can only understand [[Binary|binary]] which means they can only do operations in 1s and 0s. Logic gates can help with doing these operations and are the building blocks of computers.

## Logic gates
There are a number of different 
Logic gates take in one or more input and produce a single output.
### NOT
A not gate inverts an input. On a gate the small circle represents an inverted input.

| Input A | Output |
| ------- | ------ |
| 0       | 1      |
| 1       | 0      |

![[not.svg|202]]
### AND
An and gate checks if input A *and* B are true. If they are both true the output is true.

| Input A | Input B | Output |
| ------- | ------- | ------ |
| 0       | 0       | 0      |
| 1       | 0       | 0      |
| 0       | 1       | 0      |
| 1       | 1       | 1      |

![[and.svg]]
### NAND
A NAND gate checks if input A *and* B are true. If they are both true the output is false. In short its just an inverted AND gate.

| Input A | Input B | Output |
| ------- | ------- | ------ |
| 0       | 0       | 1      |
| 1       | 0       | 1      |
| 0       | 1       | 1      |
| 1       | 1       | 0      |

![[nand.svg]]
### OR
An OR gate checks if either of the inputs are true then the output is true.

| Input A | Input B | Output |
| ------- | ------- | ------ |
| 0       | 0       | 0      |
| 1       | 0       | 1      |
| 0       | 1       | 1      |
| 1       | 1       | 1      |

![[or.svg]]
### NOR
A NOR gate is an inverted OR gate.

| Input A | Input B | Output |
| ------- | ------- | ------ |
| 0       | 0       | 1      |
| 1       | 0       | 0      |
| 0       | 1       | 0      |
| 1       | 1       | 0      |

![[nor.svg]]
### XOR
An exclusive or only is true if one of the inputs is true but not both.

| Input A | Input B | Output |
| ------- | ------- | ------ |
| 0       | 0       | 0      |
| 1       | 0       | 1      |
| 0       | 1       | 1      |
| 1       | 1       | 0      |

![[xor.svg]]

## Symbols
Sometimes symbols are used to show the logic gates. Here are some common symbols. 

$$
\begin{aligned}
\text{AND = }\land \\
\text{OR = }\lor \\
\text{NOT = }\lnot \\
\text{XOR = }\underline\lor \\
\end{aligned}
$$