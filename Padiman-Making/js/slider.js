// js/slider.js

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function rotateSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

setInterval(rotateSlides, 5000);  // Change slide every 5 seconds
