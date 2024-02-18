let slides = document.getElementsByClassName('slides')

function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[n].style.display = "block";  
}
document.getElementById('btn1').addEventListener('click', function() {
    showSlide(0);
});
document.getElementById('btn2').addEventListener('click', function() {
    showSlide(1);
});
document.getElementById('btn3').addEventListener('click', function() {
    showSlide(2);
});
window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset >= navbar.offsetTop) {
        navbar.style.position = 'fixed';
        navbar.style.top = '10%';
    }
    else {
        navbar.style.position = 'none';
        navbar.style.height = '110px';
        navbar.style.zIndex = '9';
    }
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  