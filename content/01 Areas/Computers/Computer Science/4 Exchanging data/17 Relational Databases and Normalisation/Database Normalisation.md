---
tags:
  - computer_science/4
date: 2024-11-17
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# Normalisation
***

## What is normalisation?
Normalisation is the process of creating a database structure that has the best possible design. There are three stages of this. 1NF, 2NF and 3NF.

| 0NF                  | 1NF                                   | 2NF                                             | 3NF                                                                             |
| -------------------- | ------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------- |
| A flat file database | No columns with repeated data         | Must have 1NF rules                             | Must have 1NF and 2NF rules                                                     |
|                      | Each row is unique with a primary key | Each of the fields must rely on the primary key | No field should rely on another non key field *E.g A DB cant store age and DOB* |
|                      | Each fields must have a unique name   |                                                 |                                                                                 |

