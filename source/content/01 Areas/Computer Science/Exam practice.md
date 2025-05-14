---
tags: 
date: 2025-05-13
aliases:
  - exam practice
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
lang:
  - en
properties-ver: "1.1"
---
# Exam practice
***

## Question 1
A flat file database only stores tables in a file and does not have relationships between the tables, whereas a relational database can have relationships between the tables and is only stored in one file.iso

A relational database is far more efficient than a flat file database and allows for data normalisation. A flat file database can be more simplier to implement with its more basic design.

I recommend the relational database due to the amount of data Rosa is going to use. This will make it way easier to develop.

## Question 2
### A
1. Allows for relationships between tables.
2. Allows for data normalisation and prevents data from being duplicated.
### B
Customer - one to many - Order - many to many - Product
### C
The primary key is a unique identifier of a table whereas a foreign key is the data that is linked to another table and is the primary key of that table.

#### ii
OrderID

#### iii
Because there may be several orders made by the same customer.

## Question 3
### A i
```SQL
DELETE FROM TblAccessLog WHERE UserType == 'NotNeeded'
```
