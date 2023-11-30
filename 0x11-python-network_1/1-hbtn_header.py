#!/usr/bin/env python3
"""script that takes in a URL,
 sends a request to the URL
 and displays the value of the X-Request-Id
variable found in the header of the response.
"""
import sys
import urllib
from urllib.request import urlopen
from urllib.error import URLError

if len(sys.argv) != 2:
    print("Usage: python script.py <URL>")
    sys.exit(1)

url = sys.argv[1]

try:
    with urllib.request.urlopen(url) as response:
        x_request_id = response.getheader('X-Request-Id')
        print('X-request-Id value:', x_request_id)
except urllib.error.URLError as e:
    print(f'Error accessing the URL: {e}')
except Exception as e:
    print(f'An unexpected error occured: {e}')
