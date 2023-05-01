function authenticate {
	echo "Authentication.."
}

function querystudent {
	echo "Now query"
	echo -n "Enter student name to query GPA : "
	read NAME
	##We want to get line from datafile starts with NAME followed by :
	LINE=$(grep "^${NAME}:" datafile)
	if [ -z ${LINE} ]
	then
		echo "Error, student name ${NAME} not found"
	else
		GPA=$(echo ${LINE} | awk ' BEGIN { FS=":" } { print $2 } ')
		echo "GPA for ${NAME} is ${GPA}"
	fi
}

function insertstudent {
    echo "Inserting a new student"
    echo -n "Enter name : " 
    read NAME
    echo -n "Enter GPA : "
    read GPA
    ### Before adding, we want to check GPA valid floating point or no
    checkFloatPoint "$GPA"
    if [ $? -eq 0 ] 
    then
        echo "${NAME}:${GPA}" >> datafile
        echo "Inserted Successfully"
    else
        echo "Error: Can't insert, must be float ex: 3.6"
    fi  
}

function deletestudent {
	echo "Deleting an existing student"
	echo -n "Enter studen to delete : "
	read NAME
	##We want to get line from datafile starts with NAME followed by :
        LINE=$(grep "^${NAME}:" datafile)
        if [ -z ${LINE} ]
        then
                echo "Error, student name ${NAME} not found"
        else
		##BEfore delete, print confirmation message to delete or no
		echo -en "Do you want to delete? type yes to proceed \n"
		read CHECK
		case "${CHECK}" in
			"yes")
				##-v used to get lines DOES NOT contain regex
				grep -v "^${NAME}:" datafile > /tmp/datafile
				cp /tmp/datafile datafile
				rm /tmp/datafile
				;;
			*)
				echo "Cancelled"
				;;
		esac
        fi
}

function updatestudent {
	echo "Updating an existing student"
}

function updatestudent {
	echo "Enter the name of the student to update GPA for:"
 	read NAME
 	LINE=$(grep "^${NAME}:" datafile)
 	if [ -z ${LINE} ]
        then
                echo "Error, student name ${NAME} not found"
        else
    		echo "Enter the new GPA for ${NAME}: "
    		read GPA
		sed -i "s/^${NAME}:.*$/${NAME}:${GPA}/" datafile
    		echo "GPA updated successfully."
  	fi
}

