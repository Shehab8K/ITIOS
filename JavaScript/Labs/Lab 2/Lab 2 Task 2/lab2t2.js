var myString = null;

myString = prompt("Enter your text to check vowels");

var count= 0;

for(const character in myString)
{
    switch(myString[character])
    {
        case "a":
        count++;
        break;

        case "e":
        count++;
        break;
            
        case "o":
        count++;
        break;

        case "u":
        count++;
        break;

        case "i":
        count++;
        break;

        case "A":
            count++;
            break;
    
            case "E":
            count++;
            break;
                
            case "O":
            count++;
            break;
    
            case "U":
            count++;
            break;
    
            case "I":
            count++;
            break;
    }
}

alert("Number of vowels = "+count);