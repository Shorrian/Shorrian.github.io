$(document).ready(function(){
    $("body").css("display", "none");
    $("body").fadeIn(1000);
});
$('#background-image').css({
    'width': $(window).width(),
    'height': $(window).height()
});
$('#wai-banner').css({
    'width': $(window).width(),
    'height': $(window).height()
});
$('#banner-text').css({
    'padding-top': $(window).outerHeight()/2
});

$('.header-item').click(function(){
    var newPage;
    if($(this).text().toLowerCase() == "Harrison Ding".toLowerCase()){
        newPage= window.location.protocol+"//"+window.location.host+"/";
    }
    else if($(this).text().toLowerCase() == "projects".toLowerCase()){
        newPage = window.location.protocol+"//"+window.location.host+"/"+"projects-index"+"/";
    }
    else {
        newPage= window.location.protocol + "//" + window.location.host + "/" + $(this).text().toLowerCase() + "/";
    }
    $('body').fadeOut(500, redirectPage);
    function redirectPage(){
        window.location=newPage;
    }
});
