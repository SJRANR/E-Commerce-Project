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





const products = [
    { name: "heels", price: 499, img: "items.png/heel1.png" },
    { name: "Flat moden brown slippers ", price: 799, img: "items.png/flats1.png" },
    { name: " white Shoes", price: 599, img: "items.png/shoe1.png" },
    { name: "Flat white slippers", price: 499, img: "items.png/flats.png" },
    { name: "Glass finish shoe", price: 399, img: "items.png/bride2.png" }
];

const sideProducts = document.getElementById("sideProducts");
const featuredProduct = document.getElementById("featuredProduct");

products.slice(1).forEach(p => {
    const div = document.createElement("div");
    div.className = "side-item";
    div.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <div class="details">
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
    </div>
  `;
    div.addEventListener("click", () => updateFeatured(p));
    sideProducts.appendChild(div);
});

function updateFeatured(product) {
    featuredProduct.classList.add("active");

    // Change featured content
    featuredProduct.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <div class="product-info">
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <p class="offer">🔥 Hot Deal - Limited Stock!</p>
      <button class="buy-btn">Add to Cart</button>
    </div>
  `;

    // Animation remove after short delay
    setTimeout(() => {
        featuredProduct.classList.remove("active");
    }, 600);
}


const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.add("active");
        setTimeout(() => {
            card.classList.remove("active");
        }, 700);
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
document.querySelectorAll('.buy-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.featured-product');
        const title = card.querySelector('h3').textContent;
        const price = parseInt(card.querySelector('.price').textContent.replace('₹', ''));
        addToCart('featured' + index, title, price);
    });
});

function updateCartCount() {
    const countEl = document.getElementById('cart-item-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (countEl) countEl.textContent = totalQty;
}

// Call it after adding product
addProductToCart(cartItem);
updateCartCount();