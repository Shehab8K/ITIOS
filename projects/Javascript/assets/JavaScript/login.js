let myErrMsg = document.getElementById("myErrMsg");
let userName = document.getElementById("exampleInputUser1");
let userPass = document.getElementById("exampleInputPassword1");

// Making local storage if none
if(!(localStorage.getItem("tech"))){
    let arr = [];
    localStorage.setItem("tech",JSON.stringify(arr));
  }else{
    // console.log("Local storage already found")
}

// Encryption & Decryption
var crypt = {
    secret : "CIPHERKEY For The best team in ITI",

    encrypt : clear => {
      var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
      return cipher.toString();
    },

    decrypt : cipher => {
      var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
      return decipher.toString(CryptoJS.enc.Utf8);
    }
  };

let getData = JSON.parse(localStorage.getItem("tech"));

/////////////////////// Login //////////////////////////

// Checking Cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

if(getCookie("username") == getData.name)
{
    document.location.href = "../../";
}
// Clicking Button
let myBtn = document.getElementById("mylogin");

myBtn.addEventListener("click", ()=>{

    if(getData == ""){
        console.log("empty");
        myErrMsg.classList.remove("hidder");
    }else
    {
        let savedUser = getData.name;
        let dePass = crypt.decrypt(getData.password);
        if(userName.value != savedUser || userPass.value != dePass)
        {
            myErrMsg.classList.remove("hidder");
        }
        else
        {
            // make cookies
            console.log("Logged in");
            // Expires after one day
            const oneDayToSeconds = 24 * 60 * 60;
            document.cookie =  `username= ${savedUser}; max-age = ${oneDayToSeconds}; path=/;`
            document.location.href = "../../";
        }
    }

});


///////////////////// Listner on input tags --> when input clicked reset its warning ////////////////////
let myInputTags = document.getElementsByTagName("input");

myInputTags[0].addEventListener("click",()=>{
    myErrMsg.classList.add("hidder");
});

myInputTags[1].addEventListener("click",()=>{
    myErrMsg.classList.add("hidder");
});