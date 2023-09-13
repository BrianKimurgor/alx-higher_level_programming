#!/usr/bin/python3
"""
define a class Student
"""


class Student:
    """represents a student
    """
    def init (self, first_name, last_name, age):
        """
        initializes a new student

        Args:
        first_name(string): student first name
        last_name(string): student last name
        age(int): student age
        """
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self, attrs=None):
        """
        retrieves dictionary representation of a student instance

        if attrs == list of strings, represent attributes included in a list

        Args:
        attrs (list):(optional) attributes to represent
        """
        if(type(attrs) == list and
                all(type(ele) == str for ele in attrs)):
            return{k: getattr(self, k) for k in attrs if hasattr(self, k)}
        return self.__dict__

