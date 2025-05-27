---
tags:
  - computer_science/3
date: 2025-05-27
aliases:
  - programming paradigms
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
lang:
  - en
properties-ver: "1.1"
---
# Programming Paradigms

***
- Procedual Languages
- Object-Oriented Languages
- Inheritance
- Polymorphism

## Procedural Languages
Procedural languages are based on the concept of procedure calls, where programs are structured around procedures or functions. There are no objects, and data is typically passed between functions.

## Object-Oriented Languages
Object-oriented languages are based on the concept of objects, which can contain both data and methods. They are able to have components that are reusable and can be extended. Object-oriented programming (OOP) allows for encapsulation, inheritance, and polymorphism.

### Inheritance
Inheritance is a mechanism where a new class can inherit properties and methods from an existing class. This allows for code reuse and the creation of hierarchical relationships between classes.

```java
class Animal {
    String name;
    void eat() {
        System.out.println(name + " is eating.");
    }
}
```

```java
class Dog extends Animal {
    name = "Dog";
    void bark() {
            System.out.println(name + " is barking.");
    }
}
```

### Polymorphism
Polymorphism allows methods to do different things based on the object it is acting upon, even if they share the same name. This can be achieved through method overriding or method overloading.
