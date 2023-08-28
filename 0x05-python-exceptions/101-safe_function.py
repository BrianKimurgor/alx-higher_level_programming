#!/usr/bin/python3

import sys


def safe_function(fct, *args):
    """
    Executes a function safely.

    Args:
        fct: The function to execute.
        *args: Arguments to pass to the function.

    Returns:
        The result of the function.
        None if an exception occurs during the function execution.
    """
    try:
        result = fct(*args)
        return result
    except Exception as e:
        print("Exception:", e, file=sys.stderr)
        return None
