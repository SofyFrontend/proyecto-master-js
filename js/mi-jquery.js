// cuando el documento este listo 
$(document).ready(function(){


// codigo para el slider copiado desde bxslider 
$(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: 1200,
      slideHeigth: 300,
    });
  });
// json para los post 

// selector de tema 
var styles = $("#tema");
$("#to-green").click(function(){
  tema.attr("href", "css/green.css");
});
$("#to-blue").click(function(){
  tema.attr("href", "css/blue.css");
});
$("#to-red").click(function(){
  tema.attr("href", "css/red.css");
});

//cierre del documente ready
})