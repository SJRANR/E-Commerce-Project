const productData = {
    "ban10": {
        title: "Beaded Gold-Tone Bracelet",
        desc: "A delicate chain bracelet with a classic lobster clasp. Features subtle gold-tone beads for a minimal yet chic look.",
        offer: "Limited Time: Free gift wrapping!",
        category: "Daily Wear/Minimalist",
        price: "₹ 160",
        rating: 3.5,
        image: "image/bangles/ban10.webp",
        delivery: "Free Delivery (3-5 Days)",
        dispatchDays: 2,
        totalRatings: 105,
        totalReviews: 40,
        ratingBreakdown: { "Excellent": 50, "Very Good": 25, "Good": 15, "Average": 10, "Poor": 5 }
    },
    "ban1": {
        title: "Bridal Tri-Jhumki Bangle",
        desc: "An exquisite set with velvet bangles by Leshya, featuring three dangling jhumki charms. Perfect for traditional bridal wear.",
        offer: "FREE Matching Finger Ring.",
        category: "Bridal/Traditional",
        price: "₹ 276",
        rating: 4.0,
        image: "image/bangles/ban1.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        dispatchDays: 1,
        totalRatings: 150,
        totalReviews: 60,
        ratingBreakdown: { "Excellent": 80, "Very Good": 40, "Good": 20, "Average": 5, "Poor": 5 }
    },
    "ban12": {
        title: "Adjustable Silver-Tone Bangle Bracelet",
        desc: "A modern double-wire bangle with an adjustable sliding mechanism, ensuring a perfect fit for any wrist size.",
        offer: "Buy 2, Get 10% Off.",
        category: "Modern/Adjustable",
        price: "₹ 140",
        rating: 4.5,
        image: "image/bangles/ban12.jpg",
        delivery: "Free Delivery (4-6 Days)",
        dispatchDays: 2,
        totalRatings: 120,
        totalReviews: 50,
        ratingBreakdown: { "Excellent": 70, "Very Good": 35, "Good": 10, "Average": 5, "Poor": 0 }
    },
    "ban3": {
        title: "Gemstone-Studded Bangles",
        desc: "Features oval-cut gemstones in vibrant colors, primarily ruby-pink and emerald-green. Ideal for festive or ethnic outfits.",
        offer: "Seasonal Sale: Flat 15% off.",
        category: "Ethnic/Colorful",
        price: "₹ 560",
        rating: 3.0,
        image: "image/bangles/ban3.jpg",
        delivery: "Free Delivery (3-5 Days)",
        dispatchDays: 2,
        totalRatings: 90,
        totalReviews: 30,
        ratingBreakdown: { "Excellent": 40, "Very Good": 20, "Good": 15, "Average": 10, "Poor": 5 }
    },
    "ban4": {
        title: "Stack of Rose Gold-Tone Bangles",
        desc: "A set of multiple thin bracelets or bangles in a fashionable rose gold tone. Perfect for stacking and creating a layered look.",
        offer: "Limited Stock: Price Drop!",
        category: "Trendy/Stackable",
        price: "₹ 140",
        rating: 4.0,
        image: "image/bangles/ban4.webp",
        delivery: "Free Delivery (5-7 Days)",
        dispatchDays: 3,
        totalRatings: 130,
        totalReviews: 55,
        ratingBreakdown: { "Excellent": 75, "Very Good": 30, "Good": 15, "Average": 5, "Poor": 5 }
    },
    "ban11": {
        title: "Cuff Bracelet",
        desc: "A bold cuff bracelet featuring capsule-shaped motifs and two smaller, four-petal flower motifs. A statement piece.",
        offer: "New Arrival Special: Extra 5% off.",
        category: "Statement/Cuff",
        price: "₹ 125",
        rating: 2.5,
        image: "image/bangles/ban11.jpg",
        delivery: "Free Delivery (4-6 Days)",
        dispatchDays: 2,
        totalRatings: 70,
        totalReviews: 20,
        ratingBreakdown: { "Excellent": 10, "Very Good": 20, "Good": 25, "Average": 10, "Poor": 5 }
    },
    "ban2": {
        title: "Pearl & Diamond Bangle Set",
        desc: "Elegant wedding chuda set by Hitesh Bangles, featuring imitation pearls and sparkling stones for a grand look.",
        offer: "Premium Collection: Insured Shipping.",
        category: "Bridal/Luxury Imitation",
        price: "₹ 300",
        rating: 5.0,
        image: "image/bangles/ban2.jpeg",
        delivery: "Free Express Delivery (1-3 Days)",
        dispatchDays: 1,
        totalRatings: 180,
        totalReviews: 90,
        ratingBreakdown: { "Excellent": 170, "Very Good": 10, "Good": 0, "Average": 0, "Poor": 0 }
    },
    "ban5": {
        title: "Stacked Set of Beaded Charm Bracelets",
        desc: "A chic set featuring white opaque beads and Pavé-set clear stones, complete with delicate charm accents.",
        offer: "Buy any bracelet, get a charm free!",
        category: "Casual/Beaded",
        price: "₹ 50",
        rating: 4.0,
        image: "image/bangles/ban5.webp",
        delivery: "Free Delivery (3-5 Days)",
        dispatchDays: 2,
        totalRatings: 110,
        totalReviews: 45,
        ratingBreakdown: { "Excellent": 65, "Very Good": 25, "Good": 10, "Average": 5, "Poor": 5 }
    },
    "ban6": {
        title: "Pair of Minimalist Gold Bangles",
        desc: "Elegant and simple bangles with a bright, high-polish finish. Ideal for a sophisticated, understated look.",
        offer: "Flat ₹50 OFF on first purchase.",
        category: "Minimalist/Classic",
        price: "₹ 870",
        rating: 4.5,
        image: "image/bangles/ban6.webp",
        delivery: "Free Delivery (4-6 Days)",
        dispatchDays: 2,
        totalRatings: 95,
        totalReviews: 35,
        ratingBreakdown: { "Excellent": 60, "Very Good": 25, "Good": 10, "Average": 0, "Poor": 0 }
    },
    "ban8": {
        title: "White Beaded and Crystal Bangles",
        desc: "A combination of white beads and tiny, sparkling clear crystals or rhinestones for a dazzling effect.",
        offer: "Great for gifting!",
        category: "Party Wear/Sparkly",
        price: "₹ 450",
        rating: 3.5,
        image: "image/bangles/ban8.jpg",
        delivery: "Free Delivery (3-5 Days)",
        dispatchDays: 2,
        totalRatings: 75,
        totalReviews: 25,
        ratingBreakdown: { "Excellent": 35, "Very Good": 20, "Good": 10, "Average": 5, "Poor": 5 }
    },
    "ban9": {
        title: "Cracked Quartz Beaded Charm Bracelet",
        desc: "Features beads with a unique cracked or crystalline internal texture. A small, subtle charm is attached.",
        offer: "Best price guaranteed.",
        category: "Unique/Casual",
        price: "₹ 30",
        rating: 2.0,
        image: "image/bangles/ban9.webp",
        delivery: "Free Delivery (5-7 Days)",
        dispatchDays: 3,
        totalRatings: 50,
        totalReviews: 10,
        ratingBreakdown: { "Excellent": 5, "Very Good": 10, "Good": 15, "Average": 10, "Poor": 10 }
    },
    "ban7": {
        title: "Traditional Pearl and Gemstone Bangles",
        desc: "Elegant traditional bangles adorned with pearls and tiny, prong-set colored gemstones, perfect for classical attire.",
        offer: "Extra 20% off on bulk orders.",
        category: "Traditional/Festive",
        price: "₹ 220",
        rating: 4.5,
        image: "image/bangles/ban7.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        dispatchDays: 1,
        totalRatings: 100,
        totalReviews: 40,
        ratingBreakdown: { "Excellent": 70, "Very Good": 20, "Good": 5, "Average": 5, "Poor": 0 }
    }
};

