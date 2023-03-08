let nameRegex = /^[A-Z-a-z]*$/; // Letters and hyphen - only
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  // :")
let passRegex = /[^\s]{8,}$/;   // atleast 8 digits


let registerbtn = document.getElementById("myregisterbtn");

// Creating LocalStorage

if(!(localStorage.getItem("tech"))){
    let arr = [];
    localStorage.setItem("tech",JSON.stringify(arr));
  }else{
    // console.log("Local storage already found")
  }

// Encrypt & Decrypt

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

// Checking phase then ===> Register

registerbtn.addEventListener("click",()=>{
    let checking_flag = true;

    let usrname = document.getElementById("UsernameInput");
    let usremail = document.getElementById("userEmail");
    let pass = document.getElementById("password1");
    let pass2 = document.getElementById("password2");

    let userNameCheck = nameRegex.test(usrname.value);
    let emailCheck = emailRegex.test(usremail.value);
    let passCheck = passRegex.test(pass.value);

    if(!userNameCheck || usrname.value == ""){
        let usrNormal = document.getElementById("usrNormal");
        let usrErr = document.getElementById("usrErr");
    
        usrNormal.classList.add("hidder");
        usrErr.classList.remove("hidder");

        checking_flag = false;
    }

    if(!emailCheck || usremail == ""){
        let emailNormal = document.getElementById("emailNormal");
        let emailErr = document.getElementById("emailErr");
    
        emailNormal.classList.add("hidder")
        emailErr.classList.remove("hidder");

        checking_flag = false;
    }

    if(!passCheck){
        let passNormal = document.getElementById("passNormal");
        let passErr = document.getElementById("passErr");
    
        passNormal.classList.add("hidder");
        passErr.classList.remove("hidder");

        pass.value = "";

        checking_flag = false;
    }
    
    if(pass2.value != pass.value){
        let rePassNormal = document.getElementById("rePassNormal");
        let rePassErr = document.getElementById("rePassErr");

        rePassNormal.classList.add("hidder");
        rePassErr.classList.remove("hidder");

        pass2.value = "";
        checking_flag = false;
    }

    if(checking_flag){
        let passEncrypt = crypt.encrypt(pass.value);
        let arr = {
            name: usrname.value,
            email: usremail.value,
            password: passEncrypt
        };
        localStorage.setItem("tech",JSON.stringify(arr));
        document.location.replace("./login.html");
    }
})

///////////////////// Listner on input tags --> when input clicked reset its warning ////////////////////
let myInputTags = document.getElementsByTagName("input");

myInputTags[0].addEventListener("click",()=>{
    let usrNormal = document.getElementById("usrNormal");
    let usrErr = document.getElementById("usrErr");

    usrErr.classList.add("hidder")
    usrNormal.classList.remove("hidder");
});

myInputTags[1].addEventListener("click",()=>{
    let emailNormal = document.getElementById("emailNormal");
    let emailErr = document.getElementById("emailErr");

    emailNormal.classList.remove("hidder")
    emailErr.classList.add("hidder");
});

myInputTags[2].addEventListener("click",()=>{
    let passNormal = document.getElementById("passNormal");
    let passErr = document.getElementById("passErr");

    passNormal.classList.remove("hidder");
    passErr.classList.add("hidder");
});

myInputTags[3].addEventListener("click",()=>{
    let rePassNormal = document.getElementById("rePassNormal");
    let rePassErr = document.getElementById("rePassErr");
    rePassNormal.classList.remove("hidder");
    rePassErr.classList.add("hidder");
});