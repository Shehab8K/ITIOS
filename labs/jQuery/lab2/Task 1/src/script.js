$(function () {
      $("button").on("click",function(){
      console.log($("form.item input").val());
      $("#myMainContainer").append(
        "<div class='item'><p>"+$("form.item input").val()+"</p><i class='fa-solid fa-check fa-lg'></i><i class='fa-solid fa-trash fa-lg'></i></div>"  
      );
      $("#userInput").val('');     
    });


});
$(".fa-check").on("click",function(e){
  console.log($(e.target))
  $(e.target.parentElement).css({
    "background-color": "green",
    "color": "white",
    "text-decoration" : "line-through"
  });
});

// $("div.item .fa-check").on("click",function(e){
//   console.log($(e.target))
//   $(e.target.parentElement).css({
//     "background-color": "green",
//     "color": "white",
//     "text-decoration" : "line-through"
//   });
// });

$(".fa-trash").on("click",function(){
  $(this).parent().remove();
});

// $("div.item").on("click",".fa-trash",function(e){         
//   $(e.target.parentElement).remove()
// })


// Q1 : How to use delegation with all these sub elements + classes