function getStarHTML(rating) {
    let html = '';
    let fullStars = Math.floor(rating);
    let hasHalf = rating % 1 !== 0;
    let emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
        html += '<i class="fas fa-star gold"></i>';
    }
    if (hasHalf) {
        html += '<i class="fas fa-star-half-alt gold"></i>';
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

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close-btn');
    const productItems = document.querySelectorAll('.product-item');

    function openModal(productId) {
        const data = productData[productId];
        if (!data) return;

        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-image').src = data.image;
        document.getElementById('modal-image').alt = data.title;
        document.getElementById('modal-full-description').textContent = data.desc;
        document.getElementById('modal-price').textContent = data.price;
        document.getElementById('modal-offer').textContent = 'Offer: ' + data.offer;
        document.getElementById('modal-delivery-status').textContent = data.delivery;
        document.getElementById('modal-category-range').textContent = data.category;
        document.getElementById('modal-product-item-rating').innerHTML = getStarHTML(data.rating);

        document.querySelector('.btn-add-to-cart').setAttribute('data-product-id', productId);
        document.querySelector('.btn-buy-now').setAttribute('data-product-id', productId);

        const totalRatings = data.totalRatings;
        const scoreSum = (data.ratingBreakdown.Excellent * 5) +
            (data.ratingBreakdown["Very Good"] * 4) +
            (data.ratingBreakdown.Good * 3) +
            (data.ratingBreakdown.Average * 2) +
            (data.ratingBreakdown.Poor * 1);

        const overallAvgRating = (scoreSum / totalRatings).toFixed(1);

        document.getElementById('overallAvgRating').textContent = overallAvgRating;
        document.getElementById('totalRatingReviews').textContent = `${totalRatings} Ratings, ${data.totalReviews} Reviews`;
        document.getElementById('ratingBreakdownBars').innerHTML = getProgressBarHTML(data.ratingBreakdown, totalRatings);

        modal.style.display = "block";
    }

    productItems.forEach(item => {
        item.addEventListener('click', (event) => {
            if (event.target.closest('.like-button')) {
                return;
            }
            const productId = item.getAttribute('data-product-id');
            openModal(productId);
        });
    });

    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            button.classList.toggle('selected');
            event.stopPropagation();
        });
    });
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();

            const productItem = button.closest('.product-item');
            const productId = productItem.getAttribute('data-product-id');
            const productImage = productItem.querySelector('img').getAttribute('src');
            const productName = productItem.querySelector('h3').textContent;
            const productPrice = productItem.querySelector('.price').textContent.trim();

            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

            const existingItem = wishlist.find(item => item.id === productId);

            if (!existingItem) {
                wishlist.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    image: productImage
                });
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                button.classList.add('liked');
            } else {
                wishlist = wishlist.filter(i => i.id !== productId);
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                button.classList.remove('liked');
            }
        });
    });


    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.querySelectorAll('.product-item').forEach(item => {
        const productId = item.getAttribute('data-product-id');
        const ratingDiv = item.querySelector('.product-rating');
        const rating = productData[productId] ? productData[productId].rating : 0;

        if (ratingDiv && rating > 0) {
            ratingDiv.innerHTML = getStarHTML(rating);
        }
    });
});