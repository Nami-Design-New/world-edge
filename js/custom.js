$(document).ready(function () {
  // fav icon
  function setFavicon() {
    const favicon = document.querySelector('link[rel="icon"]');
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const faviconName = isDarkMode ? "img/favWhite.svg" : "img/fav.svg";
    favicon.href = faviconName;
  }
  setFavicon();

  // // nav menu
  // $("header .menu").click(function () {
  //   $(this).toggleClass("active");
  //   $("header .links").toggleClass("active");
  // });

  // nav menu
  $(".navBtn").click(function () {
    $(this).toggleClass("active");
    $(".navMenu").toggleClass("active");
  });
  // nav menu
  $(".more .linksBtn").click(function () {
    var moreContainer = $(this).parents(".more");
    moreContainer.find(".linksBtn").toggleClass("show");
    moreContainer.find(".linksMenu").toggleClass("show");
  });

  // hide menu when clicking outside
  $(document).click(function (event) {
    var allMoreContainers = $(".more");
    allMoreContainers.each(function () {
      if (!$(event.target).closest(this).length) {
        $(this).find(".linksBtn").removeClass("show");
        $(this).find(".linksMenu").removeClass("show");
      }
    });
  });
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if (appScroll >= 1) {
      $(".pageHeader").addClass("headerAnimate");
    } else {
      $(".pageHeader").removeClass("headerAnimate");
    }
  });

  $(
    " .blogs .blog .description , .mainSection .videoSlider .videoSliderContainer .swiper-slide .info .hint "
  ).each(function () {
    var text = $(this).text();
    if (text.length > 140) {
      var truncatedText =
        $.trim(text).substring(0, 140).split(" ").slice(0, -1).join(" ") +
        "...";
      $(this).text(truncatedText);
    }
  });
  $(" .blogs .blog .title  , .blogDetails .Moreblogs .blog .description").each(
    function () {
      var text = $(this).text();
      if (text.length > 45) {
        var truncatedText =
          $.trim(text).substring(0, 45).split(" ").slice(0, -1).join(" ") +
          "...";
        $(this).text(truncatedText);
      }
    }
  );
  $(" .production .inner .world .data p").each(function () {
    var text = $(this).text();
    if (text.length > 300) {
      var truncatedText =
        $.trim(text).substring(0, 300).split(" ").slice(0, -1).join(" ") +
        "...";
      $(this).text(truncatedText);
    }
  });

  //videoSlider
  var videoSlider = new Swiper(".videoSliderContainer", {
    spaceBetween: 0,
    // loop: true,
    // effect: "fade",
    speed: 500,
    // autoplay: {
    //   delay: 8000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".videoSliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".videoSliderNext",
      prevEl: ".videoSliderPrev",
    },
  });

  //products Slider
  var blogSlider = new Swiper(".blogSlider", {
    pagination: {
      el: ".blogPagination",
      clickable: true,
    },

    // centeredSlides: true,
    // loop: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
  //partnersSlider Slider
  var partnersSlider = new Swiper(".partnersSlider", {
    // centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,
    speed: 1000,
    pagination: {
      el: ".partnersPagination",
      clickable: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  });
});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".preloader").delay(1000).fadeOut(300);
  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 100);
    });
  });
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    // easing: "linear",
    once: true,
  });
  // lozad
  const observer = lozad(".lazy", {
    loaded: function (el) {
      el.parentNode.classList.add("loaded");
    },
  });
  observer.observe();
  // parallax
  var parallaxImage = document.getElementsByClassName("parallax");
  new simpleParallax(parallaxImage, {
    delay: 1,
    transition: "cubic-bezier(0,0,0,1)",
  });
  // tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  // counter up
  const counterUp = window.counterUp.default;
  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el, {
          duration: 3000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };
  const IO = new IntersectionObserver(callback, { threshold: 1 });
  const elements = document.querySelectorAll(".counterUp");
  elements.forEach((el) => IO.observe(el));
});

// particles
particlesJS("particles-js", {
  particles: {
    number: { value: 160, density: { enable: true, value_area: 800 } },
    color: { value: "#777777" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
