// anklet_scripts.js

const productData = {
    "ank1": {
        title: "Traditional Silver Anklets",
        desc: "Heavy, pure silver anklets featuring traditional leaf or droplet-shaped charms. Creates a classic, resonant sound with movement.",
        offer: "Limited Edition: Free polishing cloth included.",
        category: "Traditional/Silver",
        price: "₹ 3260",
        rating: 4.8,
        image: "image/anklet/ank1.webp",
        delivery: "Insured & Express Delivery (1-3 Days)",
        totalRatings: 150,
        totalReviews: 80,
        ratingBreakdown: { "Excellent": 120, "Very Good": 20, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "ank2": {
        title: "Black Beaded Charm Anklets",
        desc: "Trendy anklets featuring black beads strung on a wire, highlighted by a modern silver-tone or white-gold-tone central motif.",
        offer: "Buy 2, Get 1 free (cheapest item).",
        category: "Modern/Beaded",
        price: "₹ 576",
        rating: 4.0,
        image: "image/anklet/ank2.webp",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 250,
        totalReviews: 120,
        ratingBreakdown: { "Excellent": 130, "Very Good": 80, "Good": 30, "Average": 5, "Poor": 5 }
    },
    "ank3": {
        title: "Payal Silver-Tone Beaded Anklets",
        desc: "Classic Indian 'Payal' style with a delicate silver-tone beaded chain and a traditional dangling charm cluster at the center.",
        offer: "Seasonal Bestseller: Extra 10% off.",
        category: "Ethnic/Payal",
        price: "₹ 2500",
        rating: 4.5,
        image: "image/anklet/ank3.jpg",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 180,
        totalReviews: 90,
        ratingBreakdown: { "Excellent": 110, "Very Good": 50, "Good": 10, "Average": 5, "Poor": 5 }
    },
    "ank4": {
        title: "Crystal-Studded Chain Anklets",
        desc: "A sleek chain anklet adorned with small, sparkling crystals. Features a subtle jingle bell cluster for a soft sound.",
        offer: "New Arrival Special!",
        category: "Minimalist/Chain",
        price: "₹ 1500",
        rating: 3.5,
        image: "image/anklet/ank4.webp",
        delivery: "Free Delivery (4-6 Days)",
        totalRatings: 120,
        totalReviews: 45,
        ratingBreakdown: { "Excellent": 60, "Very Good": 30, "Good": 15, "Average": 10, "Poor": 5 }
    },
    "ank5": {
        title: "Tone Beaded Anklets with Red Stone Accents",
        desc: "Vibrant silver-tone beaded anklets accented with a striking red teardrop-shaped stone. Perfect for festive outfits.",
        offer: "Flat ₹100 OFF on first purchase.",
        category: "Festive/Stone",
        price: "₹ 4500",
        rating: 4.0,
        image: "image/anklet/ank5.jpg",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 90,
        totalReviews: 40,
        ratingBreakdown: { "Excellent": 50, "Very Good": 30, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "ank6": {
        title: "Minimalist Silver-Tone Anklets",
        desc: "Simple, thin silver-tone chain anklets with just a central cluster of a few small silver beads for a barely-there look.",
        offer: "Daily Wear Essential.",
        category: "Minimalist/Daily Wear",
        price: "₹ 1500",
        rating: 4.2,
        image: "image/anklet/ank6.jpg",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 200,
        totalReviews: 100,
        ratingBreakdown: { "Excellent": 120, "Very Good": 60, "Good": 10, "Average": 5, "Poor": 5 }
    },
    "ank7": {
        title: "Heavy Oxidized Silver Anklets",
        desc: "Bold, rustic anklets with a heavy oxidized finish and uniformly sized dangling metal beads or bells for a strong, tribal sound and look.",
        offer: "Tribal Collection Special.",
        category: "Ethnic/Oxidized",
        price: "₹ 5500",
        rating: 4.7,
        image: "image/anklet/ank7.jpeg",
        delivery: "Insured & Express Delivery (1-3 Days)",
        totalRatings: 110,
        totalReviews: 55,
        ratingBreakdown: { "Excellent": 80, "Very Good": 20, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "ank8": {
        title: "Silver Flower and Bell Anklets",
        desc: "Elegant silver anklets featuring small floral links connected to a continuous line of tiny, round metal bells (ghungroos).",
        offer: "Premium Gifting Option.",
        category: "Bridal/Ghungroo",
        price: "₹ 7520",
        rating: 4.9,
        image: "image/anklet/ank8.webp",
        delivery: "Insured & Express Delivery (1-2 Days)",
        totalRatings: 70,
        totalReviews: 30,
        ratingBreakdown: { "Excellent": 65, "Very Good": 5, "Good": 0, "Average": 0, "Poor": 0 }
    },
    "ank9": {
        title: "Multi-Chain Silver-Tone Anklets with Heavy Ghungroo Dangles",
        desc: "A statement piece with multiple chains and a dense fringe of various-sized metal bells (ghungroos), ensuring a loud, traditional chime.",
        offer: "Buy 1, Get 20% off the second item.",
        category: "Statement/Heavy",
        price: "₹ 3570",
        rating: 4.3,
        image: "image/anklet/ank9.avif",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 130,
        totalReviews: 60,
        ratingBreakdown: { "Excellent": 70, "Very Good": 40, "Good": 15, "Average": 5, "Poor": 0 }
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