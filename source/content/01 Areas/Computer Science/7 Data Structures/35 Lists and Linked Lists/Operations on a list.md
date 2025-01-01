---
tags:
  - computer_science/7
date: 2024-10-30
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# Operations on a list
***
In this example I will use the list `[A,B,C,D]`. This list will be called `demo`

| Operation         | Explanation                                             | Demo             | List after operation | Return |
| ----------------- | ------------------------------------------------------- | ---------------- | -------------------- | ------ |
| isEmpty           | Test to see if the list is empty                        | demo.isEmpty()   | `[A,B,C,D]`          | False  |
| append            | Appends onto the list                                   | demo.append(E)   | `[A,B,C,D,E]`        | Null   |
| remove            | Remove a item from the list                             | demo.remove(A)   | `[B,C,D]`            | Null   |
| search            | Searches for an item and returns the index of that item | demo.search(C)   | `[A,B,C,D]`          | 2      |
| length            | Get the length of the list                              | demo.length()    | `[A,B,C,D]`          | 4      |
| insert            | Insert an item into the list with a given positon.      | demo.insert(X,1) | `[A,X,B,C,D]`        | Null   |
| pop               | Remove the last item off the list and return that item. | demo.pop()       | `[A,B,C]`            | D      |
| pop with position | Similar to remove but returns the removed item.         | demo.pop(1)      | `[A,C,D]`            | B      |
