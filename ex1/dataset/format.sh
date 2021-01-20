#!/bin/bash

FILE="filmes.json"
sed -e 's/$/,/' -i $FILE
sed '$ s/.$//' -i $FILE
sed '1s/^/[/' -i $FILE
echo "]" >> $FILE