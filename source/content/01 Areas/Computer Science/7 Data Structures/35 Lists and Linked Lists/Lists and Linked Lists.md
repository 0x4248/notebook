---
tags:
  - computer_science/7
date: 2024-10-30
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
aliases:
  - List
  - Linked List
  - list
  - linked list
  - lists
  - linked lists
  - Lists
  - Linked Lists
---
# Lists and Linked Lists
***
## Contents
- What is a list?
- [[Operations on a list]]
- [[Using an array]]
- [[Linked Lists]]

## What is a list?
A list is an abstract data type that contains a number of items of the same datatype. This can be a list of arrays or a list of characters.
### Examples

***Example using integers***
```c
[1,6,3,4,2]
```

***Example using characters***
```c
['a','b','c','d']
```

## Operations on a list
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
<div class="X42-star-break-line-container">
<hr>
<p class="X42-star-break-line">***</p>
<hr>
</div>
<h2 style="text-align: center;">Linked Lists</h2>
**What are linked lists**
A linked list is a dynamic data structure that holds a ordered data structure, where each element points to the next element.  


The items which form the sequence are net necessarily held in contiguous data locations, cr in the order in which they occur in the sequence.

Each item in the list is called a node and contains a data field and a next address field called a link or pointer field (the data field may consist of several subfields.) • ' he data field holds the actual data associated with the list item, and the pointer field contains the address of the next item in the sequence • ' he link Held in the last item indicates that there are nc further items by the use of a null pointer • Associated with the list is a pointer variable which points to (i.e. contains the address of) the first node in the list