#!/usr/bin/python3
"""
define a file appending function
"""


 def append_write(filename="", text=""):
     """
     append a string to the end of UTF8 text file

     Args:
     filename (str): name of the file to append to
     text (str): string to append to the file
     Returns:
     number of characters to append
     """
     with open(filename, "a", encoding="utf-8") as f:
         return f.write(text)
