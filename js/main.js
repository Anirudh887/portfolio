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
  var casestudy;
  if(id==1)
     casestudy=document.getElementById('aone');
  else if(id==2)
     casestudy=document.getElementById('HMClause');
  else if(id==3)
     casestudy=document.getElementById('pj');
  else if(id==4)
     casestudy=document.getElementById('threed');
  else if(id==5)
     casestudy=document.getElementById('ae');

 casestudy.style.display="block";
  

}

function showAllCaseStudy(){
  var port = document.getElementById('portfolio');
  port.style.display="block";
  var p_btn=document.getElementsByClassName('portfolio_back');
  p_btn[0].style.display = "none";
  document.getElementById('aone').style.display="none";
  document.getElementById('HMClause').style.display="none";
  document.getElementById('pj').style.display="none";
  document.getElementById('threed').style.display="none";
  document.getElementById('ae').style.display="none";
}

function collapse() {
  var x = document.getElementsByClassName("collapse");
  var y = document.getElementsByClassName("filterplus");
  var z = document.getElementsByClassName("filterminus");

  if (x[0].style.display === "none") {
    x[0].style.display = "block";
    y[0].style.display = "none";
    z[0].style.display = "block";
  } else {
    x[0].style.display = "none";
    y[0].style.display = "block";
    z[0].style.display = "none";
  }
}
function collapse1() {
  var x = document.getElementsByClassName("collapse1");
  var y = document.getElementsByClassName("filterplus1");
  var z = document.getElementsByClassName("filterminus1");

  if (x[0].style.display === "none") {
    x[0].style.display = "block";
    y[0].style.display = "none";
    z[0].style.display = "block";
  } else {
    x[0].style.display = "none";
    y[0].style.display = "block";
    z[0].style.display = "none";
  }
}

function collapse2() {
  var x = document.getElementsByClassName("collapse2");
  var y = document.getElementsByClassName("filterplus2");
  var z = document.getElementsByClassName("filterminus2");

  if (x[0].style.display === "none") {
    x[0].style.display = "block";
    y[0].style.display = "none";
    z[0].style.display = "block";
  } else {
    x[0].style.display = "none";
    y[0].style.display = "block";
    z[0].style.display = "none";
  }
}