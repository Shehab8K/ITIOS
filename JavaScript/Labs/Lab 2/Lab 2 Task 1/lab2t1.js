var flag = false;
var age =0;
alert("Enter your age 'in +ve numbers'");

while(!flag){
    age = Number(prompt("Enter your age"));
    if(age<=0 || isNaN(age))
    break;

    switch(true)
    {
        case age<=10:
            alert("You're a child"); 
            break;

        case age<=18:
            alert("You're a Teenager"); 
           break;

        case age<=50:
            alert("You're a Grown"); 
            break;

        default:
            alert("You're Old"); 
    }
        flag = confirm("do you want to exit (yes,no)");
        console.log(flag);
}
