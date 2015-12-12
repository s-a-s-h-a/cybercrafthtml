//Slider content services
$( document ).ready(function( $ ) {
    $( '#example5' ).sliderPro({
        width: 830,
        height: 500,
        autoplay: true,
        orientation: 'horizontal',
        slideDistance: 0,
        loop: false,
        fade: true,
        arrows: false,
        buttons: false,
        thumbnailsPosition: 'left',
        thumbnailPointer: true,
        thumbnailWidth: 350,
        thumbnailHeight: 71.8,
        fadeArrows: false,
        breakpoints: {
          800: {
            thumbnailsPosition: 'top',
            thumbnailTouchSwipe: false,
            width: '50%',
            thumbnailWidth: '50%',
            arrows: true,
            loop: true,
            thumbnailHeight: 71
          }

        }
      });
  });

