---
tags:
  - computer_science/1
date: 2025-05-18
aliases:
  - the fetch, decode, execute cycle
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
lang:
  - en
properties-ver: "1.1"
---
# The Fetch, Decode, Execute Cycle

***
The sequence of operations that are used when executing an instruction can be split up into three stages:
- Fetch
- Decode
- Execute

## How the registers are used in this cycle
### Fetch phase
1. The address of the next instruction is copied from the [[Program counter]] to the [[Memory address register]].
2. The instruction held at the Memory address register is then copied to the [[Memory data register]] and the content of the Program counter is then incremented.
3. The contents of the memory data register is then copied to the current instruction register.
### Decode phase
4. The instruction held in the current instruction register is then decoded. During the decoding phase the instruction is split into an opcode and operand. Just like in assembly language:

```assembly
add     r1, r2
OPCODE  OPERAND
```

### Execute
5. The instruction is then carried out and any results are put into the [[Accumulator]].