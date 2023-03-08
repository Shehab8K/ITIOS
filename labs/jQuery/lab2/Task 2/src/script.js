
  $("#bugsBunny").draggable({revert:false})
  $("#bugsBunny img").on("mouseover",function(){
    $("#rabbit").effect("shake", {times: 1});
    console.log($(this).offset().top);
    if($(this).offset().top < 200 && $(this).offset().left < 200)
    {
      $("#bugsBunny").remove();
    }
  });