#!/usr/bin/python3
"""Define an object attribute lookup function."""


def lookup(obj):
    """Return a list of object's available attributes."""
    return (dir(obj))
