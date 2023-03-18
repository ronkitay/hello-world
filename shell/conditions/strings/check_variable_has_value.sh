# Variable is Has Value (Not Empty)
if [[ -n "${VARIABLE}" ]]; then
    echo "Variable HAS a value!"
fi

# ------- Alternative (Less Favorable)

# Variable is NOT EMPTY (Space between '!' and '[' is a must!)
if ! [[ -z "${VARIABLE}" ]]; then
    echo "Variable is NOT EMPTY or UNDEFINED!"
fi