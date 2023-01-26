#!/bin/sh

# Run the script on an example file and highlight the effects of the script
cat add-line-before-word-example-input.txt | ./add-line-before-word.sh | egrep --color '^|^Add.*WORD$'
