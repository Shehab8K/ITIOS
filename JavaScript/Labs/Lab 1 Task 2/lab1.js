var flag = true;

var number1 = null;
var number2 = null;

alert("This is a simple calculator that add 2 numbers only");
while (flag) {
    number1 = Number(prompt("Enter First number"));
    number2 = Number(prompt("Enter Second number"));

    console.log(Number(number1) , Number(number2));
    if(isNaN(Number(number1)) || isNaN(Number(number2)))
    {
        alert("please enter numbers");
    }else{
        number1 = Number(number1);
        number2 = Number(number2);
        flag = false;
    }
}

alert("Sum "+number1+" + "+number2+" = "+ (number1+number2));

console.log(number1+number2);