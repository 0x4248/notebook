---
tags:
  - Misc
date: 2025-01-22
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# Zero dimensional space problem

***
Zero diminutional space is a dimension that is difficult to show since it is a point in space with no length, width, height or location.

## How one dimensional objects are shown
In 1D points are given a number which aligns to its point in space on one axis.

![[1d space.svg|600]]
In programming this can be seen as a int.
```c
int point = 0;
```

To show a number of points in a space we can use an array.
```c
int point = [1,3,5,6];
```

Now that we know how to show one dimensional space we can move on to zero dimensional space.

## Showing zero dimensional space
Zero dimensional cant be shown in the same way as 1D space since it is a point with no axis to align to. 

In programming this can be seen as a void.
```c
void point;
```

The only attribute these points can have is wether they exist or not.

```c
#include <stdio.h>

void point;

if(point){
    printf("Point exists");
} else {
    printf("Point does not exist");
}
```

