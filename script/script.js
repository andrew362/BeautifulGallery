   $(document).ready(function () {




       $(document).on('scroll', function () {
           stop();
           console.log($(this).scrollTop());
           var wScroll = $(this).scrollTop();
           var particles = $('#particles-js');
            particles.css("transform", "translateY(-" + 0.1*wScroll + "px)");
       });

    
       	$(document).on('click', '.link', function(event){
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop:$($.attr(this, 'href')).offset().top
	    }, 800);
	});
       
   });



























//
//$(window).on('scroll', function() {
//    var wScroll = $("#gallery").scrollTop();
//    console.log(wScroll);
//    paralax();
//    if ($("#wrapper").scrollTop() > 100) {
//        $("nav").css("background-color", "rgba(255,255,255,0.8)");
//        $(".upButton").css("opacity", "1")
//    } else {
//        $("nav").css("background-color", "rgba(255,255,255,0.2)");
//        $(".upButton").css("opacity", "0")
//    }
//});
//
//function paralax() {
//    var wScroll = $("#wrapper").scrollTop();
//    console.log(wScroll);
//   $("#particles-js").css("transform", "translateY(" + 0.1*wScroll + "px)");
//}

//
//var section1 = document.getElementById('section1').offsetTop;
//var section2 = document.getElementById('section2').offsetTop;
//var section3 = document.getElementById('section3').offsetTop;
//var section4 = document.getElementById('section4').offsetTop;
//var wrapper = document.getElementById('wrapper');
//
//$(".scroll1").click(function(e){
//    e.preventDefault();
//    $("#wrapper").animate({
//        scrollTop: 0
//    }, 1000)
//})
//
//$(".scroll2").click(function(e){
//    e.preventDefault();
//    $("#wrapper").animate({
//        scrollTop: section2
//    }, 1000)
//})
//
//$(".scroll3").click(function(e){
//    e.preventDefault();
//    $("#wrapper").animate({
//        scrollTop: section3
//    }, 1000)
//})
//
//$(".scroll4").click(function(e){
//    e.preventDefault();
//    $("#wrapper").animate({
//        scrollTop: section4
//    }, 1000)
//})
//
//
//
//
//
//$(".upButton").click(function(e){
//    e.preventDefault();
//    $("#wrapper").animate({
//        scrollTop: 0
//    }, 1000)
//})
//

