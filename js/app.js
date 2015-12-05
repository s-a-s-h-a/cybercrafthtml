//Slider content services
$( document ).ready(function( $ ) {
    $( '#example5' ).sliderPro({
        width: 830,
        height: 500,
        autoplay: false,
        orientation: 'horizontal',
        slideDistance: 0,
        loop: false,
        fade: true,
        arrows: true,
        buttons: false,
        thumbnailsPosition: 'left',
        thumbnailPointer: true,
        thumbnailWidth: 350,
        thumbnailHeight: 71.8,
        breakpoints: {
          800: {
            thumbnailsPosition: 'top',
            thumbnailWidth: 350,
            thumbnailHeight: 71.8
          },
          500: {
            thumbnailsPosition: 'top',
            thumbnailWidth: 120,
            thumbnailHeight: 50
          }
        }
      });
  });





//Alignment unit .we_height Main page
    $(document).ready(function () {
$(function() {
    $('.we_height').matchHeight();
});
    });
//And Alignment unit  .we_height Main page


// Sidebar Navigation  Main page
    $(document).ready(function () {


        $('.scroll-container').onePageScroll({
            topElement: $('header'),
//            position: 'left',
//            background: 'rgba(50,255,100, 0.9)',
//            tooltip: false,
//            tooltipSelector: $('h3'),
//            emptyContent: true,
            sectionSelector: $('.content-part')
        });

        $('.setOff').click(function () {
            console.log('off');
            $('.scroll-container').onePageScrollDestroy({
              offsetAktiv: 0,
              topMargin: 0

            });
        })
    });
//And Sidebar Navigation  Main page













