$('.single-item').slick({
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 2,
            slidesToScroll: 2,
	      }
	    }
    ]
  });