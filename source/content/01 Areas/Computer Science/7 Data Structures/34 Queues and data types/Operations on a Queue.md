---
tags: 
date: 2024-10-29
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# Operations on a Queue
<p class="text-center" style="margin:0;color:gray;">Subtitle</p>

***
[[Queues]] have operations on them that allow for items to be removed and added from the queue.
## Basic operations
Here is a basic queue with its pointers

| <-A     | B   | C   | D      | <-  |     |
| ------- | --- | --- | ------ | --- | --- |
| front=0 |     |     | rear=3 |     |     |
### Adding (enqueue)

| <-A     | B   | C   | D   | E      | <-  |
| ------- | --- | --- | --- | ------ | --- |
| front=0 |     |     |     | rear=4 |     |
### Removing (dequeue)
>[!note] 
> The elements do not move.

|     | B       | C   | D   | E      | <-  |
| --- | ------- | --- | --- | ------ | --- |
|     | front=1 |     |     | rear=4 |     |

### Other operations
- isEmpty - Checks if the array is empty or not
- isFull - Checks if the array is full or not