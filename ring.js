const productData = {
    "ring1": {
        title: "Golden Floral Ring",
        desc: "Exquisite golden ring featuring a beautiful Lotus Flower Design with a modern Split Shank Band. Perfect for daily wear or light occasions.",
        offer: "Flash Sale: Flat 15% off.",
        category: "Floral/Gold Plated",
        price: "₹ 160",
        rating: 4.5,
        image: "image/ring/ring1.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 180,
        totalReviews: 70,
        ratingBreakdown: { "Excellent": 100, "Very Good": 50, "Good": 20, "Average": 5, "Poor": 5 }
    },
    "ring2": {
        title: "Minimalist Floral Bypass Golden Ring",
        desc: "Simple yet elegant bypass ring with delicate Three-petal Floral Motifs. Ideal for a minimalist, chic look.",
        offer: "Buy 3, Get 1 free (cheapest item).",
        category: "Minimalist/Daily Wear",
        price: "₹ 76",
        rating: 4.0,
        image: "image/ring/ring2.jpg",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 220,
        totalReviews: 90,
        ratingBreakdown: { "Excellent": 120, "Very Good": 60, "Good": 30, "Average": 5, "Poor": 5 }
    },
    "ring3": {
        title: "Oxidized Silver Tribal/Bohemian Ring",
        desc: "Large, bold Oxidized Silver ring with a Rustic and Antique-Look. A perfect statement piece for tribal or bohemian styling.",
        offer: "Limited Stock: Artisan Collection!",
        category: "Statement/Bohemian",
        price: "₹ 2500",
        rating: 4.5,
        image: "image/ring/ring 14.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 110,
        totalReviews: 45,
        ratingBreakdown: { "Excellent": 70, "Very Good": 30, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "ring4": {
        title: "Solitaire Engagement Ring",
        desc: "Luxurious and Vintage-inspired Look solitaire ring, featuring a brilliant centerpiece stone and detailed band work.",
        offer: "Engagement Special: Extra ₹200 OFF.",
        category: "Engagement/Vintage",
        price: "₹ 2,240",
        rating: 5.0,
        image: "image/ring/ring3.jpg",
        delivery: "Insured & Express Delivery (1-3 Days)",
        totalRatings: 90,
        totalReviews: 40,
        ratingBreakdown: { "Excellent": 90, "Very Good": 0, "Good": 0, "Average": 0, "Poor": 0 }
    },
    "ring5": {
        title: "Triple Bloom Golden Flower Ring",
        desc: "An elaborate Triple Bloom golden flower motif set on a Split-shank Band with delicate scrollwork and vine accents.",
        offer: "New Arrival Special: Extra 10% off.",
        category: "Floral/Statement",
        price: "₹ 560",
        rating: 3.5,
        image: "image/ring/ring4.webp",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 150,
        totalReviews: 65,
        ratingBreakdown: { "Excellent": 80, "Very Good": 40, "Good": 20, "Average": 5, "Poor": 5 }
    },
    "ring6": {
        title: "X-Shaped Diamond Ring",
        desc: "A striking Cocktail ring where Two separate bands Elegantly cross over each other, studded with high-quality imitation diamonds.",
        offer: "Weekend Steal: Price Drop!",
        category: "Cocktail/Modern",
        price: "₹ 140",
        rating: 4.5,
        image: "image/ring/ring5.jpeg",
        delivery: "Free Delivery (4-6 Days)",
        totalRatings: 130,
        totalReviews: 55,
        ratingBreakdown: { "Excellent": 75, "Very Good": 40, "Good": 10, "Average": 5, "Poor": 0 }
    },
    "ring7": {
        title: "Criss-Cross Diamond Ring",
        desc: "Sophisticated Criss-Cross design with a Wide Band, fully covered in glittering Pavé Diamonds (imitation).",
        offer: "Premium Collection: Free cleaning kit.",
        category: "Wide Band/Pavé",
        price: "₹ 900",
        rating: 4.0,
        image: "image/ring/ring6.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 70,
        totalReviews: 25,
        ratingBreakdown: { "Excellent": 40, "Very Good": 20, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "ring8": {
        title: "Two-Tone Diamond Teardrop Ring",
        desc: "Elegant teardrop design with two-tone finish (gold and Rhodium Plating) and Pavé-set Diamonds. Very versatile.",
        offer: "Buy 1, Get 20% off on second ring.",
        category: "Teardrop/Two-Tone",
        price: "₹ 340",
        rating: 3.0,
        image: "image/ring/ring7.webp",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 100,
        totalReviews: 35,
        ratingBreakdown: { "Excellent": 30, "Very Good": 30, "Good": 20, "Average": 10, "Poor": 10 }
    },
    "ring9": {
        title: "Diamond Bliss Ring",
        desc: "A stunning Pure Silvered Solitaire ring that offers maximum sparkle and brilliance for special occasions.",
        offer: "Complimentary sizing available.",
        category: "Solitaire/Silver",
        price: "₹ 870",
        rating: 4.5,
        image: "image/ring/ring8.avif",
        delivery: "Free Express Delivery (1-3 Days)",
        totalRatings: 85,
        totalReviews: 30,
        ratingBreakdown: { "Excellent": 60, "Very Good": 20, "Good": 5, "Average": 0, "Poor": 0 }
    },
    "ring10": {
        title: "Woven Diamond Crossover Ring",
        desc: "A luxurious band with intertwining woven strands, featuring a heart-cut imitation diamond solitaire and filigree band set.",
        offer: "Seasonal Bestseller!",
        category: "Crossover/Heart Cut",
        price: "₹ 489",
        rating: 4.0,
        image: "image/ring/ringhome.jpg",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 115,
        totalReviews: 50,
        ratingBreakdown: { "Excellent": 60, "Very Good": 30, "Good": 15, "Average": 5, "Poor": 5 }
    },
    "ring11": {
        title: "Geometric Diamond Half-Eternity Ring",
        desc: "Modern half-eternity band with unique geometric diamond placements. Great for stacking or wearing alone.",
        offer: "Get a surprise free gift.",
        category: "Eternity/Modern",
        price: "₹ 550",
        rating: 3.5,
        image: "image/ring/ring10.webp",
        delivery: "Free Delivery (4-6 Days)",
        totalRatings: 140,
        totalReviews: 55,
        ratingBreakdown: { "Excellent": 70, "Very Good": 40, "Good": 20, "Average": 5, "Poor": 5 }
    },
    "ring12": {
        title: "Natural-Inspired Statement Ring",
        desc: "A unique, wide statement ring featuring an organic arrangement of twisting branches and leaves. A nature-lover's delight.",
        offer: "Eco-Friendly Collection.",
        category: "Nature/Statement",
        price: "₹ 220",
        rating: 4.5,
        image: "image/ring/ring17.jpg",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 95,
        totalReviews: 35,
        ratingBreakdown: { "Excellent": 65, "Very Good": 20, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "ring13": {
        title: "Oxidized Silveree Pearl Flower Ring",
        desc: "A vintage-style ring with an Oxidized Silver finish, featuring a large and Elaborate pearl flower head. Perfect for traditional wear.",
        offer: "Traditional Collection: 10% OFF.",
        category: "Ethnic/Pearl",
        price: "₹ 800",
        rating: 4.0,
        image: "image/ring/ring15.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 75,
        totalReviews: 30,
        ratingBreakdown: { "Excellent": 45, "Very Good": 20, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "ring14": {
        title: "Solitaire Swirl Adjustable Ring",
        desc: "Adjustable ring with a central solitaire, designed with Four Intertwining Strands that gracefully swirl around the finger.",
        offer: "Great for gifting!",
        category: "Adjustable/Swirl",
        price: "₹ 190",
        rating: 3.5,
        image: "image/ring/ring13.jpg",
        delivery: "Free Delivery (5-7 Days)",
        totalRatings: 160,
        totalReviews: 60,
        ratingBreakdown: { "Excellent": 80, "Very Good": 40, "Good": 20, "Average": 10, "Poor": 10 }
    },
    "ring15": {
        title: "Vintage-Style Emerald Cocktail Ring",
        desc: "A show-stopping cocktail ring featuring a vibrant Emerald-cut emerald Center Stone surrounded by glittering accents, giving a rich vintage look.",
        offer: "Premium Gemstone Collection.",
        category: "Cocktail/Emerald",
        price: "₹ 2330",
        rating: 4.5,
        image: "image/ring/ring11.webp",
        delivery: "Insured & Express Delivery (1-3 Days)",
        totalRatings: 60,
        totalReviews: 25,
        ratingBreakdown: { "Excellent": 45, "Very Good": 10, "Good": 5, "Average": 0, "Poor": 0 }
    }
};

// --- Helper Functions (Globally available for modal buttons) ---

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