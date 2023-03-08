var contact = {
    name: "",
    phone: null
}
var op;
var phonebook=[];
var temp;
var result;
var exit = false;
while(true)
{
    op = prompt("Enter add or search or press q for Quit");
    switch(op)
    {
        case "add":
        var newcon = Object.create(contact);
        newcon.name = prompt("Please Enter Name");
        newcon.phone = prompt("Please Enter Phone number");
        phonebook.push(newcon);
        console.log(phonebook);
        alert("Contact added successfully");
        break;

        case "search":
        temp = prompt("Please enter phone number to search for");
        result = phonebook.filter(filt => filt.phone == temp);
        for(let i=0; i<result.length; i++)
        {
            alert("Name is "+ result[i].name +" phone is "+result[i].phone);
        } 
        break;

        case "q":
        exit = true;
        break;

        default:
        alert("You can enter add or search or q ONLY");
        break;
    }
    if(exit)
    { break; }
}

