---
tags:
  - computer_science/4
date: 2024-11-17
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# SQL
<p class="text-center" style="margin:0;color:gray;">Structured query language</p>

***
SQL or Structured query language is a declarative language. This language is used for updating and querying tables.

## SELECT FROM WHERE
The `SELECT` statement is used to get a collection of fields from a table.
- `SELECT` list the fields to be shown 
- `FROM` state what table or tables that the data will be fetched from 
- `WHERE` state the search
- `ORDER BY` if you want to have an ordering on the elements you can state that there

### Example
Table: `Accounts`

| Account_Number | First_Name | Last_Name |
| -------------- | ---------- | --------- |
| 348576         | Jared      | Williams  |
| 833397         | Bill       | Williams  |
| 723594         | John       | Doe       |
To pull all people with last name `Willams` you would run the SQL command 
```SQL
SELECT * FROM Accounts WHERE Last_Name = "Williams"
```
The return would be:

| Account_Number | First_Name | Last_Name |
| -------------- | ---------- | --------- |
| 348576         | Jared      | Williams  |
| 833397         | Bill       | Williams  |
