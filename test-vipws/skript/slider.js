$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        centerPadding: '60px',
        speed: 500,
        slidesToShow: 5,
        dotsClass: 'slick-dots',
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: false
                }
            }
            ]
    });
});
