$(document).ready(function(){
    /*
    we're finding the nav element and hiding it here
    */
    $('nav').hide();

    //set up our click function
    $('.menu-button').click(function(){
        $('nav').slideToggle();
    });
});