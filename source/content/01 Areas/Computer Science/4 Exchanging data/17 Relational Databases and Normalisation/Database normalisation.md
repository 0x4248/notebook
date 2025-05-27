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
%% Normalisation is the process used to make the best possible design for a relational database.
- No data is duplicated without a reason
- Data is consistent throughout
- The structure of the database should be flexible so the user can add as little or as many amount of data to the database
- The database should allow all kinds of data queries done to the database.
## First normal form
A database is in its first normal form if it doesn't contain any repeating attribute.

 %%
 
%% For a table to be in first normal form it must:
- Contain atomic values
    - Each column in a table must contain single, indivisible values        
- Have no repeating groups
    - Columns must not contain arrays or lists of values
- Have unique column names
    - Each column must have a unique name within the table
- Have a unique identifier (primary key)
    - Each row must have a unique identifier to distinguish it from other rows %%

## What is normalisation?
Normalisation is the process of creating a database structure that has the best possible design. The tables should designed so that:
- Data is not duplicated without a reason
- The data is kept consistent in the databases
