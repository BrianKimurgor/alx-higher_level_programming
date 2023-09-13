#!/usr/bin/python3
"""define a file writing function"""


def write_file(filename="", text=""):
    """
    write a string to a UTF8 text file.

    Args:
    filename (str):name of the file to write.
    Returns: 
    number of characters written
    """
    with open(filename, "w", encoding="utf-8") as f:
        return f.write(text)
