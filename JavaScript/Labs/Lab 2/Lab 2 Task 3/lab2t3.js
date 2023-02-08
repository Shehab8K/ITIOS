var myTime = null;
var msg;

while(true)
{
    myTime = Number(prompt("Enter hour"));
    if(isNaN(myTime))
    {
        alert("Enter Numbers ONLY!!!!");
    }else{
        break;
    }
}
if(myTime<=24)
{
if(myTime > 12)
{
        myTime = myTime-12;
        msg = `Time now is ${myTime} PM`;

}else{
    msg = `Time now is ${myTime} AM`;
}
}else{
    msg = "Time must be less than or equal 24";
}
alert(msg);
