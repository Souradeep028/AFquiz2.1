var swiper = new Swiper(".swiper-container.two", {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
  slidesPerView: "auto",
  centeredSlides: true,
  effect: "coverflow",
  loop: true,
  // coverflow: {
  //   rotate: 0,
  //   depth: 15,
  //   stretch: 100,
  //   modifier: 1.5,
  //   slideShadows: false,
  // },
});
