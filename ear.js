// earrings_scripts.js

const productData = {
    "ear1": {
        title: "Matte Gold Plated Peacock Earrings",
        desc: "Exquisite traditional earrings featuring a peacock motif, matte gold plating, AD Stones, and delicate hanging pearls. Perfect for ethnic wear.",
        offer: "Ethnic Special: 10% OFF.",
        category: "Traditional/Jhumka",
        price: "₹ 500",
        rating: 4.5,
        image: "image/earrings/ear1.jpeg",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 150,
        totalReviews: 80,
        ratingBreakdown: { "Excellent": 100, "Very Good": 30, "Good": 10, "Average": 5, "Poor": 5 }
    },
    "ear2": {
        title: "Hoop Earrings",
        desc: "Simple and classic gold-colored double twist loop hoop earrings. A stylish piece for everyday wear or a casual outing.",
        offer: "Daily Wear Steal.",
        category: "Hoop/Minimalist",
        price: "₹ 290",
        rating: 4.2,
        image: "image/earrings/ear2.webp",
        delivery: "Free Delivery (4-6 Days)",
        totalRatings: 250,
        totalReviews: 125,
        ratingBreakdown: { "Excellent": 150, "Very Good": 70, "Good": 20, "Average": 10, "Poor": 0 }
    },
    "ear3": {
        title: "Gold-Plated Pearl Drop Earrings",
        desc: "Elegant gold-plated earrings with a subtle drop design featuring a single faux pearl. Fashionable and light weight.",
        offer: "Fashion Frill Discount: Save 20%.",
        category: "Drop/Fashion",
        price: "₹ 120",
        rating: 3.9,
        image: "image/earrings/ear3.avif",
        delivery: "Free Delivery (5-7 Days)",
        totalRatings: 320,
        totalReviews: 160,
        ratingBreakdown: { "Excellent": 120, "Very Good": 100, "Good": 60, "Average": 30, "Poor": 10 }
    },
    "ear7": {
        title: "White Flower Earrings",
        desc: "Delicate white flower-shaped studs set with natural fresh water pearls in the center. Very dainty and romantic.",
        offer: "Dainty Deal.",
        category: "Stud/Pearl",
        price: "₹ 40",
        rating: 4.1,
        image: "image/earrings/ear7.avif",
        delivery: "Free Delivery (5-7 Days)",
        totalRatings: 400,
        totalReviews: 200,
        ratingBreakdown: { "Excellent": 200, "Very Good": 150, "Good": 30, "Average": 20, "Poor": 0 }
    },
    "ear4": {
        title: "Fascinating Halo Earrings",
        desc: "Stud earrings with a center stone surrounded by a 'halo' of smaller EFIF-grade imitation diamonds for maximum brilliance.",
        offer: "Shine Bright: Flat 15% OFF.",
        category: "Stud/Diamond Look",
        price: "₹ 65",
        rating: 4.4,
        image: "image/earrings/ear4.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 180,
        totalReviews: 90,
        ratingBreakdown: { "Excellent": 120, "Very Good": 40, "Good": 15, "Average": 5, "Poor": 0 }
    },
    "ear8": {
        title: "Bridal Gold Look Earrings",
        desc: "Heavy, intricate Chandaballi-style earrings designed to mimic traditional bridal gold jewelry. A statement piece.",
        offer: "Bridal Statement Piece.",
        category: "Chandaballi/Imitation",
        price: "₹ 540",
        rating: 4.6,
        image: "image/earrings/ear8.webp",
        delivery: "Insured Express Delivery (1-2 Days)",
        totalRatings: 90,
        totalReviews: 45,
        ratingBreakdown: { "Excellent": 70, "Very Good": 15, "Good": 5, "Average": 0, "Poor": 0 }
    },
    "ear9": {
        title: "Modern Leaflet Earrings",
        desc: "Exquisite 18KT gold earrings shaped like delicate leaflets, paved with EFIF diamonds. A true luxury item.",
        offer: "Premium Luxury: Certified Gold.",
        category: "Luxury/18KT Gold",
        price: "₹ 45,490",
        rating: 4.9,
        image: "image/earrings/ear9.webp",
        delivery: "Insured, Next-Day Delivery",
        totalRatings: 50,
        totalReviews: 25,
        ratingBreakdown: { "Excellent": 48, "Very Good": 2, "Good": 0, "Average": 0, "Poor": 0 }
    },
    "ear5": {
        title: "Blushing Pink Earrings",
        desc: "Elegant dangle earrings featuring prominent pinkish stone granutes and surrounding white stones. Ideal for formal events.",
        offer: "Gemstone Glamour Offer.",
        category: "Dangle/Stone",
        price: "₹ 2,340",
        rating: 4.3,
        image: "image/earrings/ear5.jpg",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 110,
        totalReviews: 55,
        ratingBreakdown: { "Excellent": 60, "Very Good": 30, "Good": 10, "Average": 10, "Poor": 0 }
    },
    "ear10": {
        title: "Modern Silver Earrings",
        desc: "Unique silver-toned earrings with a 'Swang Butterfly' latest design, offering a chic, modern, and artistic look.",
        offer: "Contemporary Choice.",
        category: "Modern/Silver Tone",
        price: "₹ 270",
        rating: 4.0,
        image: "image/earrings/ear10.webp",
        delivery: "Free Delivery (4-6 Days)",
        totalRatings: 170,
        totalReviews: 85,
        ratingBreakdown: { "Excellent": 80, "Very Good": 50, "Good": 30, "Average": 10, "Poor": 0 }
    },
    "ear13": {
        title: "Daphne Gold Plated Earrings",
        desc: "Versatile gold-plated earrings with a unique party wear design. Can easily transition from day to evening.",
        offer: "Party Prep Deal.",
        category: "Gold Plated/Party",
        price: "₹ 189",
        rating: 3.7,
        image: "image/earrings/ear 13.gif",
        delivery: "Free Delivery (5-7 Days)",
        totalRatings: 220,
        totalReviews: 110,
        ratingBreakdown: { "Excellent": 80, "Very Good": 70, "Good": 50, "Average": 20, "Poor": 0 }
    },
    "ear14": {
        title: "Glamorous Party Wear Earring",
        desc: "Flowing dangle earrings with large white stones in a floral pattern, designed for a glamorous party statement.",
        offer: "Glamour Buy.",
        category: "Dangle/Party",
        price: "₹ 550",
        rating: 4.5,
        image: "image/earrings/ear14.jpeg",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 130,
        totalReviews: 65,
        ratingBreakdown: { "Excellent": 90, "Very Good": 30, "Good": 10, "Average": 0, "Poor": 0 }
    },
    "ear6": {
        title: "Huggie Hoop Earrings",
        desc: "Small, snug-fitting hoops that hug the earlobe, giving a 'long fancy look' with a delicate chain and bead drop.",
        offer: "Chic and Trendy.",
        category: "Hoop/Drop",
        price: "₹ 210",
        rating: 4.1,
        image: "image/earrings/ear6.avif",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 190,
        totalReviews: 95,
        ratingBreakdown: { "Excellent": 100, "Very Good": 50, "Good": 30, "Average": 10, "Poor": 0 }
    },
    "ear12": {
        title: "Fancy Earrings",
        desc: "Dangle earrings with a playful design, featuring a pink and green coated motif. Perfect for adding a pop of color.",
        offer: "Colorful Fun.",
        category: "Dangle/Coated",
        price: "₹ 180",
        rating: 3.8,
        image: "image/earrings/ear12.webp",
        delivery: "Free Delivery (4-6 Days)",
        totalRatings: 280,
        totalReviews: 140,
        ratingBreakdown: { "Excellent": 100, "Very Good": 90, "Good": 50, "Average": 30, "Poor": 10 }
    },
    "ear15": {
        title: "Fashion Frill",
        desc: "Exclusively designed earrings featuring a floral cluster of small imitation pearls, giving a high-fashion look.",
        offer: "Pearl Perfection.",
        category: "Floral/Pearl",
        price: "₹ 190",
        rating: 4.0,
        image: "image/earrings/ear15.webp",
        delivery: "Free Delivery (5-7 Days)",
        totalRatings: 160,
        totalReviews: 80,
        ratingBreakdown: { "Excellent": 80, "Very Good": 50, "Good": 20, "Average": 10, "Poor": 0 }
    },
    "ear17": {
        title: "Tulip Earrings",
        desc: "Elegant gold dangle earrings with a stylized tulip flower design, offering a sophisticated and unique look.",
        offer: "Flower Power Sale.",
        category: "Dangle/Floral",
        price: "₹ 2330",
        rating: 4.4,
        image: "image/earrings/ear17.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 100,
        totalReviews: 50,
        ratingBreakdown: { "Excellent": 60, "Very Good": 30, "Good": 10, "Average": 0, "Poor": 0 }
    },
    "ear16": {
        title: "Floral Jhumka Earrings",
        desc: "Classic Jhumka (bell-shaped) earrings embellished with a floral pattern and small dangling beads. Great for party wear.",
        offer: "Jhumka Joy.",
        category: "Jhumka/Party",
        price: "₹ 330",
        rating: 4.2,
        image: "image/earrings/ear16.jpeg",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 140,
        totalReviews: 70,
        ratingBreakdown: { "Excellent": 80, "Very Good": 40, "Good": 20, "Average": 0, "Poor": 0 }
    },
    "ear19": {
        title: "Mango Stud Imitation Earrings",
        desc: "Traditional stud earrings shaped like a mango (paisley) motif, a popular design in South Indian imitation jewelry.",
        offer: "Traditional Taste.",
        category: "Stud/Imitation",
        price: "₹ 1380",
        rating: 4.5,
        image: "image/earrings/ear19.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 95,
        totalReviews: 47,
        ratingBreakdown: { "Excellent": 60, "Very Good": 20, "Good": 10, "Average": 5, "Poor": 0 }
    },
    "ear18": {
        title: "Western Earrings",
        desc: "Large, statement earrings with a contemporary Western design, featuring gold and silver plated ethnic-inspired accents.",
        offer: "Fusion Fashion.",
        category: "Statement/Fusion",
        price: "₹ 2299",
        rating: 4.7,
        image: "image/earrings/ear18.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 80,
        totalReviews: 40,
        ratingBreakdown: { "Excellent": 55, "Very Good": 20, "Good": 5, "Average": 0, "Poor": 0 }
    }
};

