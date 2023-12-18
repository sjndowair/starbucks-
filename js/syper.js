$(function(){
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000, // 5 seconds delay between slides
        disableOnInteraction: false, // Autoplay will not be disabled when interacting with the slides
    },
    // Add more options as needed
});
  });
  
    

