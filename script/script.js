 
    
$("#wrapper").scroll(function() {
    paralax();
    if ($("#wrapper").scrollTop() < 133) {
        
        $("nav").css("background-color", "rgba(255,255,255,0.2)");
        $(".upButton").css("opacity", "0")
    } else {
        
        $("nav").css("background-color", "rgba(255,255,255,0.8)");
        $(".upButton").css("opacity", "1")
    }
})

function paralax() {
    var wScroll = $("#wrapper").scrollTop();
    console.log(wScroll);
   $(".translateY").css("transform", "translateY(" + 0.1*wScroll + "px)");
}


var section1 = document.getElementById('section1').offsetTop;
var section2 = document.getElementById('section2').offsetTop;
//var section3 = document.getElementById('section3').offsetTop;
var section4 = document.getElementById('section4').offsetTop;
var wrapper = document.getElementById('wrapper');

$(".scroll1").click(function(e){
    e.preventDefault();
    $("#wrapper").animate({
        scrollTop: 0
    }, 1000)
})

$(".scroll2").click(function(e){
    e.preventDefault();
    $("#wrapper").animate({
        scrollTop: section2
    }, 1000)
})

$(".scroll3").click(function(e){
    e.preventDefault();
    $("#wrapper").animate({
        scrollTop: section3
    }, 1000)
})

$(".scroll4").click(function(e){
    e.preventDefault();
    $("#wrapper").animate({
        scrollTop: section4
    }, 1000)
})





$(".upButton").click(function(e){
    e.preventDefault();
    $("#wrapper").animate({
        scrollTop: 0
    }, 1000)
})









