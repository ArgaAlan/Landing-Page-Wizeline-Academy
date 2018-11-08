$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        console.log("HELLO")
        if (scroll > 300) {
          $(".navbar").css("background" , "blue");
        }
        else{
            $(".navbar").css("background" , "#333");  	
        }
    })
  })