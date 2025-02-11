---
tags:
  - Operating_systems
  - C64
date: 2025-01-28
aliases:
  - c64 colouring
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
lang:
  - en
properties-ver: "1.1"
---
# C64 colouring

***
The C64 can display 16 colours. These colours can be set by using [[C64 POKE|POKE]] commands to set the colour of the background, text, and sprites.

| Colour name         | POKE | key       | HEX colour |
| ------------------- | ---- | --------- | ---------- |
| Black               | 0    | CTRL  + 1 | `#000000`  |
| White               | 1    | CTRL  + 2 | `#FFFFFF`  |
| Red                 | 2    | CTRL  + 3 | `#880000`  |
| Cyan                | 3    | CTRL  + 4 | `#AAFFEE`  |
| Violet / purple     | 4    | CTRL  + 5 | `#CC44CC`  |
| Green               | 5    | CTRL  + 6 | `#00CC55`  |
| Blue                | 6    | CTRL  + 7 | `#0000AA`  |
| Yellow              | 7    | CTRL  + 8 | `#EEEE77`  |
| Orange              | 8    | C=  + 1   | `#DD8855`  |
| Brown               | 9    | C=  + 2   | `#664400`  |
| Light red           | 10   | C=  + 3   | `#FF7777`  |
| Dark grey / grey 1  | 11   | C=  + 4   | `#333333`  |
| Grey 2              | 12   | C=  + 5   | `#777777`  |
| Light green         | 13   | C=  + 6   | `#AAFF66`  |
| Light blue          | 14   | C=  + 7   | `#0088FF`  |
| Light grey / grey 3 | 15   | C=  + 8   | `#BBBBBB`  |

 Adresses for colours

| Address | Description          |
| ------- | -------------------- |
| 646     | Text                 |
| 53280   | Border (screenframe) |
| 53281   | Background           |
| 53287   | Sprite 0             |
| 53288   | Sprite 1             |
| 53289   | Sprite 2             |
| 53290   | Sprite 3             |
