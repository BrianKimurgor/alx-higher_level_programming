# Python - Conditionals, Loops, and Functions

This project delves into the realm of conditionals, loops, and functions in Python. It entails the usage of various control statements such as `if`, `if ... else`, `break`, `continue`, `pass`, and `range`. The project encompasses both `while` and `for` loops, facilitating practice in crafting Python functions. The exploration covers a spectrum of topics, including variable scope, tracebacks, and arithmetic operators.

To execute **TASK 2 to TASK 6** and **TASK 14**, utilize the command `chmod u+x filename` to enable the last checker, **TASK 7**.

## Function Prototypes 💾

Below are the prototypes for the functions developed within this project:

**File** | **Prototype**
--- | ---
`7-islower.py` | `def islower(c):`
`8-uppercase.py` | `def uppercase(str):`
`9-print_last_digit.py` | `def print_last_digit(number):`
`10-add.py` | `def add(a, b):`
`11-pow.py` | `def pow(a, b):`
`12-fizzbuzz.py` | `def fizzbuzz():`
`13-insert_number.c` | `listint_t *insert_node(listint_t **head, int number);`
`101-remove_char_at.py` | `def remove_char_at(str, n):`
`102-magic_calculation.py` | `def magic_calculation(a, b, c):`

## Tasks 📃

**0. Positive anything is better than negative nothing**

`0-positive_or_negative.py`: A Python program that generates a random signed number for the variable `number` upon each execution and then prints whether the `number` is positive, negative, or zero. The output includes the number followed by appropriate descriptions, and concludes with a new line.

**1. The last digit**

`1-last_digit.py`: This Python program assigns a random signed number to the variable `number` each time it runs, and then prints its last digit. The output format is "Last digit of [number] is [last_digit]", followed by additional information based on the last digit's value, and concluded with a new line.

**2. I sometimes suffer from insomnia. And when I can't fall asleep, I play what I call the alphabet game**

`2-print_alphabet.py`: A Python program that prints the lowercase alphabet without a newline at the end. Achieved using only one print statement and one loop. It does not utilize variable storage or module imports.

**3. When I was having that alphabet soup, I never thought that it would pay off**

`3-print_alphabt.py`: This Python program prints the lowercase alphabet followed by a new line. It achieves this using a single print statement and a loop. The program omits the letters 'q' and 'e' from the output without the use of variable storage or module imports.

**4. Hexadecimal printing**

`4-print_hexa.py`: A Python program that prints numbers from 0 to 98, displaying each number in both decimal and hexadecimal form. The program uses a single print statement and a loop. No variable storage or module imports are utilized, and the printing format is "[decimal] = [hexadecimal]".

**5. 00...99**

`5-print_comb2.py`: This Python program prints two-digit numbers from 0 to 99, separated by commas and spaces. The last number is followed by a newline. It achieves this using no more than two print functions and a single loop. The program avoids variable storage and module imports.

**6. Inventing is a combination of brains and materials. The more brains you use, the less material you need**

`6-print_comb3.py`: A Python program that prints all possible different combinations of two digits in ascending order. Numbers are separated by commas and spaces, except for the last number, which is followed by a newline. The two digits must be different (e.g., 01 and 10 are considered identical). The program uses no more than three print functions and two loops. Variable storage and module imports are avoided.

**7. islower**

`7-islower.py`: This Python function checks for lowercase characters and returns `True` if the input character `c` is lowercase, otherwise returns `False`. It accomplishes this without importing modules or using the `str.upper()` or `str.isupper()` methods.

**8. To uppercase**

`8-uppercase.py`: A Python function that prints a given string in uppercase, followed by a newline. The function uses no more than two print functions and a single loop. It avoids importing modules or using the `str.upper()` or `str.isupper()` methods.

**9. There are only 3 colors, 10 digits, and 7 notes; it's what we do with them that's important**

`9-print_last_digit.py`: This Python function prints the last digit of a given number and returns the value of that last digit. The function does not import any modules.

**10. a + b**

`10-add.py`: A Python function that returns the addition of two integers. The function does not import any modules.

**11. a ^ b**

`11-pow.py`: This Python function returns the value of `a` raised to the power of `b`. The function does not import any modules.

**12. Fizz Buzz**

`12-fizzbuzz.py`: A Python function that prints numbers from 1 to 100, followed by spaces. Multiples of three are replaced with "Fizz", multiples of five with "Buzz", and multiples of both three and five with "FizzBuzz". The function avoids importing modules.

**13. Insert in sorted linked list**

`13-insert_number.c`: A C function that inserts a number into a sorted linked list. If the insertion fails, the function returns `NULL`; otherwise, it returns the address of the new node. The helper files `linked_lists.c` and `lists.h` are provided for testing this function.

**14. Smile in the mirror #advanced**

`100-print_tebahpla.py`: A Python program that prints the alphabet in reverse order, alternating between lowercase and uppercase, without a newline at the end. The program achieves this using only one print statement and one loop, without storing characters in variables or importing modules.

**15. Remove at position #advanced**

`101-remove_char_at.py`: This Python function creates a copy of a given string without the character at a specified position `n`. The function avoids importing modules.

**16. ByteCode -> Python #2 #advanced**

`102-magic_calculation.py`: A Python function designed to match a specific bytecode provided by Holberton School.
