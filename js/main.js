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
  var t1 =document.getElementsByClassName('top-layer');
  var t2 =document.getElementsByClassName('top-layer--2');
  var t3 =document.getElementsByClassName('top-layer--3');
  var t4 =document.getElementsByClassName('top-layer--4');
  var t5 =document.getElementsByClassName('top-layer--5');

  t1[0].hidden = false;
  t2[0].hidden = false;
  t3[0].hidden = false;
  t4[0].hidden = false;
  t5[0].hidden = false;
  var layerClass = "." + "top"+ "-layer";
  var layers = document.querySelectorAll(layerClass);
  for (const layer of layers) {
    layer.classList.toggle("active");

  }
  var port = document.getElementById('portfolio');
  port.style.display="none";

 


  setTimeout(function(){ 
   
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
  }, 1000);
  setTimeout(function(){ 
    t1[0].hidden = true;
    t2[0].hidden = true;
    t3[0].hidden = true;
    t4[0].hidden = true;
    t5[0].hidden = true;
  }, 1600);
}

function showAllCaseStudy(){
  var t1 =document.getElementsByClassName('top-layer');
  var t2 =document.getElementsByClassName('top-layer--2');
  var t3 =document.getElementsByClassName('top-layer--3');
  var t4 =document.getElementsByClassName('top-layer--4');
  var t5 =document.getElementsByClassName('top-layer--5');

  t1[0].hidden = false;
  t2[0].hidden = false;
  t3[0].hidden = false;
  t4[0].hidden = false;
  t5[0].hidden = false;
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


function filters(cat){
  if(cat=="All"){
    document.getElementById('aq').hidden = false;
    document.getElementById('hm').hidden = false;
    document.getElementById('pj').hidden = false;
    document.getElementById('threed').hidden = false;
    document.getElementById('media').hidden = false;
    document.getElementById('unity').hidden = false;
  }
  else if( cat=="Web"){
    document.getElementById('aq').hidden = false;
    document.getElementById('hm').hidden = false;
    document.getElementById('pj').hidden = false;
    document.getElementById('threed').hidden = true;
    document.getElementById('media').hidden = true;
    document.getElementById('unity').hidden = true;
  }
  else if( cat=="3D"){
    document.getElementById('aq').hidden = true;
    document.getElementById('hm').hidden = true;
    document.getElementById('pj').hidden = true;
    document.getElementById('threed').hidden = false;
    document.getElementById('media').hidden = true;
    document.getElementById('unity').hidden = false;
  }
  else if( cat=="Media"){
    document.getElementById('aq').hidden = true;
    document.getElementById('hm').hidden = true;
    document.getElementById('pj').hidden = true;
    document.getElementById('threed').hidden = true;
    document.getElementById('media').hidden = false;
    document.getElementById('unity').hidden = true;
  }
  else if( cat=="Unity"){
    document.getElementById('aq').hidden = true;
    document.getElementById('hm').hidden = true;
    document.getElementById('pj').hidden = true;
    document.getElementById('threed').hidden = true;
    document.getElementById('media').hidden = true;
    document.getElementById('unity').hidden = false;
  }
}