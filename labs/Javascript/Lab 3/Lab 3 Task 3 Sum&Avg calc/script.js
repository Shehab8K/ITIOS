var numbers=[];
var count;
var result;
var avg;
while(true)
{
count = Number(prompt("How many numbers you will enter"));
if(isNaN(count))
{
    alert("Please enter number only")
}else{
    for(let i=0; i<count; i++)
    {
        let temp = Number(prompt("Please enter number "+(i+1)));
        if(isNaN(temp))
        {
            alert("Please enter number only");
            i--;
        }else{
            numbers.push(temp);
        }
    }
    result = numbers.reduce((accumulator, curval)=> accumulator+ curval);
    avg = result/count;
    alert("Sum is = "+result+" & Avg = "+avg);
    break;
}
}
