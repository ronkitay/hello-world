#!/bin/sh

help() { 
    if [[ -z "${SCRIPT}" ]];
    then
        SCRIPT=`basename $0`
    fi
    printf "\n"
    printf "<SOME SCRIPT DESCRIPTION>\n"
    printf "\n"
    printf "Usage:\n"
    printf "\t${SCRIPT} -a <mandatory-option> [-b <optional option>] MANDATORY_PARAM [OPTIONAL_PARAM]\n"
    printf "\n"
    printf "Options:\n"
    printf "\t-a:\n"
    printf "\tSOME EXPLENATION ABOUT '-a'.\n"
    printf "\n"
    printf "\t-b:\n"
    printf "\tSOME EXPLENATION ABOUT '-b'.\n"
    printf "\n"
    printf "MANDATORY_PARAM:\n"
    printf "\tSOME EXPLENATION ABOUT 'MANDATORY_PARAM'.\n"
    printf "\n"
    printf "OPTIONAL_PARAM:\n"
    printf "\tSOME EXPLENATION ABOUT 'OPTIONAL_PARAM'.\n"
    printf "\n"
    printf "Examples:\n"
    printf "\t# EXAMPLE 1\n"
    printf "\t${SCRIPT} -a some-option-value SOME_PARAM_VALUE \n"
    printf "\n"
    printf "\t# EXAMPLE 2\n"
    printf "\t${SCRIPT} -a some-option-value -b another-option-value SOME_PARAM_VALUE ANOTHER_PARAM_VALUE\n"
    printf "\n"
    exit 1
}

if [[ $1 == '-h' ||  $1 == '--help' ]]; 
then
    help
fi


while getopts ":a:b:" option; do
    case "${option}" in
        a)
            a=${OPTARG}
            # SOME HANDLING AND VALIDATION
            ;;
        b)
            b=${OPTARG}
            # SOME HANDLING AND VALIDATION
            ;;
        *)
            help
            ;;
    esac
done
shift $((OPTIND-1))

MANDATORY_PARAM=$1

if [[ -z "${a}" || -z ${MANDATORY_PARAM} ]]; then
    help
fi

printf "Got -a = ${a}\n"
if ! [[ -z "${b}" ]]; then
    printf "Got -b = ${b}\n"
fi

printf "MANDATORY_PARAM = ${MANDATORY_PARAM}\n"

if [ $# -gt 1 ]; then
    printf "OPTIONAL_PARAM = $2\n"
fi
