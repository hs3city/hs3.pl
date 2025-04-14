$(document).ready(function () {
  'use strict';
  //Copyright Date
  // var newYear = document.getElementById("newYear");
  // newYear.innerHTML = new Date().getFullYear();

  // Scroll to top
  $("a[href='#top']").click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      'slow'
    );
    return false;
  });

  // Smooth scroll
  $('a.scroll-to').on('click', function (event) {
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(this.hash).offset().top - 50,
        },
        1000
      );
    event.preventDefault();
    if (screen.width < 992) {
      $('.navbar-toggler').click();
    }
  });

  // AOS initialize
  AOS.init({
    disable: 'mobile',
  });

  // Service Item Match Height
  $('.service-item').matchHeight({
    byRow: 0,
  });

  // .blog-content Match Height
  $('.blog-content').matchHeight({
    byRow: 0,
  });
  $('.story-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.quotes-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.clients-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  // Magnific Gallery
  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return (
          item.el.attr('title') +
          ' &middot; <a class="image-source-link" href="' +
          item.el.attr('data-source') +
          '" target="_blank">image source</a>'
        );
      },
    },
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find('img');
      },
    },
  });
});

// Add nav bg
$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('.main-nav').addClass('nav-bg');
  } else {
    $('.main-nav').removeClass('nav-bg');
  }
});

$(function () {
  const $mapDiv = $('#map');
  if ($mapDiv.length === 0) return;

  const lat = parseFloat($mapDiv.data('lat'));
  const lon = parseFloat($mapDiv.data('long'));
  const pinImage = $mapDiv.data('pin');
  const pinUrl = $mapDiv.data('url');

  const map = L.map('map').setView([lat, lon], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(map);

  const params = pinImage
    ? {
        icon: L.icon({
          iconUrl: pinImage,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        }),
      }
    : {};

  const marker = L.marker([lat, lon], params).addTo(map);

  if (pinUrl) {
    marker.on('click', function () {
      window.open(pinUrl, '_blank');
    });
  }
});
