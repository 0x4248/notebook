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
---
# De Morgans Law

***
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

