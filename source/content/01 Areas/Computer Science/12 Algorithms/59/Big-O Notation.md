---
tags:
  - computer_science/12
date: 2025-01-21
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# Big-O Notation

***
**Big O** notation is a way of comparing algorithms using a formula to annotate the efficiency.

| Formula  | Relative to      |
| -------- | ---------------- |
| O(1)     | Constant time    |
| O(n)     | Linear time      |
| O(n^2)   | Polynomial time  |
| O(2^n)   | Exponential time |
| O(log n) | Logarithmic time |
Constant: Constant time is where the time to run an algorithm does not change with the parameter you put in. This is O(1) and some examples of this are checking if a number is even or accessing an element of an array.

Linear: Linear time is when the time to complete the algorithm increases with the size of the input on a linear scale. Some examples of linear time are searching through an array, iterating through a list of arrays to sum the elements and copying data. The notation for this one is O(n)

Polynomial: Polynomial time is when the time to complete an algorithm scales as a polynomial function. The big o notation for this is O(n^k). For example if we have two loops that loops over the array the k would be 2 and the array size would be the n. The k goes up if there are more loops within the algorithm.
