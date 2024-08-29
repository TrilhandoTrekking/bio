$(function () {
  'use strict';

    // >>>>>> pre_loader
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  
  

    // >>>>>> Show modal1
    $('.js-show-modal1').on('click', function (e) {
      e.preventDefault();
      $('.js-modal1').addClass('show-modal1');
    });

    $('.js-hide-modal1').on('click', function () {
      $('.js-modal1').removeClass('show-modal1');
    });

    $('.js-addwish-b2').on('click', function (e) {
      e.preventDefault();
    });

    $('.js-addwish-b2').each(function () {
      var nameProduct = $(this).parent().parent().find('.js-name-b2').html();
      $(this).on('click', function () {
        swal(nameProduct, "is added to wishlist !", "success");

        $(this).addClass('js-addedwish-b2');
        $(this).off('click');
      });
    });

    $('.js-addwish-detail').each(function () {
      var nameProduct = $(this).parent().parent().parent().find('.js-name-detail').html();

      $(this).on('click', function () {
        swal(nameProduct, "is added to wishlist !", "success");

        $(this).addClass('js-addedwish-detail');
        $(this).off('click');
      });
    });

  // >>>>>> active section menu

  const sections = document.querySelectorAll('section , footer');
  const navLi = document.querySelectorAll('nav .container ul li');

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - (sectionHeight) / 3) {
        current = section.getAttribute('id');
      }
    })
    navLi.forEach(li => {
      li.classList.remove('m_active');
      if (li.classList.contains(current)) {
        li.classList.add('m_active');
      }
    })
  })
  // ---------------------------------------Slick slider start------------- 
  // banner
  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    fade: true,
    pauseOnHover: false,
  });

  // testimonial
  $('.txt-slide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // team
  $('.team-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [{
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // logo
  $('.logo-slide').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    nextArrow: '<i class="fas fa-chevron-right nxt"></i>',
    prevArrow: '<i class="fas fa-chevron-left prv"></i>',
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: 0,
    speed: 500,
    arrows: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]

  });
  // -----------------------------------------Slick slider end--------------

  // --------------------------------------------Venobox start--------------
  $('.venobox').venobox({
    spinner: 'cube-grid',
    spinColor: '#e23e38',
    arrowsColor: '#e23e38',
    bgcolor: 'rgba(226, 62, 56, 0.5);',
    border: '50px',
    overlayColor: 'rgba(53, 53, 53, 0.25);',
    closeColor: '#e23e38',
  });

  // footer 
  $('.footerpart').venobox({
    spinner: 'cube-grid',
    spinColor: '#e23e38',
    arrowsColor: '#e23e38',
    bgcolor: 'rgba(226, 62, 56, 0.5);',
    border: '50px',
    overlayColor: 'rgba(53, 53, 53, 0.25);',
    closeColor: '#e23e38',
  });
  // ----------------------------------------------Venobox end--------------





  // --------------------------------------------Menu Fix start-------------
  var navoff = $('.main-manu').offset().top;

  $(window).scroll(function () {

    var scrolling = $(this).scrollTop();

    if (scrolling > navoff) {
      $('.main-manu').addClass('menu-fix');
    } else {
      $('.main-manu').removeClass('menu-fix');
    }
  });
  //  -----------------top up Button----------------
  $('.btop').click(function () {
    $('html').animate({
      scrollTop: 0,
    }, 1000);
  });

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 600) {
      $('.btop').fadeIn();
    } else {
      $('.btop').fadeOut();
    }
  });


  // -------------------------------------------Counter Fix star-------
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });









});