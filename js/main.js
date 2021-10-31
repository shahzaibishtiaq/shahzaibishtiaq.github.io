
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
    //  $('.back-to-top').click(function(){
    //     $('html,body').animate({
    //         scrollTop: 0
    //     },1500,'easeInOutExpo');
    //      return false;
    // });
});
