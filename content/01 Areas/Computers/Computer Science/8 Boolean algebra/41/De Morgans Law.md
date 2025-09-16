---
tags:
  - computer_science/8
date: 2025-01-28
aliases:
  - de morgans law
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
lang:
  - en
properties-ver: "1.1"
stub: true
---
# De Morgans Law

***
>[!warning]+ Stub
> This page "De Morgans Law" is a stub and is missing content. Check back later for more content.
> 
> *Date added: 2025-09-16*
> 
> *Note:* This isnt a complete page, just a random set of notes I made. I might make it a proper note layer or just delete this page.

NOT A AND NOT B = NOT (A OR B)

| A   | B   | NOT A | NOT B | A OR B | NOT (A OR B) | NOT A AND NOT B |
| --- | --- | ----- | ----- | ------ | ------------ | --------------- |
| 0   | 0   | 1     | 1     | 0      | 1            | 1               |
| 0   | 1   | 1     | 0     | 1      | 0            | 0               |
| 1   | 0   | 0     | 1     | 1      | 0            | 0               |
| 1   | 1   | 0     | 0     | 1      | 0            | 0               |


| A   | B   | NOT A | NOT B | A AND B | NOT (A OR B) | NOT A AND NOT B |
| --- | --- | ----- | ----- | ------- | ------------ | --------------- |
| 0   | 0   | 1     | 0     | 0       | 1            | 1               |
| 0   | 1   | 1     | 1     | 1       | 0            | 0               |
| 1   | 0   | 0     | 0     | 0       | 0            | 0               |
| 1   | 1   | 0     | 1     | 1       | 0            | 0               |
NOT (A OR B) OR NOT (A OR B)

NOT A OR B
a

| A   | B   | C   | A OR B | A OR C | B AND C | (A OR B) AND (A OR C) | A OR (B AND C) |
| --- | --- | --- | ------ | ------ | ------- | --------------------- | -------------- |
| 1   | 1   | 1   | 1      | 1      | 1       | 1                     | 1              |
| 1   | 1   | 0   | 1      | 1      | 0       | 1                     | 1              |
| 1   | 0   | 1   | 1      | 1      | 0       | 1                     | 1              |
| 1   | 0   | 0   | 1      | 1      | 0       | 1                     | 1              |
| 0   | 1   | 1   | 1      | 1      | 1       | 1                     | 1              |
| 0   | 1   | 0   | 1      | 0      | 0       | 0                     | 0              |
| 0   | 0   | 1   | 0      | 1      | 0       | 0                     | 0              |
| 0   | 0   | 0   | 0      | 0      | 0       | 0                     | 0              |

