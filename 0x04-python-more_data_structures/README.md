Title: Python - Exploring Set and Dictionary Manipulations
In this project, I delved into the realm of sets and dictionaries in Python, honing my skills in their utilization while employing methods such as lambda, map, filter, and reduce.

Function Signatures 📄
Below are the prototypes for the functions developed within this project:

File Prototype
0-square_matrix_simple.py def square_matrix_simple(matrix=[]):
1-search_replace.py def search_replace(my_list, search, replace):
2-uniq_add.py def uniq_add(my_list=[]):
3-common_elements.py def common_elements(set_1, set_2):
4-only_diff_elements.py def only_diff_elements(set_1, set_2):
5-number_keys.py def number_keys(a_dictionary):
6-print_sorted_dictionary.py def print_sorted_dictionary(a_dictionary):
7-update_dictionary.py def update_dictionary(a_dictionary, key, value):
8-simple_delete.py def simple_delete(a_dictionary, key=""):
9-multiply_by_2.py def multiply_by_2(a_dictionary):
10-best_score.py def best_score(a_dictionary):
11-mutiply_list_map.py def mutiply_list_map(my_list=[], number=0):
12-roman_to_int.py def roman_to_int(roman_string):
100-weight_average.py def weight_average(my_list=[]):
101-square_matrix_map.py def square_matrix_map(matrix=[]):
102-complex_delete.py def complex_delete(a_dictionary, value):
103-python.c
void print_python_list(PyObject *p);
void print_python_bytes(PyObject *p);

Tasks Overview 📃
0. Matrix Squaring

0-square_matrix_simple.py: Python function that calculates the square of each integer in a matrix.
The input 'matrix' is a two-dimensional array.
Produces a matrix of the same dimensions as the input, with each element being the square of the corresponding element from the input.
The original matrix remains unchanged.
No external module imports are used.

Search and Replace
1-search_replace.py: Python function that generates a new list by replacing all instances of an element with another element.
The initial list is referred to as 'my_list'.
The 'search' parameter denotes the element to be replaced.
The 'replace' parameter specifies the new element.
No external module imports are used.

Unique Summation
2-uniq_add.py: Python function that calculates the sum of distinct integers within a list (each integer contributes only once).
No external module imports are used.

Intersection of Sets
3-common_elements.py: Python function that yields a set containing elements common to two given sets.
No external module imports are used.

Exclusive Set Elements
4-only_diff_elements.py: Python function that provides a set comprising elements present in only one of the two input sets.
No external module imports are used.

Counting Dictionary Keys
5-number_keys.py: Python function that determines the count of keys in a dictionary.
No external module imports are used.

Dictionary Sorting
6-print_sorted_dictionary.py: Python function that displays the contents of a dictionary based on the sorted order of keys.
The function assumes all keys are strings.
Keys are sorted alphabetically.
Sorting is applied only to the top level.
The dictionary values can encompass any data type.
No external module imports are used.

Dictionary Update
7-update_dictionary.py: Python function that updates or adds key-value pairs within a dictionary.
The 'key' parameter is always a string.
The 'value' parameter accepts any data type.
If the key already exists in the dictionary, its corresponding value is updated.
If the key is absent, it is appended to the dictionary.
No external module imports are used.

Simple Dictionary Key Deletion
8-simple_delete.py: Python function that eliminates a specified key from a dictionary.
The 'key' parameter is always a string.
If the key does not exist, the dictionary remains unaltered.
No external module imports are used.

Doubling Dictionary Values
9-multiply_by_2.py: Python function that returns a new dictionary in which all values are doubled.
The function assumes all values are integers.
No external module imports are used.

Top Scorer
10-best_score.py: Python function that identifies the key with the highest integer value within a dictionary.
The function assumes all values are integers.
It is presumed that each student holds a unique score.
If no score is found, 'None' is returned.
No external module imports are used.

Multiplying with Map
11-multiply_list_map.py: Python function that utilizes 'map' to generate a new list by multiplying each value in an input list by a given number.
A fresh list of the same length as 'my_list' is returned, with each element being the product of the corresponding element from the input list and the specified number.
The original list remains unaltered.
No loops or external module imports are employed.

Roman Numerals to Integer
12-roman_to_int.py: Python function that converts a Roman numeral to an integer.
It is assumed that the Roman numeral falls within the range of 1 to 3999.
If the 'roman_string' parameter is not a string or is 'None', the function yields 0.

Weighted Averages
100-weight_average.py: Python function that computes the weighted average of integers within a list of tuples.
The tuples are structured as (<score>, <weight>).
If the list is empty, the function returns 0.
No external module imports are used.

Squaring with Map
101-square_matrix_map.py: Python function that employs 'map' to compute the square of each integer within a matrix.
The input 'matrix' is a two-dimensional array.
A fresh matrix of the same dimensions as the input is returned, with each element being the square of the corresponding element from the input.
The original matrix remains unchanged.
No loops or external module imports are employed.

Deletion by Value
102-complex_delete.py: Python function that eliminates keys from a dictionary based on a specific value.
If the value is not present, the dictionary remains unaltered.
All keys corresponding to the specified value are removed.
No external module imports are used.

CPython Insights: PyBytesObject
103-python.c: C functions that present fundamental information about Python lists and Python bytes objects.
