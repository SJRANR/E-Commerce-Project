// Click animation on cards
const cards = document.querySelectorAll(".product-card");
cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.add("active");
    setTimeout(() => card.classList.remove("active"), 600);
  });
});

const slider = document.querySelector('.slider');
let isPaused = false;
let resumeTimeout;

// Pause slider movement
const pauseSlider = () => {
  slider.style.animationPlayState = 'paused';
  isPaused = true;
};

// Resume slider movement
const resumeSlider = () => {
  slider.style.animationPlayState = 'running';
  isPaused = false;
};

// Pause/resume on click of a logo
slider.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    if (isPaused) {
      resumeSlider();
    } else {
      pauseSlider();
      clearTimeout(resumeTimeout);
      // Resume automatically after 3 seconds
      resumeTimeout = setTimeout(() => {
        if (isPaused) resumeSlider();
      }, 3000);
    }
  });
});

// Pause when hovering the whole slider
slider.addEventListener('mouseenter', pauseSlider);
slider.addEventListener('mouseleave', () => {
  if (!isPaused) resumeSlider();
});

// Click outside the slider to resume
document.addEventListener('click', (e) => {
  if (!slider.contains(e.target) && isPaused) {
    resumeSlider();
  }
});
