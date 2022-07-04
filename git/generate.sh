#!/bin/sh

for file in `ls .gitignore*`; do 
    cat $file; 
    printf "\n\n";
done
