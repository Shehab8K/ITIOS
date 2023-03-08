let running = true;
let myArr = [
    "images/img-1.png",
    "images/img-2.png",
    "images/img-3.png",
    "images/img-4.png",
    "images/img-5.png",
    "images/img-6.png"
];
let i = 0;
let myTarget = $("#myCaro");

let interv = setInterval(function(){
    $("#myCaro").fadeOut(0,()=>{
        myTarget.removeAttr()
        myTarget.attr({"alt": "img", "id" : "myCaro", "src" : myArr[i]})
    });
    $("#myCaro").fadeIn(0);
    i++;
    if(i> 5){ i = 0 }
}, 1000);

$("#stop").on("click",function(){
    clearInterval(interv);
});


$(".myimg").on("load",function(){
    $("p").slideUp(0)
})

$(".myimg").on("mouseover",function(){
    $(this).siblings("p").slideDown(2000)
    // $("p").slideUp(2000)
})

$(".myimg").on("mouseout",function(){
    $("p").slideUp(2000)
})



// $("*").on("click",function(e){
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.pageX);
//     console.log(e.pageY);
//     e.stopPropagation()
// })
// alert("jquery working!")
// & selectors
// $("h2").css("border","3px solid red");
// $("header nav li:odd").css(borderBottom,"2px solid blue");
// // $("img[alt=map]").css("border","3px solid blue").css("opacity","0.1")
// $("img[alt=map]").css({
// "border-bottom":"2px solid red",
// opacity:0.1
// });

//& jquery and dom 
//? next , prev , parent , children , find , closest 
// $("#contact-methods").next().css({border:"5px solid green"})
// $("#contact-methods").prev().css({border:"5px solid red"})
// $(".banner-title").parent().css({border:"3px solid blue"})
// $("#social-nav").children().css({border:"3px solid orange"})
// $("#contact").find(".facebook").css({border:"6px solid red"})
// $("#social-nav").closest(".wrapper").css({border:"10px solid yellow"})

//& adding content 
var tweet = "<div> jquery course </div>";
// $("#tweet").append(tweet)
// $("#tweet").prepend(tweet)
// $("#tweet").before(tweet)
// $("#tweet").after(tweet)

//& remove content
// $("h2").empty()
// $("h2").remove()

// & changing attr
// $("#contact img").removeAttr()
// $("#contact img").attr({"alt":"location","data":"kkk"})

//& events
// $("#contact img").click(function(e){  //! deprecated
//     alert("hello")
//     console.log(e)
// })

//? off  // once
// $("*").on("click",function(e){
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.pageX);
//     console.log(e.pageY);
//     e.stopPropagation()
// })

// & wrap and unwrap elements
// $("section").wrap("<div>")
// $("section").unwrap()
// $("section").wrapAll("<div>")

// var flag = true;
// var wrapper = '<div class="wrapper"></div>';
// $(".button").on("click",function(){
//     if(flag){
//         $("section").unwrap();
//         flag = false;
//         $(".button").text("wrap")
//     }else{
//         $("section").wrapAll(wrapper)
//         flag = true;
//         $(".button").text("unwrap")

//     }
// })

//& working with classes 
// $("header .wrapper").removeClass("wrapper")
// $("header>div").addClass("wrapper")
// $("#lead-banner a").on("click",function(){
//     $("#points-of-sale").toggleClass("red")
//     return false;
// });

//& jquery animation 
// $("h2").on("click",function(){
//     $(this).animate({width:"500px",height:"100px"}
//     ,1000,"linear",function(){
//         alert("animation done")
//     })
// })

//& fading
// $("h2").on("click",function(){
//     // $(this).fadeOut(2000).fadeIn(2000)
//     // $(this).fadeTo(2000,0.2).fadeTo(2000,0.5)
//     $(this).hide(2000).show(2000) //? toggle()
// })

//& sliding
// $(".slide-up").on("click",function(){
//     $("#lead-banner").slideUp(2000)
// })
// $(".slide-down").on("click",function(){
//     $("#lead-banner").slideDown(2000)
// })
// $(".slide-toggle").on("click",function(){
//     $("#lead-banner").slideToggle(2000)
// })

// console.log($("section"))

