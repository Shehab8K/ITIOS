let num1 = Number(prompt("Please Enter First number"));
let result = num1;
let exit = "";
while (!(exit == "x" || exit == "X")) {
    symbol = prompt("last result was " + result + " Please enter +, *, -, / or %");
    num2 = Number(prompt("Please Enter Second number"));
    if(isNaN(num2))
    {
        num2 = Number(prompt("Please Enter number Only"));
    }else
    {
    switch (symbol) {
        case "+":
            result = result + num2;
            break;

        case "*":
            result = result * num2;
            break;

        case "-":
            result = result - num2;
            break;

        case "/":
            result = result / num2;
            break;

        case "%":
            result = result % num2;
            break;

        default: alert("You Entered wrong symbol");
        break;
    }
}
    alert(result);
    exit = prompt("Press x to exit or enter to go to operation");
}