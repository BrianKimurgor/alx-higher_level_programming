#!/usr/bin/python3

def safe_print_integer(value):
    """
    Prints an integer with "{:d}".format().
    Args:
        value: The value to print.
    Returns:
        True if value correctly printed (it means the value is an integer),
        False otherwise.
    """
    try:
        print("{:d}".format(value))
        return True
    except ValueError:
        return False
