(function ($) {
	'use strict';
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
    $('.home-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 750,
        autoHeight: true,
        items: 1,
        navText: [
            "<i class='far fa-angle-left'></i>",
            "<i class='far fa-angle-right'></i>"
        ],
    });
    $(".home-slider").on("translate.owl.carousel", function(){
		$(".main-banner-content h1").removeClass("aos-init aos-animate").attr("data-aos", "fade-down");
		$(".main-banner-content p, .main-banner-content .btn-box").removeClass("aos-init aos-animate").attr("data-aos", "fade-up");
    });
    $(".home-slider").on("translated.owl.carousel", function(){
        $(".main-banner-content span").addClass("aos-init aos-animate").attr("data-aos", "fade-down");
        $(".main-banner-content h1, .main-banner-content p, .main-banner-content .btn-box").addClass("aos-init aos-animate").attr("data-aos", "fade-up");
    });
	jQuery(document).ready(function () {
		AOS.init({
				easing: 'ease-out-back',
				duration: 1000
		});
	});

// hamburger menu toggle bar
    $('document').ready(function () {
    var trigger = $('#hamburger'),
        isClosed = true;

    trigger.click(function () {
      burgerTime();
    });

    function burgerTime() {
      if (isClosed == true) {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }

  });


// button
  var btn = $('#button');

  $(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
  });

  btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
  });


  $(".site-header .menu-item-has-children .sub-menu").before("<i class='far fa-plus dropdown-icon'></i>");
  $('.site-header ul li .dropdown-icon').click(function() {
  if( $(this).hasClass('active')) {
     $('.site-header li.menu-item-has-children .dropdown-icon').removeClass("active");
      $('.site-header li.menu-item-has-children .sub-menu').slideUp();
  }else{
    $('.site-header li.menu-item-has-children .dropdown-icon').removeClass("active");
    $(this).addClass("active");
  jQuery('.site-header li.menu-item-has-children .sub-menu').slideUp();
    $(this).next().slideToggle();
  }
  });
  $('.navbar-toggler').click(function() {
     $('.site-header li.menu-item-has-children .dropdown-icon').removeClass("active");
      $('.site-header li.menu-item-has-children .sub-menu').slideUp();
  });

  $(document).ready(function () {
    $(document).on('click', '.cta', function () {
        $(this).toggleClass('active')
    })
});


/*----- product-category owlCarousel */
	$(".product-category").owlCarousel({
		loop: false,
		stagePadding: 10,
		margin: 20,
		nav: true,
		responsive: {
			0: {
				items: 2,
			},
			640: {
				items: 3,
			},
			960: {
				items: 4,
			},
			1200: {
				items: 4,
			},
		},
	});
	
/*----- product-category owlCarousel */
	$(".brand-category").owlCarousel({
		loop: false,
		stagePadding: 10,
		margin: 20,
		nav: true,
		responsive: {
			0: {
				items: 2,
			},
			640: {
				items: 4,
			},
			960: {
				items: 5,
			},
			1200: {
				items: 5,
			},
		},
	});
/*----- testimonial-sec owlCarousel */

	$(".testimonial-sec").owlCarousel({
	loop: false,
	stagePadding: 10,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1,
		},
		640: {
			items: 1,
		},
		960: {
			items: 1,
		},
		1200: {
			items: 1,
		},
	},
});

	function show_message(data){
	  var result = JSON.parse(data);
	  //console.log(result['message']);
	  if(result['success'] == '1'){
	    console.log(result['message']);
	    $("#flash_message").html('<div class="alert alert-success flash massagenewsuccess" ><a href="#" class="close" data-dismiss="alert" aria-label="close" style="margin-top: 1px;color: ##0c0c1b;">&times;</a><i class="fa fa-check facc" style="font-size:14px"></i>&nbsp;&nbsp;<strong>Success!</strong>&nbsp;&nbsp;'+result['message']+'</div>');
	  }
	  if(result['success'] == '0'){
	    $("#flash_message").html('<div class="alert alert-danger flash massagenewdanger"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="margin-top: 1px;">&times;</a><i class="fa fa-exclamation-triangle facc" style="font-size:14px"></i>&nbsp;&nbsp;<strong>Error!</strong>&nbsp;&nbsp;'+result['message']+'</div>');
	  }
	  if(result['success'] == '2'){
	    $("#flash_message").html('<div class="alert alert-info flash massagenewinfo"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="margin-top: 1px;color: #fff;">&times;</a><i class="fa fa-info-circle facc" style="font-size:14px"></i>&nbsp;&nbsp;<strong>Info!</strong>&nbsp;&nbsp;'+result['message']+'</div>');
	  }
	}

}(jQuery));
