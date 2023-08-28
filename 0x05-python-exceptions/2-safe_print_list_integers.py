#!/usr/bin/python3

def safe_print_list_integers(my_list=[], x=0):
  """
  Prints the first x elements of a list and only integers.
  Args:
    my_list: The list to print.
    x: The number of elements to print.
  Returns:
    The real number of integers printed.
  """
  count = 0
  i = 0
  while i < x:
    try:
      print("{:d}".format(my_list[i]), end="")
      count += 1
    except (ValueError, IndexError):
      pass
    i += 1
  print()
  return count
