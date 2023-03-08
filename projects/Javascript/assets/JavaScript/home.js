// ///////////// start products fetch data /////////
let myData;
fetch("https://dummyjson.com/products")
  .then((res) => {
    myData = res.json();
    
    return myData;
  })
  .then((myData) => {
    if (cardContainer) {
      document.getElementById("card-container").replaceWith(cardContainer);
      return;
    }

    cardContainer = document.getElementById("card-container");
    // console.log(myData.products);
    // myData.products.forEach((data) => {
    //   createCard(data);
    //   filterProduct("all");

    // });
    for (let i = 0; i < 10; i++) {
      createCard(myData.products[i]);
    }
    /////////////////// add details data to local storage////////////
    let index;
    products.addEventListener("click", (e) => {
      if(e.target.classList.contains("img")){
      let targ= e.target.parentNode.parentNode;
     index=targ.getAttribute("data-id");
     let detailsObj={
      id:myData.products[index-1]["id"],
      name:myData.products[index-1]["title"],
      description:myData.products[index-1]["description"],
      price: myData.products[index-1]["price"],
      discountPercentage:myData.products[index-1]["discountPercentage"],
      rating:myData.products[index-1]["rating"],
      stock:myData.products[index-1]["stock"],
     brand:myData.products[index-1]["brand"],
     category:myData.products[index-1]["category"],
      images:[]
      
        
    };
  myData.products[index-1]["images"].forEach(
      element=>{
       detailsObj.images.push(element) 
      }
    ) 
    // console.log(detailsObj.images)
    window.localStorage.setItem("details",JSON.stringify(detailsObj))
         if (e.target.classList.contains("img")) {
          window.location.replace("assets/HTML/product-details.html");
        }

      }    })
   
    ////////////// end of details local storage////////////////////
    filterProduct("all");
  })
  .then(() => {
    // ///////// START Header scoller ///////////////////
    let el = document.querySelector(".scroller");
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      el.style.width = `${(scrollTop / height) * 100}%`;
    });
    // ///////// END Header scoller ///////////////////
  });
//bootstrap card
let cardContainer;
let card;
let createCard = (data) => {
  //Create Card
 card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", data.category, "hide");
  card.setAttribute("data-id", data.id);

  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.className="img"
  image.setAttribute("src", data.images[0]);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = data.title.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + data.price;
  container.appendChild(price);
  button = document.createElement("Button");
  button.classList = "btn addBtn";
  button.innerText = "Add to cart";

  container.appendChild(button);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
};
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

// /////////// ######################end products data################################//
/////// START SCROLL UP BUTTON ////////////
let upSpan = document.querySelector(".up");

window.onscroll = () =>
  this.scrollY >= 500
    ? upSpan.classList.add("show")
    : upSpan.classList.remove("show");

upSpan.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
///////END SCROLL UP BUTTON ////////////

// ////////////////// toggle sign in /////////////
// console.log(signIn);
//Get cookie
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
let signIn = document.getElementById("signIn");
let register = document.getElementById("register");
let cart = document.getElementById("cart");
// console.log(cart);

function checkingLogout() {
  if (getCookie("username")) {
    name = getCookie("username");
    signIn.innerHTML = `${name}`;
    register.innerHTML = `Logout`;
    register.setAttribute("href", "");

    // No Edit
    cart.classList.remove("d-none");
    // alert on add to cart
    cartNmber = document.querySelector(".badge.badge-pill.badge-danger.notify");
    numberOnCart = 0;
    cartNmber.innerHTML = 0;

    products.addEventListener("click", (e) => {
      if (e.target.classList.contains("addBtn")) {
        // alert("You can't add Unless you login ");
        const elementName = e.target.parentNode.querySelector("h5").innerHTML;
        createAlert(
          `the ${elementName} has been added to cart successfully`,
          "success"
        );
        //incrament cart
        numberOnCart++;
        cartNmber.innerHTML = numberOnCart;

        // console.log(cartNmber);
      }
    });
  } else {
    signIn.setAttribute("href", "assets/HTML/login.html");
    register.setAttribute("href", "assets/HTML/register.html");
  }
}

checkingLogout(); // For Auto run

if (!getCookie("username")) {
  products = document.getElementById("products");
  // console.log(products);
  products.addEventListener("click", (e) => {
    if (e.target.classList.contains("addBtn")) {
      // alert("You can't add Unless you login ");
      createAlert("You Must logIn to add product to cart", "danger");
    }
  });
}

// window.onload = () => {
//   let addToCartButtons = document.querySelectorAll(".addBtn");
//   if (!getCookie("username")) {
//     console.log(addToCartButtons);

//     addToCartButtons.forEach((btn) => {
//       console.log(btn);
//       btn.oaddEventListener("click", "aa", () => {
//         alert("you must be logged in to add to cart");
//         console.log("not login");
//       });
//     });
//   }
// };

register.addEventListener("click", () => {
  document.location.reload();
  checkingLogout(); // To re-check Logout
  //document.location.href = "/";
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  //// register.href = "#";
});

//Create alerts
const pageMessages = document.getElementById("pageMessages");

function createAlert(massage, alertType) {
  let alertDiv = document.createElement("div");
  alertDiv.classList = `alert alert-${alertType} `;
  alertDiv.innerHTML = `${massage}`;
  pageMessages.appendChild(alertDiv);
  setTimeout(function () {
    pageMessages.removeChild(alertDiv);
  }, 1500);
}
///////////////////////////product-details/////////////////////////////
 
      // products.addEventListener("click", (e) => {
      //  let targ= e.target.parentNode.parentNode;
      // let index=targ.getAttribute("data-id")-1;
      // console.log(myData.products[1])
      // //  let detailsObj = {
      // //     id: products[index]
      // //     // name: data[index].title,
      // //     // price: data[index].price,
      // //     // imgSrc: 'https://i.dummyjson.com/data/products/1/1.jpg',
      // //     // quantity:1,
      // //     // Total:data.price
      // //   };
      
      // //   let details=[]
      // // details.push(detailsObj)
      // //   window.localStorage.setItem("details", JSON.stringify(details));
      // //  if (e.target.classList.contains("card")||e.target.classList.contains("img")) {
      // //     window.location.replace("assets/HTML/product-details.html");
      // //   }
      
      // })
         
        
       
     