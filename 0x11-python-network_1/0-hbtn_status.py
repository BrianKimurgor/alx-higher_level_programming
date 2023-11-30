#!/usr/bin/env python3
#script that fetches https://alx-intranet.hbtn.io/status

import urllib.request

with urllib.request.urlopen('https://alx-intranet.hbtn.io/status') as response:
    body = response.read()
    print('Body response:')
    print('\t- type:', type(body))
    print('\t- content:', body)
    print('\t- utf8 content:', body.decode('utf-8'))
