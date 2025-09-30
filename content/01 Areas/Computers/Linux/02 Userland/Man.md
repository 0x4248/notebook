---
tags:
  - Linux/02_Userland
date: 2025-08-13
aliases:
  - man
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
# Man

***
_Also known as **man pages**._

Man is a command line utility that is found on almost every UNIX operating system.

## Installation
Most systems have man installed but if it isn't it can be installed using the package manager with the `man-db` package:

```
pacman -S man-db
```

>[!note] 
> Some distributions may not use the package name `man-db` and may just be `man`, `man-pages` or `mandoc`. If you are unsure, consult your distribution's documentation.

### Other installations
The package `man-pages` can be used for both linux and POSIX pages. Localised versions are also available such as:
- `man-pages-de` for German
- `man-pages-fr` for French
- `man-pages-zh_cn` for Chinese
- `man-pages-ru` for Russian

*For more info on extra packages see [This page](https://archlinux.org/packages/?sort=&q=man-pages-)*
## Reading a man page
Simply run this and replace `PAGE_NAME` with the page you want:
```
man PAGE_NAME
```

## Searching
When you don't know the full name of a page you can search for it:

```
man -k REGEX
```

## Sections
Man pages are divided into sections:
- 1 = User commands
- 2 = System calls
- 3 = Library functions
- 4 = Special files
- 5 = File formats & config
- 6 = Games
- 7 = Misc
- 8 = System admin commands

## Examples
```bash
man 5 passwd   # Read about /etc/passwd file format
man -k network # Search for all pages about networking
```
