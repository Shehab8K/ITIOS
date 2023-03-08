const express = require("express");
const fs = require("fs");

let welcomeHTML = fs.readFileSync("welcome.html").toString()

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

let PORT = process.env.PORT || "7000";


let nameRegex = /^[A-Z-a-z]*$/; // Letters and hyphen - only

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});

app.post("/welcome",(req,res)=>{

        if (req.body.Email == "") {
          res.send("Please enter your email address");
        }
        
       else if (req.body.username == "") {
          res.send("Please enter your name");
        } 
        
        else if (!(nameRegex.test(req.body.username))) 
        {
          res.send("Name can be letters and hyphen only");
        }
        
       else if (req.body.mobile == "") {
          res.send("Please enter your mobile number");
        } 
      
       else if (req.body.Address == "") {
          res.send("Please enter your address");
        }
        else{
            welcomeHTML = welcomeHTML.replace("{username}", req.body.username);
            welcomeHTML = welcomeHTML.replace("{Email}", req.body.Email);
            welcomeHTML = welcomeHTML.replace("{mobile}", req.body.mobile);
            welcomeHTML = welcomeHTML.replace("{Address}", req.body.Address);
            res.send(welcomeHTML);
        }
});

app.listen(PORT,()=>{console.log("http://localhost:"+PORT)})
// //Pages
// let index = fs.readFileSync("./index.html").toString();
// let Welcome = fs.readFileSync("./welcome.html").toString();
// let formJS = fs.readFileSync("./form.js").toString();

// //Assets
// let PageImg = fs.readFileSync("./assets/Man_Waving_Hand_Cartoon_Vector.png");
// let favicon = fs.readFileSync("./assets/icon.png");
// let registerCSS = fs.readFileSync("./assets/register.css").toString();

// // Bootstrap
// let BootstrapCSS = fs.readFileSync("./node_modules/bootstrap/dist/css/bootstrap.min.css").toString();
// let BootstrapJS = fs.readFileSync("./node_modules/bootstrap/dist/js/bootstrap.min.js").toString();

// var username = "";
// var Email = "";
// var mobile = "";
// var Address = "";

// http.createServer((req,res)=>{
//     if(req.method == "GET"){
//         switch(req.url){

//             case "/":
//                 res.setHeader("Access-Control-Allow-Origin", "*");
//                 res.write(index);
//                 break;

//             case "/welcome.html":
//                 res.setHeader("Access-Control-Allow-Origin", "*");
//                 res.write(Welcome);
//                 break;

//             case "/assets/register.css":
//                 res.writeHead(200, "Ok", { "content-type": "text/css" });
//                 res.write(registerCSS);
//                 break;
               
            
//             case "/form.js":
//                 res.writeHead(200, "OK", { "content-type": "text/javascript" })
//                 res.write(formJS);
//             break;


//             case "/assets/icon.png":
//                 res.writeHead(200, "ok", { "content-type": "image/png" });
//                 res.write(favicon);
//                 break;


//             case "/assets/Man_Waving_Hand_Cartoon_Vector.png":
//                 res.writeHead(200, "ok", { "content-type": "image/png" });
//                 res.write(PageImg);
//                 break;

//                 case "/node_modules/bootstrap/dist/css/bootstrap.min.css":
//                     res.writeHead(200, "Ok", { "content-type": "text/css" });
//                     res.write(BootstrapCSS);
//                     break;

//                 case "/node_modules/bootstrap/dist/js/bootstrap.min.js":
//                     res.writeHead(200, "OK", { "content-type": "text/javascript" })

//                     res.write(BootstrapJS);
//                 break;

//             default:
//                 res.write("<h1>No Page Found</h1>");
//                 break;
//             }
//              res.end();
//         }

//         else if (req.method) {
//             //url
//             req.on("data", (data) => {
//             console.log(data)
//               username = data.toString().split("=")[1].split("+")[0].split("&")[0];
//               Email = decodeURIComponent(data.toString().split("=")[2].split("&")[0]);
//               mobile = data.toString().split("=")[3].split("&")[0];
//               Address = data.toString().split("=")[4];
//             });
//             req.on("end", () => {
//                 Welcome = Welcome.replace("{username}", username);
//                 Welcome = Welcome.replace("{Email}", Email);
//                 Welcome = Welcome.replace("{mobile}",mobile);
//                 Welcome = Welcome.replace("{Address}", Address);
//             res.write(Welcome);
//             res.end();
//             });
//           }
// })
// .listen("7000",()=>{
//     console.log("server is working");
// });