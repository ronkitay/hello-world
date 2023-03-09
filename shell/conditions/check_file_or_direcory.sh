
# Exactly 0 arguments
if [ ! -f "$FILE" ]
then
    echo "$FILE does not exist or is not a file"
fi

if [ ! -d "$DIR" ]
then
    echo "$DIR does not exist or is not a directory"
fi