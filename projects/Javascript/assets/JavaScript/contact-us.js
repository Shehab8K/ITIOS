// console.log("TEST HELLO");
const submitBtn = document.getElementById("contact-btn");
const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("form-message-success");

const nameVal = document.querySelector("#name");
const emailVal = document.querySelector("#email");
const subVal = document.querySelector("#subject");
const massageVal = document.querySelector("#message");


contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  // validation

  //to Json
  //   let msg = {
  //     name: nameVal.value,
  //     emial: emailVal.value,
  //     subject: subVal.value,
  //     massage: massageVal.value,
  //   };
  //   JSON.stringify(msg);

  successMsg.style.display = "block";
  nameVal.value = "";
  emailVal.value = "";
  subVal.value = "";
  massageVal.value = "";
});
