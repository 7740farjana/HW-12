$(document).ready(function() {
  //slick slider
  $('.banner-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
    })
  
  //team slider
  $('.team-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
    
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
    
      },
    ]
  });
 //team-two-slider
 $('.text-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.slider-img',
});
$('.slider-img').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.text-slider',
  prevArrow: '.arrow-left',
  nextArrow: '.arrow-right',
  dots: false,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true,

})
});