// BURGER MENU
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

// CARROSSEL DE DEPOIMENTOS
const prevBtn = document.querySelector('.testimonials .prev');
const nextBtn = document.querySelector('.testimonials .next');
const carousel = document.querySelector('.carousel-container');

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: -320,
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: 320,
    behavior: 'smooth'
  });
});
