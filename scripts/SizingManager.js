$(document).ready(function(){
    var sW = $(window).width();
    var sH = $(window).height();
 //  $("#hero").height(sH);
   // $("#hero").width(sW);
    
    $(window).resize(OnResize);
    OnResize();
    
    
    
});

function OnResize()
{
    $("#hero-pic").height($(window).height()* 23/100);
    $("#hero-pic").width($("#hero-pic").height());
    
    var t = (($(window).height()*(23/100))-($("#hero-pic").height()/3));
    
    $("#hero-pic").css('top', t.toString()+"px" );
    
    var l = (($(window).width()/2)-($("#hero-pic").innerWidth()/2));
    $("#hero-pic").css('left', l.toString()+"px" );
    
    
    var codingW = $("#hero-pic").width() *2.8;
    if(codingW > $(window).width())
        codingW = $(window).width();
    
   
    var codingX = (($(window).width()/2) - codingW/2 );
   // codingX += codingX * (2/10);
    
    var codingY = t + $("#hero-pic").height() +20;
    var codingH = ($("#fullscreen-hero").height() * 75/100)- codingY;
     if($(window).width()<600)
        {
            codingW=$(window).width() * 90/100;
            codingY = $(window).height()/2 -10;
            codingX = (($(window).width()/2) - codingW/2 );
        }
    else if($(window).width()<900)
        {
            codingW=$(window).width() * 50/100;
            codingY = $(window).height()/2 -10;
            codingX = (($(window).width()/2) - codingW/2 );
            $("#hero-pic").height($(window).height()* 30/100);
                        $("#hero-pic").width($("#hero-pic").height());

        }
    $(".coding").css('top', codingY.toString()+"px");
    $(".coding").css('left', codingX.toString()+"px");
    $(".coding").width(codingW);
    $(".coding").height(codingH);
    $(".coding").css('opacity', '1.0');
    $("#hero-pic").css('opacity', '1.0');
    
    scrollConsole();
    
    $(".flex-col").height($("#fullscreen-hero").height());
    
    
}