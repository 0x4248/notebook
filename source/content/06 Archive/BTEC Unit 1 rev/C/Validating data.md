---
tags:
  - College/BTEC/Revison
cssclasses:
  - neo-headings
  - bai-headings
  - page-mountain
---
# Validating data
***
When writing programs that take in data it is important to validate the data before processing it to prevent errors further down the line.
## Validation check techniques

>[!note] 
> The term *constants* refers to the limiting factors there is in a validation check

### Range check
A range check checks if a number is within a range with a minimum and maximum number.
### Length check
A length check totals up how many characters there are in a string and if the string is more or less than a certain length then it will fail.
#### Example
```python
x = input("Enter string>")
if x >= 10:
	print("Fail")
else:
	print("Pass")
```
In this example if the string x is bigger or equal to `10` then it will fail.
### Presence check
A presence check makes sure data is entered and will fail if there is no data in a field or variable.
### Type check
A type check checks if a data type *[[Common data types in programming|See here for common data types in programming]]* is the correct data type.
#### Example
```Diff
Asking for number.
- ABC
- True
+ 123
+ 583
- 1.1
```

### Format check
A format check checks is a type of format entered is in the correct format.
#### Example
E.g: String entered must start four letters, have a `_` and end in two numbers
```diff
- GH_54
- GHDA_2
- IENA_A
+ WHBU_12
+ OFBD_42
```

#### Check digit
A check did

