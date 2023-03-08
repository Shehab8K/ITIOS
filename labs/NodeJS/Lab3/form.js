let nameRegex = /^[A-Z-a-z]*$/; // Letters and hyphen - only
alert("Working");
function printError(errMsg) {
          document.getElementById("errMsg").innerHTML = errMsg;
          }
// Validate form
let username = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPhone = document.getElementById("userPhone");
let userAdress = document.getElementById("userAddress");

let myregisterbtn = document.getElementById("myregisterbtn");

function ValidateForm() {
  alert("Working");
  // Validate Email
  if (email == "") {
    printError("Please enter your email address");
  }
  
 else if (username.value == "") {
    printError("Please enter your name");
  } 
  
  else if (!(nameRegex.test(username.value))) 
  {
    printError("Name can be letters and hyphen only");
  }
  
 else if (mobile == "") {
    printError("Please enter your mobile number");
  } 

 else if (address == "") {
    printError("Please enter your address");
  }

};