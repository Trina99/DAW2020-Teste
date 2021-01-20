#!/ibin/python

import json

##################### PARAMETERS #####################

SCHEMA_NAME = 'wedding'
DB_SCHEMA_NAME = SCHEMA_NAME + 's'
FILE = '../dataset/casamentos.json'

######################################################

with open(FILE,'r') as fin:
    data = json.load(fin)


def print_schema():

    print("""const mongoose = require('mongoose');

const {}_schema = new mongoose.Schema({{""".format(SCHEMA_NAME))

    for key in data[0]:
        value = data[0][key]
        if type(value) == int or type(value) == float:
            print('    {}:    Number,'.format(key))

        elif type(value) == str:
            print('    {}:    String,'.format(key))

        elif type(value) == list:
            # MUST BE ATOMIC TYPE (str,int,float)
            if value == []:
                print("ERROR: List field of first object doesn't have any element")
            else:
                if type(value[0]) == int or type(value[0]) == float:
                    print('    {}:    [Number],'.format(key))

                elif type(value) == str:
                    print('    {}:    [String],'.format(key))

    print("""}},
{{
    versionKey: false,
    collection: 'data'
}});

module.exports = mongoose.model('{}', wedding_schema, '{}s');""".format(DB_SCHEMA_NAME, DB_SCHEMA_NAME),end='')

print_schema()