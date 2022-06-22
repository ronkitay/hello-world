# Argument is EMPTY
if [[ -z "${PARAM}" ]]; then   
    printf ""
fi

# Argument is NOT EMPTY (Space between '!' and '[' is a must!)
if ! [[ -z "${PARAM}" ]]; then
    printf ""
fi

# Argument is NOT EMPTY - This method is preferable to ! [[ -z .... 

if [[ -n "${PARAM}" ]]; then
    printf ""
fi
