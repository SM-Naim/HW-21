$(document).ready(function(){
  // 1st page start
// counter up
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// slick-slider
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
  // 1st page end
  // 2nd page start

  // 2nd page end
  // 3rd page start

  // 3rd page end
});
// wow-js
wow = new WOW(
{
boxClass:     'wow',      // default
animateClass: 'animated', // default
offset:       0,          // default
mobile:       true,       // default
live:         true        // default
}
)
wow.init();
// wow-js