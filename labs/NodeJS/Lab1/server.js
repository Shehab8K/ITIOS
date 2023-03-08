const http = require("http");
const fs = require("fs");


http.createServer((req,res)=>{

    /// Used code to remove second request for favicon to avoid double write on file :))
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end();
        return;
    }
    ////////////////////////////////////////////

   let myArr = req.url.split("/");
   let result = Number(myArr[2]);
   let operation = myArr[1];

   switch(operation)
   {
    case "add":
        for(let i=3; i<myArr.length; i++)
        {
            result += Number(myArr[i]);
        }
    break;

    case "sub":
        for(let i=3; i<myArr.length; i++)
        {
            result -= Number(myArr[i]);
        }
    break;

    case "multi":
        for(let i=3; i<myArr.length; i++)
        {
            result *= Number(myArr[i]);
        }
    break;

    case "div":
        for(let i=3; i<myArr.length; i++)
        {
            result /= Number(myArr[i]);
        }
    break;

    default:
        result = "Error!! Please enter add, sub, multi or div as the first argument";
   }

        fs.appendFileSync(
            "operations.txt",`${operation} occured on ${myArr.length-2} elements and result = ${result} \n`,
            (err)=>{console.log(err)});

    res.end(`<h1> result = ${result} <h1/>`);
})
.listen(3000,()=>{
    console.log("working on port 3000");
});