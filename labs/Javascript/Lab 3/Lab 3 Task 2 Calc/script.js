var number1;
var number2;
var result;
var op;
while(true)
{
var check =true;
number1 = Number(prompt("Please enter number 1"));
op = prompt("enter operator +, -, *, /, %");
number2 = Number(prompt("Please enter number 2"));

if(isNaN(number1) || isNaN(number2))
{
    alert("please enter numbers only");
}else{
    switch(op)
    {
        case "+":
        result = number1 + number2;
        break;

        case "-":
        result = number1 - number2;
        break;

        case "*":
        result = number1 * number2;
        break;

        case "/":
        result = number1 / number2;
        break;

        case "%":
        result = number1 % number2;
        break;

        default:
            alert("You Entered wrong op please enter the sign +, -, *, /, %");
            check = false;
        break;
    }
    if(check)
    {
    alert(number1 +" " +op +" "+ number2+ " = "+result);
    break;
    }
}
}
