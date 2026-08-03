---
tags:
  - Linux/02_Userland
date: 2025-08-13
aliases:
  - general purpose mouse
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
  - center-images
lang:
  - en
properties-ver: "1.2"
stub:
---
# General Purpose Mouse

***
General Purpose Mouse (GPM) allows a block cursor to show on the virtual console. Its primary use it to allow cut and paste for virtual consoles (*Source*: man)

## Installation
Install the `gpm` package using your package manager.

>[!info] 
> For touchpad support you need to install `libinput`

## Usage
- **Left button**: Select text
- **Middle button**: Paste text thats selected
- **Right button**: Select a block of text

## Termination
 To terminate run
```
 gpm -k
```

***
## References
- [GPM - Gentoo Wiki](https://wiki.gentoo.org/wiki/GPM)