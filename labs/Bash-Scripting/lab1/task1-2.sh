#!/bin/bash
## SCript accepts two float from command line as parameters, and prints out their arithmetic results
## Parameters
##	1st parameter: 1st float number
##	2nd parameter: 2nd float number
## Exit codes
##	0: Success
##	1: Not enough parameters
##	2: Division by zero
##	3: NUM1 is not a number
##	4: NUM2 is not a number
## Check for parameters

[ ${#} -ne 2 ] && echo "Not enough parameters" && exit 1

## Assign values to custom variables
NUM1=${1}
NUM2=${2}

## Check for floating point values
[ $(echo "${NUM1}" | grep -Eq "^-?[0-9]+([.][0-9]+)?$"; echo $?) != 0 ] && exit 3
[ $(echo "${NUM2}" | grep -Eq "^-?[0-9]+([.][0-9]+)?$"; echo $?) != 0 ] && exit 4
## Check for division by zero
[ $(echo "${NUM2} == 0" | bc -l) -eq 1 ] && exit 2

## Prints out the result
echo "Addition = $(echo "scale=2; ${NUM1} + ${NUM2}" | bc)"
echo "Subtraction = $(echo "scale=2; ${NUM1} - ${NUM2}" | bc)"
echo "Division = $(echo "scale=2; ${NUM1} / ${NUM2}" | bc)"
echo "Multiplication = $(echo "scale=2; ${NUM1} * ${NUM2}" | bc)"
exit 0

