
document.querySelector(".p3").onclick = function(){
    $(".cover").fadeOut(1000);
    $(".p5").fadeIn(5000);
    }

document.querySelector("#demo-bar-buttons").onclick = function(){
    $(".p5").fadeOut(500);
    $(".p6").fadeOut(500);
    $("#demo-bar-buttons").fadeOut(1000);
    $(".cover").fadeIn(5000);
    }
 


document.querySelector(".p4").onclick = function(){
    $(".cover").fadeOut(1000);
    $(".p6").fadeIn(5000);
    }   
     

$( ".read-more" ).click(function() {
    $( ".content" ).slideToggle( "fast" );
        var $this = $(this);
            $this.toggleClass("open");
    
            if ($this.hasClass("open")) {
                $this.html("Less");
            } else {
                $this.html("Read more");
            }
    });
    