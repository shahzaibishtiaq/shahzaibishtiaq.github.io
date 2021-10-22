$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
           $('.back-to-top').fadeIn('slow');
            $('.navbar-default').addClass('header-fixed');
        }else{
           $('.back-to-top').fadeOut('slow');
            $('.navbar-default').removeClass('header-fixed');
        }
    });
     $('.back-to-top').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },1500,'easeInOutExpo');
         return false;
    });
    
    new WOW().init();
});
$(document).ready(function(){
    $('#toggle-nav-right').click(function(){
        $('#div-response').stop().slideToggle();
    });
});
$(document).ready(function(){
  $("#owl-example").owlCarousel();
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});
