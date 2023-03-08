var nameConfirmed = false;
var flagDOB = false;

var person = {
    firstName: "",
    lastName: "",
    bod: null,
};

while (!nameConfirmed) {
     person.firstName =  window.prompt("Please enter your First name");  
     person.lastName =  window.prompt("Please enter your Last name");
     nameConfirmed = confirm("Your full name is "+ person.firstName+ " "+ person.lastName +"?");
}

while(!flagDOB)
{
person.bod = window.prompt("Enter your birth year");

if(isNaN(Number(person.bod)))
{
    alert("please enter number ");
} else{
    person.bod = Number(person.bod);
    flagDOB = true;
    break;
}
}

person.bod = 2023 - person.bod;
window.alert("Hello "+person.firstName+ " "+ person.lastName+ " you are "+ person.bod+" old");
