---
tags:
  - computer_science/4
date: 2024-11-14
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# Hashing
***
A hashing algorithm is a non reversible operation that takes in a string and converts it to a new value which can not be turned back. The output of a hashing algorithm is unique.
## Key terms
- **Hash collision**: When two different strings produce the same hash.
- **Hash function**: A function that takes in a string and converts it to a hash.
- **Hash table**: A data structure that uses hashing to store data.

## Hash table
A hash table is a method of storing items in a way that makes it easier to find them. 
### Example

| ID  | Name  | Age | Hash (from name) |
| --- | ----- | --- | ---------------- |
| 1   | James | 20  | 3563             |
| 2   | John  | 21  | 4536             |
| 3   | Bill  | 22  | 6875             |

In this example lets fetch the data for `John`. We can convert the name `John` to a hash and then search for that hash in the hash table. This is much faster than searching through the whole table. 

## Examples of hash functions
- MD5
- SHA-1
- SHA-256
- SHA-512
