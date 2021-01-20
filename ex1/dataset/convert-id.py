#!/bin/python3

import json

FILE = 'filmes.json'
with open(FILE,'r') as file:
    data = json.load(file)

i = 0
for elem in data:
    i += 1
    del elem['_id']
    elem['id'] = 'f{}'.format(i)

with open(FILE,'w') as file:
    dict = json.dump(data,file)