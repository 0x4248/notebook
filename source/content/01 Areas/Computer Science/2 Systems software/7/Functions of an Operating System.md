---
tags:
  - computer_science/2
date: 2024-11-03
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# Functions of an Operating System

***
An operating system is software that manages the operations on a computer.
![[Operating system.png|Operating system|500]]
## Primary functions of an Operating system
- Memory management
- Interrupt service routines
- Processor scheduling
- Backing store management
- Management of all inputs and outputs
- File management
### Memory management
Memory management in an operating system allows for memory to be allocated efficiently  
#### Paging
In order for the operating system to effectively manage the memory, the memory needs to be first divided into fixed size blocks. These blocks are called pages.

#### Virtual memory
Virtual memory is a memory management technique that allows for the execution of processes that may not be completely in memory. Virtual memory is a combination of RAM and disk space.

### Interrupts
An interrupt is a signal from software or hardware that can trigger a function.
### Processor scheduling
In order for computers to run multiple tasks at once there needs to be scheduling. Scheduling allows for the CPU to allocate processing time to each process.
#### Round robin
In a round robin system process are on a first in first out basis. Each process takes its turn.
#### First come first serve
In a first come first serve, jobs are processed in the order that that are executed. There is no priority in place.
#### Shortest job first
The smallest processes are ran first before running larger jobs.