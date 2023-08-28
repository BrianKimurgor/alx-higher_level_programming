0x05. Python - Exceptions

---

# Safe List Printing

This repository contains a collection of Python and C programs that demonstrate various aspects of handling exceptions and error cases. The programs focus on safe printing of lists, integers, bytes, and floats, as well as implementing custom exception handling.

## Table of Contents

1. [Safe Print List](#safe-print-list)
2. [Safe Print Integer](#safe-print-integer)
3. [Print and Count Integers](#print-and-count-integers)
4. [Integers Division with Debug](#integers-division-with-debug)
5. [Divide a List](#divide-a-list)
6. [Raise Exception](#raise-exception)
7. [Raise Exception with Message](#raise-exception-with-message)
8. [Safe Integer Print with Error Message](#safe-integer-print-with-error-message)
9. [Safe Function](#safe-function)
10. [ByteCode to Python](#bytecode-to-python)
11. [CPython #2: PyFloatObject](#cpython-2-pyfloatobject)

## Safe Print List

This program defines a function `safe_print_list` that prints a specified number of elements from a list. It uses the `try` and `except` blocks to handle errors gracefully and ensure that the program doesn't crash when printing.

## Safe Print Integer

The `safe_print_integer` program contains a function that prints an integer using the `"{:d}".format()` formatting method. It handles different types of values and raises exceptions when necessary, ensuring the correct printing of integers.

## Print and Count Integers

The `safe_print_list_integers` program implements a function that prints a specified number of integers from a list. It skips non-integer elements silently and ensures proper printing using the `"{:d}".format()` method.

## Integers Division with Debug

The program `safe_print_division` demonstrates division of two integers and prints the result. It uses the `try`, `except`, and `finally` blocks to ensure the division operation completes and prints the result, even if an exception occurs.

## Divide a List

In this program, the `list_division` function divides corresponding elements of two lists and returns a new list with the division results. It handles various error cases, including division by zero and different data types.

## Raise Exception

The `raise_exception` program showcases raising a type exception using the `raise` keyword. It's a demonstration of how to trigger exceptions manually.

## Raise Exception with Message

This program demonstrates raising a name exception with a custom error message using the `raise` keyword.

## Safe Integer Print with Error Message

The `safe_print_integer_err` function prints an integer and returns `True` if successful, or `False` if unsuccessful, along with an error message. It handles exceptions and prints the error message in case of failure.

## Safe Function

The `safe_function` program defines a function that executes another function safely, capturing any exceptions that might occur and printing an error message.

## ByteCode to Python

This program contains C functions that print information about Python lists, bytes, and float objects. The functions print details about object sizes, types, and values. These functions demonstrate how to access and manipulate Python objects in C.

## CPython #2: PyFloatObject

The `magic_calculation` function in this program replicates the behavior of a given Python bytecode. The bytecode performs various calculations and exception handling using loops, conditional statements, and mathematical operations.

---

Each subproject provides valuable insights into handling exceptions, data manipulation, and using different formatting methods to ensure safe and accurate printing of various data types. The CPython programs also showcase interactions between Python and C code for improved efficiency and control.
