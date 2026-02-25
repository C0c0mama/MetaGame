// Mobile Menu
const btn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');
let isOpen = false;

btn.addEventListener('click', () => {
  isOpen = !isOpen;
  navLinks.classList.toggle('hidden', !isOpen);
  navLinks.classList.toggle('flex', isOpen);
  iconOpen.classList.toggle('hidden', isOpen);
  iconClose.classList.toggle('hidden', !isOpen);
});

// Sports & Games Slider
// Sports & Games Slider
const slider = document.getElementById('sports-slider');
const leftBtn = document.getElementById('slider-left');
const rightBtn = document.getElementById('slider-right');
const dotsContainer = document.getElementById('slider-dots');

const slides = document.querySelectorAll('.sports-slider-card');
const totalSlides = slides.length;

let currentIndex = 0;

function updateSlider() {
  const slideWidth = slider.clientWidth;
  slider.scrollTo({
    left: slideWidth * currentIndex,
    behavior: 'smooth',
  });

  document.querySelectorAll('.slider-dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Create dots dynamically
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('slider-dot');
  if (index === 0) dot.classList.add('active');

  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });

  dotsContainer.appendChild(dot);
});

// Next Button
rightBtn.addEventListener('click', () => {
  if (currentIndex === totalSlides - 1) {
    currentIndex = 0; // go to first
  } else {
    currentIndex++;
  }
  updateSlider();
});

// Prev Button
leftBtn.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = totalSlides - 1; // go to last
  } else {
    currentIndex--;
  }
  updateSlider();
});

//  sync dots when user scrolls manually
slider.addEventListener('scroll', () => {
  const slideWidth = slider.clientWidth;
  const index = Math.round(slider.scrollLeft / slideWidth);
  currentIndex = index;

  document.querySelectorAll('.slider-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
});
