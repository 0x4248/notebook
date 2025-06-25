---
tags:
  - Linux
date: 2024-10-18
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# The reverse DD
***
>[!note]+ In a nutshell
> Turn a disk device back into a file again.

## Basic operation
To do a 'reverse dd' we need to run `dd` onto a disk and then invert the operation to act that the disk device is a standard file.
```
dd if=inputfile.img of=/dev/sdX bs=4M status=progress
```

```
dd if=/dev/sdX of=output.img bs=4M status=progress
```

