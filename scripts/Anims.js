var t=-1;
var i=0;
var doneTyping=false;
var typer;
var cursor;
var container= null;
var texts = [];
var execSpeed=1.5;

$(document).ready(function(){
typer = $("#typewriter");
cursor = $(".flicker");
beginTyping();
    
   $("#fast-btn").click(function(){
    execSpeed = 3;   
       
   });
    
});


texts[0] = ">Name()";
texts[1] = "Mahmoud Ibrahim / (Mody)";
texts[2] = ">Location()";
texts[3] = "Ottawa, ON";
texts[4] = ">Interests()";
texts[5] = "   -Web Development";
texts[6] = "   -Game Development";
texts[7] = "   -Other Things";
texts[8] = "Learn More?(Y/N)";
texts[9] = ">Y";
texts[10] = "Now Loading$";
texts[11] = "*Portofolio Loaded";


function scrollConsole()
{
    if(cursor != null)
        {
    if(container==null)
    container = $(".coding").first();

    container.animate({
    scrollTop: cursor.offset().top - container.offset().top + container.scrollTop()
});
        }
}

function beginTyping()
{
    console.log("test");
    t = t+1;
    i=0;
    
    updateTyping(); 
    scrollConsole();

}

var dotLoading;
var loadingString;
var originalString;
function updateLoadingTyping (_count)
{
    if(_count>14)
    {
        
        endTyping();
    }
    else
    {
    if(_count==0)
        {
            dotLoading=".";
            loadingString =texts[t];
             loadingString =  loadingString.slice(0, loadingString.length-1);
            originalString = typer.text();
        }
    else
        {
            dotLoading += ".";
            if(dotLoading.length>3)
                dotLoading ='.';
            
            
            typer.text(originalString+loadingString+dotLoading);
          
        }
        window.setTimeout(function(){updateLoadingTyping (_count+1);}, 300/execSpeed);
    }
    
}
function updateTyping()
{
    if(i>= texts[t].length)
        endTyping();
    else
        {
            var c = texts[t].charAt(i); 
            
            if(i==0 && c !='>')
            {
                if(!cursor.hasClass("flicker"))
                cursor.addClass("flicker");
                c=texts[t]
                if(c.endsWith('$'))
                {
                    updateLoadingTyping(0);
                }
                else
                {
                    typer.text(typer.text()+c);
                    endTyping();
                }
            }
            else
            {
            if(cursor.hasClass("flicker"))
            cursor.removeClass("flicker");
            typer.text(typer.text()+c);
            i++;
            window.setTimeout(updateTyping, Math.floor((Math.random() * 150/execSpeed) + 50/execSpeed));
            }
        }
}

function endTyping()
{
   
    if(!cursor.hasClass("flicker"))
    cursor.addClass("flicker");
    if(t>= texts.length-1)
     {
        
         doneTypingEvent();
     }
    else
        {
            var c = document.createElement("div");
            c.classList.add("clear");
            $(c).insertBefore(cursor);
            
            var typ =document.createElement("p");
            typer = $(typ).insertBefore(cursor);
            var nC = texts[t+1].charAt(0)
            if(nC =="*")
                {
                    texts[t+1] = texts[t+1].slice(1, texts[t+1].length);
                    typer.addClass("succ");
                }
            else if(nC !='>')
                typer.addClass("resp");
            
            window.setTimeout(beginTyping, Math.floor((Math.random() * 900/execSpeed) + 400/execSpeed));
        }
    
}

function doneTypingEvent()
{
    
    var c = document.createElement("div");
            c.classList.add("clear");
            $(c).insertBefore(cursor);
   
            $(c).insertBefore(cursor);
     scrollConsole();
    
    $("#fast-btn").hide();
    $(".flex-container").animate({
       opacity: '1.0'
    });
    
     window.setTimeout(function(){
         var _img = document.createElement("img");
         
         _img.setAttribute("src", "img/arrow2.png");
         _img.classList.add("go-arrow");
        
         var _a = document.createElement("a");
         _a.setAttribute("href", "#");
         
         _a.appendChild(_img);
         $(_a).insertAfter($("#after-cons"));
         
         $(".flicker").remove();
         AnimateArrow(1);
         $(_a).click(function(){
             $('html, body').animate({
             scrollTop: $("#skills").offset().top
            }, 500);
         });
         ArrowCycleEndCheck();
          }, 1000);
    
    
         
    
}

function AnimateArrow(dir)
{
    if($(".go-arrow").length)
        {
    $(".go-arrow").animate({
        top: $(".go-arrow").offset().top + (70 * dir)
    }, 
    {
        easing: 'swing',
        duration: 800,
        complete: function(){
            AnimateArrow(dir * -1);
        }
        
        
    } );
        }
         
    
}
var arrowcount=0;
function ArrowCycleEndCheck()
{
    arrowcount +=1;
    
    var elm = $("#hero-pic");
    var picBottom =elm.offset().top + elm.outerHeight();
    var winTop = $(window).scrollTop();
    if(winTop > picBottom)
        {
            
             $(".go-arrow").remove();
        }
    else
        {
            if(arrowcount <30)
             window.setTimeout(ArrowCycleEndCheck, 500);
            else
                $(".go-arrow").remove();
        }
}
    
   
    
