#!/usr/bin/python3
# 6 from_json_string.py
"""
defines a JSON-to-object function
"""
import json


def from_json_string(my_str):
    """
    returns an object (Python) represented by a JSON string
    """
    return json.loads(my_str)
