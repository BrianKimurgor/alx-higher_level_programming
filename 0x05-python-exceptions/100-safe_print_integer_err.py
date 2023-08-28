#!/usr/bin/python3

import sys

def safe_print_integer_err(value):
    """
    Prints an integer.
    
    Args:
        value: The value to print.
    
    Returns:
        True if value has been correctly printed (it means the value is an integer),
        False otherwise.
    """
    try:
        print("{:d}".format(value))
        return True
    except Exception as e:
        print("Exception:", e, file=sys.stderr)
        return False
