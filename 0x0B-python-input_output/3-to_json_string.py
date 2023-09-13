#!/usr/bin/python3
"""
defines a string-to-JSON function
"""
import json


def to_json_string(my_obj):
    """
    return JSON representation of a string object
    """
    return json.dumps(my_obj)
