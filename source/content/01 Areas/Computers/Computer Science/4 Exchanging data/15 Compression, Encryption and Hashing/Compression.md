---
tags:
  - computer_science/4
date: 2024-11-08
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
aliases:
  - lossy
  - lossless
---
# Compression
***
## Contents
- Lossy
- Lossless
- Run Length Encoding
- Dictionary Based Compression
## Lossy
Lossy compression works by removing data off a file to reduce its file size. For example in an image pixels are removed to shrink the file size.
## Lossless
Lossless compression works by reducing the file size without removing data.
## Run length encoding
Run length encoding only stores how many times data is repeated rather than showing the original data.
### Example
```
AAAAAABBBBCCCC
```

```
6A4B4C
```
## Dictionary based compression
Dictionary based encryption searches for words in a file and creates its own dictionary.