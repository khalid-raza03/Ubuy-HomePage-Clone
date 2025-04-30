// scroll to top button
// Get the button
let mybutton = document.getElementById("ubuyScrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Function for onscroll searchbar
window.onscroll = function () {
  if (window.scrollY > 500) {
    document.getElementById("onScrollSearchBar").style.visibility = "visible";
    console.log("i am visible");
  } else {
    document.getElementById("onScrollSearchBar").style.visibility = "hidden";
    console.log("i am hidden");
  }
};

// Swiper slider of brand quiality section
let swiper;

function initializeSwiper() {
  if (window.innerWidth < 1400 && !swiper) {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4, // Larger screens (tablets, etc.)
        },

        768: {
          slidesPerView: 3, // Medium screens (tablets, etc.)
        },

        360: {
          slidesPerView: 2, // small screens (tablets, etc.)
        },

        320: {
          slidesPerView: 1, // Smaller screens (mobile)
        },
      },
    });
  } else if (window.innerWidth >= 1400 && swiper) {
    swiper.destroy(true, true); // Destroy Swiper instance above 1400px
    swiper = null;
  }
}

window.addEventListener("resize", initializeSwiper);
initializeSwiper();

// for country slider
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 7,
  spaceBetween: 30,
  loop: true, // Enables looping to avoid empty space
  loopFillGroupWithBlank: false,
  breakpoints: {
    1400: {
      slidesPerView: 7,
    },
    1200: {
      slidesPerView: 5,
    },

    768: {
      slidesPerView: 5,
    },
    568: {
      slidesPerView: 4,
    },
    320: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 1500, // 1.5 seconds
    disableOnInteraction: false, // Keep autoplay active even after user interaction
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// International shop slider

swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1400: {
      slidesPerView: 6, // Larger screens (tablets, etc.)
    },

    1200: {
      slidesPerView: 5, // Large screens (tablets, etc.)
    },

    992: {
      slidesPerView: 4, // Medium screens (tablets, etc.)
    },
    768: {
      slidesPerView: 3, // Small screens (mobile)
    },
    320: {
      slidesPerView: 2, // Smaller screens (mobile)
      spaceBetween: 20,
    },
  },
});

window.addEventListener("resize", initializeSwiper);
initializeSwiper();

//Header slider
swiperHead = new Swiper(".mySwiperHead", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1400: {
      slidesPerView: 4, // Larger screens (tablets, etc.)
    },

    992: {
      slidesPerView: 3, // Medium screens (tablets, etc.)
    },
    576: {
      slidesPerView: 2, // Small screens (mobile)
    },
    320: {
      slidesPerView: 1, // Smaller screens (mobile)
    },
  },
});

window.addEventListener("resize", initializeSwiper);
initializeSwiper();

//slider for premium brands
var swiper4 = new Swiper(".mySwiper4", {
  navigation: {
    nextEl: ".mySwiper4 .swiper-button-next",
    prevEl: ".mySwiper4 .swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1, 
  spaceBetween: 0,
  loop: true,
});

// slider for top category and hottest brand

swiperCB = new Swiper(".mySwiperCB", {
  slidesPerView: 7,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1400: {
      slidesPerView: 7, // xxl screens
    },
    1200: {
      slidesPerView: 6, // xl screens
    },

    992: {
      slidesPerView: 4, // lg screens
    },
    768: {
      slidesPerView: 3, // Smaller screens
    },
    320: {
      slidesPerView: 2, // Smaller screens
    },
  },
});

window.addEventListener("resize", initializeSwiper);
initializeSwiper();

//swiper for xx tentaction and yoga category

var swiperInstances = [];

function initializeSwipers() {
  // Destroy existing instances on resize
  swiperInstances.forEach(function (swiper) {
    swiper.destroy(true, true);
  });
  swiperInstances = [];

  if (window.innerWidth < 1500) {
    document.querySelectorAll(".mySwiper5").forEach(function (swiperEl) {
      var swiper = new Swiper(swiperEl, {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        pagination: { el: ".swiper-pagination", clickable: true },
        autoplay: { delay: 3000, disableOnInteraction: false },
        breakpoints: {
          1200: { slidesPerView: 2 },
          480: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        },
      });
      swiperInstances.push(swiper);
    });
  }
}

window.addEventListener("resize", initializeSwipers);
initializeSwipers();

// Energy drink section swiper

var swiper6 = new Swiper(".mySwiper6", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true, // Enables looping to avoid empty space
  loopFillGroupWithBlank: false,

  breakpoints: {
    1200: {
      slidesPerView: 4, // Medium screens (tablets, etc.)
    },

    768: {
      slidesPerView: 3, // Medium screens (tablets, etc.)
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 2, // Smaller screens (mobile)
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 1500, // 1.5 seconds
    disableOnInteraction: false, // Keep autoplay active even after user interaction
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//swiper for featured Section
swiperFeatured = new Swiper(".mySwiper-featured", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1600: {
      slidesPerView: 6, // xxxl screens
    },
    1400: {
      slidesPerView: 5, // xxl screens
    },
    1365: {
      slidesPerView: 4, // xxl screens
    },

    768: {
      slidesPerView: 3, // Medium screens
    },
    320: {
      slidesPerView: 2, // Smaller screens
    },
  },
});

window.addEventListener("resize", initializeSwiper);
initializeSwiper();

// Swiper for review section

var swiper7 = new Swiper(".mySwiper7", {
  navigation: {
    nextEl: ".mySwiper7 .swiper-button-next",
    prevEl: ".mySwiper7 .swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false, // Keep autoplay active even after user interaction
  },
  slidesPerView: 1, // Show only one slide at a time
  spaceBetween: 0,
  loop: true,
});


