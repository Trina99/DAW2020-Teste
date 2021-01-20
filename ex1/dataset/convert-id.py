#!/bin/python3

import json

FILE = 'batismos.json'
with open(FILE,'r') as file:
    data = json.load(file)

# i = 0
# for elem in data:
#     i += 1
#     del elem['_id']
#     elem['id'] = 'f{}'.format(i)

# "title": "Registo de batismo n.º 19: Carolina. Pai: João Fernandes Martins; Mãe: Matilde Augusta",

for elem in data:
    elem['_id'] = elem['ref'].replace('/','_')

    title = elem['title']
    aux = title.split(':')
    pai_aux = aux[2]
    pai = pai_aux[1:len(pai_aux)-5]
    mae_aux = aux[3]
    mae = mae_aux[1:len(mae_aux)]

    elem['pai'] = pai
    elem['mae']= mae


    # aux = elem['title'].split('Pai:')
    # pai = aux[1].split(";")
    # aux2 =aux[1].split('Mãe:')
    # mae = aux2[1]

    # elem['pai'] = pai[1]
    # elem['mae'] = mae

with open('batismo_modified.json','w') as file:
    dict = json.dump(data,file)