#!/usr/bin/python3

def safe_print_division(a, b):
    """
    Prints the division of two integers.

    Args:
        a: The first integer.
        b: The second integer.

    Returns:
        The value of the division, otherwise: None
    """
    try:
        result = a / b
    except ZeroDivisionError:
        result = None
    finally:
        print("Inside result: {}".format(result))
    return result
