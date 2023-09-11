# Python Inheritance

## Introduction

In the realm of Object-Oriented Programming (OOP) with Python, we encounter a fundamental concept known as **inheritance**. This concept is akin to how offspring inherit traits from their parents, but in the world of programming, it's about classes acquiring properties from other classes. Inheritance allows us to efficiently reuse fields and methods from existing classes, promoting reusability, and stands as a cornerstone in OOP.

In Python, we wield two built-in functions that harmonize with inheritance:

1. **`isinstance()`**: This function serves to inspect the type of an instance. For example, `isinstance(obj, int)` will return `True` only if `obj.__class__` is `int` or a class derived from `int`.

2. **`issubclass()`**: Here, we can examine class inheritance. For instance, `issubclass(bool, int)` yields `True`, as `bool` is a subclass of `int`. Conversely, `issubclass(float, int)` returns `False`, as `float` is not a subclass of `int`.

## Key Takeaways

In the course of this project, I delved into various facets of Python and inheritance, including:

- Appreciating the awesomeness of Python programming.
- Understanding the terms superclass, base class, or parent class.
- Grasping the concept of a subclass.
- Learning to enumerate all attributes and methods of a class or instance.
- Discerning when an instance can have new attributes.
- Mastering the art of inheriting a class from another.
- Gaining proficiency in defining a class with multiple base classes.
- Unveiling the default class that every class inherits from.
- Exploring the technique of overriding a method or attribute inherited from the base class.
- Unraveling the inheritance hierarchy and identifying attributes/methods available to subclasses.
- Embracing the significance of inheritance.
- Understanding how to utilize `isinstance`, `issubclass`, `type`, and `super` built-in functions in the inheritance context.

## Resources

If you wish to explore further, these resources can be valuable:

- [Python Documentation](https://docs.python.org/3/tutorial/classes.html#inheritance)
- [Analytics Vidhya - Inheritance in Object-Oriented Programming](https://www.analyticsvidhya.com/blog/2020/10/inheritance-object-oriented-programming/#:~:text=super()%20function-,What%20is%20Inheritance%20in%20Object%20Oriented%20Programming%3F,known%20as%20the%20Parent%20class.)
- [YouTube Video Tutorial](https://www.youtube.com/watch?v=d8kCdLCi6Lk)
