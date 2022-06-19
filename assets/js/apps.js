

 $(document).ready(function(){
$(".header-item-right span").click(function(){
  $(".header-item-right").toggleClass(" hhhh");
    $(".header-bottom").toggleClass("open");


  });
});

//   $(document).ready(function(){
//   $(".header-item-right span").click(function(){
//     $(".header-bottom").toggleClass("open");

//    });
// });

 


$(".header-menu ul li ul").parent("li").addClass("m");
$('.header-menu ul li a').on('click', function(e) {
    var element = $(this).parent('li');
    if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp("swing");
    }
    else {
        element.addClass('open');
        element.children('ul').slideDown("swing");
        element.siblings('li').children('ul').slideUp("swing");
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp("swing");
    }
});




  $(document).ready(function(){
      $(".button-play").click(function () {
          $(".button-play").addClass("open");
            $(".button-stop").addClass("open");
      });
      
      $(".button-stop").click(function () {
          $(".button-stop").removeClass("open");
            $(".button-play").removeClass("open");
      });
  }); 

    


 
 
 
$(document).ready(function(){
    $('.my-news-ticker').AcmeTicker({
        type: 'vertical',
        autoplay: 2000,
        speed: 700,
        direction:'up',
        pauseOnFocus:true,
        pauseOnHover:true,

      });

      $('.hot-news-ticker').AcmeTicker({
        type: 'horizontal',
        autoplay: 2000,
        speed: 700,
        direction:'up',
        pauseOnFocus:true,
        pauseOnHover:true,

      });
});


   

//tab section


    function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Get the element with id="defaultOpen" and click on it
  
  document.getElementById("defaultOpen").click();


// simple bar

 



   









