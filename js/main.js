(function ($) {
  "use strict";

  /*-------------------------------------------------------------------------------
  Navbar 
  -------------------------------------------------------------------------------*/

  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll) {
          $(".header_area").addClass("navbar_fixed");
        } else {
          $(".header_area").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();

  function offcanvasActivator() {
    if ($(".bar_menu").length) {
      $(".bar_menu").on("click", function () {
        $("#menu").toggleClass("show-menu");
      });
      $(".close_icon").on("click", function () {
        $("#menu").removeClass("show-menu");
      });
    }
  }
  offcanvasActivator();

  $(".offcanfas_menu .dropdown").on("show.bs.dropdown", function (e) {
    $(this).find(".dropdown-menu").first().stop(true, true).slideDown(400);
  });
  $(".offcanfas_menu .dropdown").on("hide.bs.dropdown", function (e) {
    $(this).find(".dropdown-menu").first().stop(true, true).slideUp(500);
  });

  /*-------------------------------------------------------------------------------
  mCustomScrollbar js
  -------------------------------------------------------------------------------*/
  $(window).on("load", function () {
    if ($(".mega_menu_two .scroll").length) {
      $(".mega_menu_two .scroll").mCustomScrollbar({
        mouseWheelPixels: 50,
        scrollInertia: 0,
      });
    }
  });

  /*-------------------------------------------------------------------------------
  case_studies_slider js
  -------------------------------------------------------------------------------*/
  function caseStudies() {
    var CSlider = $(".case_studies_slider");
    if (CSlider.length) {
      CSlider.owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        autoplay: true,
        smartSpeed: 1000,
        responsiveClass: true,
        nav: false,
        dots: true,
        responsive: {
          0: {
            items: 1,
          },
          650: {
            items: 2,
          },
          776: {
            items: 3,
          },
          1199: {
            items: 3,
          },
        },
      });
    }
  }
  caseStudies();

  /*-------------------------------------------------------------------------------
  tooltip js
  -------------------------------------------------------------------------------*/
  if ($('[data-toggle="tooltip"]').length) {
    $('[data-toggle="tooltip"]').tooltip();
  }
  /*-------------------------------------------------------------------------------
  active dropdown
  -------------------------------------------------------------------------------*/
  function active_dropdown() {
    if ($(window).width() < 992) {
      $(".menu li.submenu > a").on("click", function (event) {
        event.preventDefault();
        $(this).parent().find("ul").first().toggle(700);
        $(this).parent().siblings().find("ul").hide(700);
      });
    }
  }
  active_dropdown();

  /*-------------------------------------------------------------------------------
  hamberger menu
  -------------------------------------------------------------------------------*/
  function hamberger_menu() {
    if ($(".burger_menu").length) {
      $(".burger_menu").on("click", function () {
        $(this).toggleClass("open");
        $("body").removeClass("menu-is-closed").addClass("menu-is-opened");
      });
      $(".close, .click-capture").on("click", function () {
        $("body").removeClass("menu-is-opened").addClass("menu-is-closed");
      });
    }
  }
  hamberger_menu();

  /*---------------navbar js ---------------*/
  $("#landing_page ul li a,.scrolls,.menu_top").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 75,
        },
        1000,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $("#landing_page ul .nav-item:not(.dropdown) .nav-link").on(
    "click",
    function () {
      $(".navbar-collapse").collapse("hide");
    }
  );

  function fAqactive() {
    $(".faq_accordian_two .card").on("click", function () {
      $(".faq_accordian_two .card").removeClass("active");
      $(this).addClass("active");
    });
  }
  fAqactive();
})(jQuery);
