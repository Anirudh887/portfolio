jQuery(document).ready(function($) {  
  // Owl Carousel                     
  // var owl = $('.carousel-default');
  // owl.owlCarousel({
  //   nav: true,
  //   dots: true,
  //   items: 1,
  //   loop: true,
  //   navText: ["&#xe605","&#xe606"],
  //   autoplay: true,
  //   autoplayTimeout: 5000
  // });

  // // Owl Carousel - Content Blocks  
  // var owl = $('.carousel-blocks');
  // owl.owlCarousel({
  //   nav: true,
  //   dots: false,
  //   items: 4,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     481: {
  //       items: 3
  //     },
  //     769: {
  //       items: 4
  //     }
  //   },
  //   loop: true,
  //   navText: ["&#xe605","&#xe606"],
  //   autoplay: true,
  //   autoplayTimeout: 5000
  // });
  
  // Sticky Nav Bar
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20){  
        $('.sticky').addClass("fixed");
    }
    else{
        $('.sticky').removeClass("fixed");
    }
  });
});


  //Active item
  var url = window.location.href;
  $('a').filter(function() {
    return this.href == url;
  }).parent('li').addClass('active-item');
  var url = window.location.href;
  $('.aside-nav a').filter(function() {
    return this.href == url;
  }).parent('li').parent('ul').addClass('active-aside-item');
  var url = window.location.href;
  $('.aside-nav a').filter(function() {
    return this.href == url;
  }).parent('li').parent('ul').parent('li').parent('ul').addClass('active-aside-item');
  var url = window.location.href;
  $('.aside-nav a').filter(function() {
    return this.href == url;
  }).parent('li').parent('ul').parent('li').parent('ul').parent('li').parent('ul').addClass('active-aside-item');


  $('.aside-nav-text').each(function(index, element) {
    $(element).click(function() { 
      $('.aside-nav > ul').toggleClass('show-menu', 'fast');
    });
  });
  //Mobile aside navigation  
  $('.nav-text').click(function() { 
    $('.top-nav > ul').toggleClass('show-menu', 'fast');
  }); 