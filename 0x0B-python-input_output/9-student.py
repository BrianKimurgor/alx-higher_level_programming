#!/usr/bin/python3
"""
define a class student
"""


class Student:
    """
    represent a student
    """
    def init(self, first_name, last_name, age):
        """
        initialize a new student

        Args:
        first_name(str): first student name
        last_name(str): last student name
        age(int): student age
        """
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self):
        """
         retrieve dictionary representation of a Student instance
         """
         return self.__dict__
