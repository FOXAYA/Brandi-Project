
//owl carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  nav: false,
  slideBy: 4,
  margin: 15,
  scrollPerPage: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    }
  }
})
jQuery(".view-id-frontpage .view-content").owlCarousel({
  items: 2,
  itemsDesktop: [1000, 2], // 2 items between 1000px and 901px
  itemsDesktopSmall: [900, 2], // betweem 900px and 601px
  itemsTablet: [700, 1], // 2 items between 600 and 480
  itemsMobile: [479, 1], // 1 item between 479 and 0
  navigation: true,
  lazyLoad: true,
  pagination: false,
  scrollPerPage: true
});

jQuery(".view-id-frontpage .view-content").owlCarousel({
  items: 2,
  itemsDesktop: [1000, 2], // 2 items between 1000px and 901px
  itemsDesktopSmall: [900, 2], // betweem 900px and 601px
  itemsTablet: [700, 1], // 2 items between 600 and 480
  itemsMobile: [479, 1], // 1 item between 479 and 0
  navigation: true,
  lazyLoad: true,
  pagination: false,
  scrollPerPage: true
});
new WOW().init();

$('.reset').click(function () {
  new WOW().init();
})
// Toggle the .pa-fixed-header class when the user
// scroll 100px

window.onscroll = () => { scrollNavbar() };

scrollNavbar = () => {
  // Target elements
  const navBar = document.getElementById("navBar");
  const links = document.querySelectorAll("#navBar a");

  if (document.documentElement.scrollTop > 100) {
    navBar.classList.add("pa-fixed-header");

    // Change the color of links on scroll
    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      element.classList.add('text-black');
    }

  } else {
    navBar.classList.remove("pa-fixed-header");

    // Change the color of links back to default
    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      element.classList.remove('text-black');
    }
  }
}
//
(function ($) {
  "use strict";
  var PUS = {};
  /*==========================================
          :: mixitup
  ==========================================*/
  PUS.mixitup = function () {
    var mixer = mixitup('.portfolio-plugin');
  };

  $(document).ready(function () {
    PUS.mixitup() // mixitup
  });
})(jQuery);
//counter code
$('.count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});
