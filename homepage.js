const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let activeIndex = 0;

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.className = 'slide'; // reset
    if (index === activeIndex) {
      slide.classList.add('active');
    } else if (index === (activeIndex - 1 + slides.length) % slides.length) {
      slide.classList.add('prev');
    } else if (index === (activeIndex + 1) % slides.length) {
      slide.classList.add('next');
    } else if (index === (activeIndex - 2 + slides.length) % slides.length) {
      slide.classList.add('prevLeft');
    } else if (index === (activeIndex + 2) % slides.length) {
      slide.classList.add('nextRight');
    }
  });
}

// Button events
prevBtn.addEventListener('click', () => {
  activeIndex = (activeIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % slides.length;
  updateSlider();
});

// Auto slide every 4s
setInterval(() => {
  activeIndex = (activeIndex + 1) % slides.length;
  updateSlider();
}, 4000);

// Initialize
updateSlider();

