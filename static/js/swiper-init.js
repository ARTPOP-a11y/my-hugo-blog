document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".swiper-container").forEach(function (el) {
    const swiper = new Swiper(el, {
      effect: "fade",
      fadeEffect: {
          crossFade: true
        },
      loop: true,
      speed: 500,
      preloadImages: true,
      watchSlidesProgress: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });

    el.querySelectorAll(".clickable-img").forEach(img => {
      img.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (lightbox && lightboxImg) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
          lightbox.classList.add("active");
          swiper.autoplay.stop();
        }
      });
    });
  });

  if (lightbox) {
    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("active");
      document.querySelectorAll(".swiper-container").forEach(function (el) {
        const swiper = el.swiper;
        if (swiper) {
          swiper.autoplay.start();
        }
      });
    });
  }
});