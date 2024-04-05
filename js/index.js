$(document).ready(function(){
    console.log('page load ready');
    function initializeSlider() {
      jQuery('.slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000, // Adjust autoplay speed as needed
          dots: true, // Show navigation dots
          responsive: [
              {
                  breakpoint: 991,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: true,
                      autoplaySpeed: 2000, // Adjust autoplay speed as needed
                      dots: true, // Show navigation dots
                  }
              }
          ]
      });
  }
  function destroySlider() {
      jQuery('.slider').slick('unslick');
  }

  // Initialize or destroy slick slider based on window width on page load
  var windowWidth = $(window).width();
  if (windowWidth < 991) {
      initializeSlider();
  } else {
    
  }

  // Check window width on resize
  jQuery(window).resize(function(){
      var windowWidth = $(window).width();
      if (windowWidth < 991) {
          initializeSlider();
      } else {
          
      }
  });

});