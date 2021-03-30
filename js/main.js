 // Sticky Nav Bar
 $(window).scroll(function() {
  if ($(this).scrollTop() > 20){  
      $('.sticky').addClass("fixed");
  }
  else{
      $('.sticky').removeClass("fixed");
  }
});

var app = document.getElementById('designation');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Full-Stack Developer')
  .pauseFor(1000)
  .deleteChars(20)
  .typeString('Designer')
  .pauseFor(1000)
  .deleteChars(20)
  .typeString('Problem Solver')
  .pauseFor(1000)
  .deleteChars(20)
  .start();




 function showCaseStudy(id){
  var port = document.getElementById('portfolio');
  port.style.display="none";
  var p_btn=document.getElementsByClassName('portfolio_back');
  p_btn[0].style.display = "block";
}

function showAllCaseStudy(){
  var port = document.getElementById('portfolio');
  port.style.display="block";
  var p_btn=document.getElementsByClassName('portfolio_back');
  p_btn[0].style.display = "none";
}