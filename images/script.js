$(document).ready(function(){
    
    $('.carousel').carousel();

    $('.carousel').hover(function(){
        $(this).carousel('pause');
    }, function(){
        $(this).carousel('cycle');
    });
});
