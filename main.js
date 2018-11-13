$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop(); 
        if (scroll > 80) {
          $(".navbar").addClass("hidden");
        }
        else{
            $(".navbar").removeClass("hidden");
        }
    })
  })
