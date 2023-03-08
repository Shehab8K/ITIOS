let btn = document.getElementById('shipBtn');
let infoForm = document.getElementById('infoForm');
let payForm = document.getElementById('payForm');
let visaBtn = document.getElementById('visaBtn');
let cashBtn = document.getElementById('cashBtn');
let visaForm = document.getElementById('visaForm');
let infoBtn = document.getElementById('infoBtn');
let payBtn = document.getElementById('payBtn');
let cashMsg = document.getElementById('cashMsg');
let orderBtn = document.getElementById('orderBtn');
let done = document.getElementById('done'); 
let totalPayNum = document.getElementById('totalPayNum');


let user=[]

user = JSON.parse(localStorage.getItem("tech"));

let user_name = document.getElementById('first_name');
user_name.value = user.name;

let email = document.getElementById('contactinfo');
email.value = user.email;

visaBtn.onclick = function(){
    visaForm.classList.remove('hide');
    cashMsg.classList.add('hide');
}
cashBtn.onclick = function(){
    visaForm.classList.add('hide');
    cashMsg.classList.remove('hide');
}

infoBtn.onclick = function(){
    infoForm.classList.remove('hide');
    payForm.classList.add('hide');
    infoBtn.classList.add('bold');
    payBtn.disabled = true;
    payBtn.classList.remove('bold');
}


orderBtn.onclick = function(){
  localStorage.removeItem("product");
  allpayment.classList.add('hide');
  done.classList.remove('hide');
}


// loop cart
  
let content = '';
let productsCartArray=[]

productsCartArray = JSON.parse(localStorage.getItem("product"));

  
productsCartArray.forEach(p => {
    content += `
            <div class="row g-0">
                  <div class="col-md-4">
                    <img 
                      src="${p.imgSrc}"
                      class="img-fluid rounded-start"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title" id="productName">${p.name}</h5>
                      <p class="card-text" >Quantity: 
                        <small class="text-muted" id="productPrice">${p.quantity}</small>
                      </p>
                      <p class="card-text" >
                        <small class="text-muted" id="productPrice">${p.price}</small>
                      </p>
                    </div>
                  </div>
                </div><hr class="hr" />
    `
  });
  
  document.querySelector("#shop").innerHTML = content;


// products price
let prodsPrice = 0;
let prodDis = 0;

productsCartArray.forEach(item => {
  let pri = parseFloat((item.price).replace(/[^\d\.]*/g, '')).toFixed(2);
  prodDis = parseFloat((item.discountPercentage).replace(/[^\d\.]*/g, '')).toFixed(2);
  let total = pri - ((pri*prodDis)/100);
  console.log(prodDis);
  let qua = item.quantity;
  prodsPrice+= (total*qua);
});

document.querySelector("#subTotal").innerHTML = prodsPrice.toFixed(2) + ' EGP';
document.querySelector("#dissubTotal").innerHTML = prodsPrice.toFixed(2) + ' EGP';


// coupon

let disBtn = document.getElementById('disBtn');
let dismsg = document.getElementById('dismsg');

let discountValue = 1;
let distotal = prodsPrice;

disBtn.onclick = function(){
  let discount = document.getElementById('discount').value;
  disBtn.disabled=true;
  if(discount=='blackFriday'){
    discountValue = 0.15;
    dismsg.classList.add('hide');
  }
  else if(discount=='Shehab' || discount=='SarSor' || discount=='Mahmoud' || discount=='BakBok'){
    discountValue = 0.5;
    dismsg.classList.add('hide');
  }
  else if(discount=='Omar'){
    discountValue = 0.7;
    dismsg.classList.add('hide');
  }
  else{
    document.querySelector("#dismsg").innerHTML = 'Unvalid discount code';
    disBtn.disabled=false;
  }

  // products price with discount
  if(discountValue<1){
    distotal -=(prodsPrice*discountValue);
  }
  document.querySelector("#dissubTotal").innerHTML = distotal.toFixed(2) + ' EGP';
  totalPricefn();
}

//total price and go to payment method
let ship = 0;
let TPrice = 0;

btn.onclick = function(){
    infoForm.classList.toggle('hide');
    payForm.classList.toggle('hide');
    infoBtn.classList.remove('bold');
    payBtn.disabled = false;
    payBtn.classList.add('bold');

  let gov = document.getElementById('government').value; 
  switch(gov){
    case 'alex':
      ship=20;
      break;
    case 'cairo':
      ship=30;
      break;
    case 'giza':
      ship=40;
      break;
    case 'oct':
      ship=45;
      break;
  }

  document.querySelector("#shipValue").innerHTML = ship.toFixed(2) + ' EGP';
  totalPricefn();
}

totalPricefn = function(){
  TPrice = distotal+ship;
  document.querySelector("#totalPrice").innerHTML =  TPrice.toFixed(2)+' EGP';
  document.querySelector("#totalPayNum").innerHTML =  'Pay '+TPrice.toFixed(2)+' EGP';
}






