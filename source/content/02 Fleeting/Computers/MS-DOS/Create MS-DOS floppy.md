---
tags:
  - Fleeting
date: 2025-01-30
aliases:
  - create ms-dos floppy
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
lang:
  - en
properties-ver: "1.1"
---

On Linux/Mac
```
dd if=/dev/zero bs=512 count=2880 of=floppy.img
```

On Ms-dos
```
\DOS\FORMAT A: /V:VOLNAME
```
## References
- [Create Floppy Disk Image (MacOS) — richard lewis](https://richardlewis.org/blog/2020/8/7/create-floppy-disk-image-macos/