var username;
var password;

while(true)
{
username = prompt("Please enter username");
password = prompt("Please enter password");

if(username == "admin" && password == "421$$")
{
    alert("Welcome login success");
    break;
}else if(username != "admin" && password != "421$$"){
    alert("Wrong username & password");
}
else if (username != "admin")
{
    alert("Wrong username");
}else{
    alert("Wrong password");
}
}