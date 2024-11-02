window.addEventListener("scroll", () => {
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  let scrollPosition = window.scrollY;
  heroTitle.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  heroSubtitle.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});

// Galería deslizante automática
const slides = document.querySelector(".slides");
const totalImages = slides ? slides.children.length : 0;
const imagesToShow = 3;
let currentIndex = 0;

function moveSlide(step) {
  currentIndex += step;
  if (currentIndex > totalImages - imagesToShow) currentIndex = 0;
  else if (currentIndex < 0) currentIndex = totalImages - imagesToShow;
  const offset = -currentIndex * (100 / imagesToShow);
  slides.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
  moveSlide(1);
}, 3000);