// --- Helper Functions (Globally accessible for the modal) ---

function getStarHTML(rating) {
    let html = '';
    let fullStars = Math.floor(rating);
    let hasHalf = rating % 1 !== 0;
    let emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
        html += '<i class="fas fa-star"></i>';
    }
    if (hasHalf) {
        html += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        html += '<i class="far fa-star"></i>';
    }
    return html;
}

function getProgressBarHTML(breakdown, total) {
    let html = '';
    const labels = ["Excellent", "Very Good", "Good", "Average", "Poor"];
    const classes = ["excellent", "very-good", "good", "average", "poor"];

    labels.forEach((label, index) => {
        const count = breakdown[label] || 0;
        const percentage = total > 0 ? (count / total) * 100 : 0;
        html += `
            <div class="rating-bar-row">
                <span class="rating-label">${label}</span>
                <div class="progress-bar-container">
                    <div class="progress-bar ${classes[index]}" style="width: ${percentage.toFixed(0)}%;"></div>
                </div>
                <span class="rating-count">${count}</span>
            </div>
        `;
    });
    return html;
}

function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}

function buyNow(productId) {
    alert(`Redirecting to checkout for Product ${productId}!`);
}

// --- Main Script Logic ---

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close-btn');
    const productItems = document.querySelectorAll('.product-item');
    const likeButtons = document.querySelectorAll('.like-button');

    function openModal(productId) {
        const data = productData[productId];
        if (!data) {
            alert('Product details not found.');
            return;
        }

        // 1. Populate main details
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-image').src = data.image;
        document.getElementById('modal-image').alt = data.title;
        document.getElementById('modal-full-description').textContent = data.desc;
        document.getElementById('modal-price').textContent = data.price;
        document.getElementById('modal-offer').textContent = 'Offer: ' + data.offer;
        document.getElementById('modal-delivery-status').textContent = data.delivery;
        document.getElementById('modal-category-range').textContent = data.category;
        document.getElementById('modal-product-item-rating').innerHTML = getStarHTML(data.rating);

        // 2. Set IDs for buttons
        document.querySelector('.btn-add-to-cart').setAttribute('data-product-id', productId);
        document.querySelector('.btn-buy-now').setAttribute('data-product-id', productId);

        // 3. Calculate and Populate Ratings/Reviews
        const totalRatings = data.totalRatings;
        const scoreSum = (data.ratingBreakdown.Excellent * 5) +
            (data.ratingBreakdown["Very Good"] * 4) +
            (data.ratingBreakdown.Good * 3) +
            (data.ratingBreakdown.Average * 2) +
            (data.ratingBreakdown.Poor * 1);

        const overallAvgRating = (totalRatings > 0 ? (scoreSum / totalRatings).toFixed(1) : 0);

        document.getElementById('overallAvgRating').textContent = overallAvgRating;
        document.getElementById('totalRatingReviews').textContent = `${totalRatings} Ratings, ${data.totalReviews} Reviews`;
        document.getElementById('ratingBreakdownBars').innerHTML = getProgressBarHTML(data.ratingBreakdown, totalRatings);

        // 4. Show modal
        modal.style.display = "block";
    }

    // A. Product Click (Open Modal)
    productItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // Prevent modal opening when clicking the like button
            if (event.target.closest('.like-button')) {
                return;
            }
            const productId = item.getAttribute('data-product-id');
            openModal(productId);
        });
    });

    // B. Like Button Toggle
    likeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            button.classList.toggle('selected');
            event.stopPropagation(); // Stop click event from bubbling up to the parent .product-item
        });
    });

    // C. Close Modal Handlers
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // D. Initial Rating Display on Grid Items
    productItems.forEach(item => {
        const productId = item.getAttribute('data-product-id');
        const ratingDiv = item.querySelector('.product-rating');
        const rating = productData[productId] ? productData[productId].rating : 0;

        if (ratingDiv && rating > 0) {
            ratingDiv.innerHTML = getStarHTML(rating);
        }
    });
});