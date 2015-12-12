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
          992: {
            thumbnailsPosition: 'top',
            thumbnailWidth: 830,
            arrows: true,
            thumbnailHeight: 71.8
          },
          800: {
            thumbnailsPosition: 'top',
            thumbnailWidth: 800,
            arrows: true,
            thumbnailHeight: 71.8
          },
          700: {
            thumbnailsPosition: 'top',
            thumbnailWidth: 700,
            arrows: true,
            thumbnailHeight: 71.8
          },
          600: {
            thumbnailsPosition: 'top',
            thumbnailWidth: 550,
            arrows: true,
            thumbnailHeight: 71.8
          },
          500: {
            thumbnailsPosition: 'top',
            thumbnailWidth: 450,
            arrows: true,
            thumbnailHeight: 50
          },
          400: {
            thumbnailsPosition: 'top',
            arrows: true,
            thumbnailHeight: 71.8,
            thumbnailWidth: 360
          },
          300: {
            thumbnailsPosition: 'top',
            arrows: true,
            thumbnailHeight: 71.8,
            thumbnailWidth: 300
          },
          200: {
            thumbnailsPosition: 'top',
            arrows: true,
            thumbnailHeight: 71.8,
            thumbnailWidth: 200
          }
        }
      });
  });

  //Alignment unit .we_height Main page
    $(document).ready(function () {
$(function() {
    $('.weheight').matchHeight();
});
    });
//And Alignment unit  .we_height Main page


