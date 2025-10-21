const productData = {
    "neck3": {
        title: "Guttapusalu Necklace",
        desc: "A classic South Indian necklace featuring a delicate fringe of small pearls or beads, integral to traditional bridal fashion.",
        offer: "Bridal Special: Free Matching Earrings.",
        category: "Traditional/Pearl",
        price: "₹ 500",
        rating: 4.5,
        image: "image/necklaces/neck3.jpeg",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 150,
        totalReviews: 80,
        ratingBreakdown: { "Excellent": 100, "Very Good": 30, "Good": 10, "Average": 5, "Poor": 5 }
    },
    "stoneneck2": {
        title: "Grand Diamond Finish Long Haram Set",
        desc: "An elaborate, long-length necklace (Haram) set with a luxurious diamond finish, often favored for grand occasions and weddings.",
        offer: "Premium Collection: 10% OFF.",
        category: "Diamond/Haram",
        price: "₹ 25,290",
        rating: 4.8,
        image: "image/necklaces/stoneneck2.webp",
        delivery: "Insured & Express Delivery (1-2 Days)",
        totalRatings: 90,
        totalReviews: 45,
        ratingBreakdown: { "Excellent": 75, "Very Good": 10, "Good": 5, "Average": 0, "Poor": 0 }
    },
    "set1": {
        title: "Heavy Gold Color Necklace Set",
        desc: "A chunky, high-imitation gold-colored necklace set with matching earrings, perfect for fashion jewellery enthusiasts.",
        offer: "Festive Discount: Save 20%.",
        category: "Fashion/Set",
        price: "₹ 2500",
        rating: 4.2,
        image: "image/necklaces/set1.webp",
        delivery: "Free Delivery (4-6 Days)",
        totalRatings: 180,
        totalReviews: 90,
        ratingBreakdown: { "Excellent": 100, "Very Good": 50, "Good": 20, "Average": 10, "Poor": 0 }
    },
    "set3": {
        title: "Kundan Pendant Set (Generic Brand)",
        desc: "A budget-friendly necklace and earring set featuring traditional Kundan work (glass stones set in gold foil).",
        offer: "Daily Wear Steal.",
        category: "Kundan/Set",
        price: "₹ 1,240",
        rating: 3.9,
        image: "image/necklaces/set3.jpg",
        delivery: "Free Delivery (5-7 Days)",
        totalRatings: 220,
        totalReviews: 110,
        ratingBreakdown: { "Excellent": 80, "Very Good": 70, "Good": 50, "Average": 20, "Poor": 0 }
    },
    "neck5": {
        title: "Antique Lakshmi Nakas Necklace - 22KT",
        desc: "A highly valuable antique necklace crafted in 22KT gold featuring intricate 'Nakas' work depicting Goddess Lakshmi.",
        offer: "Heirloom Quality: Certified Gold.",
        category: "Antique/22KT Gold",
        price: "₹ 6,16,560",
        rating: 4.9,
        image: "image/necklaces/neck5.jpeg",
        delivery: "Insured, Next-Day Delivery",
        totalRatings: 50,
        totalReviews: 25,
        ratingBreakdown: { "Excellent": 48, "Very Good": 2, "Good": 0, "Average": 0, "Poor": 0 }
    },
    "set5": {
        title: "Gold Charm Pendant Necklace",
        desc: "A simple, elegant gold pendant on a fine gold chain. The pendant features a small, polished charm design.",
        offer: "Starter Jewelry: Flat 15% OFF.",
        category: "Pendant/Gold",
        price: "₹ 4540",
        rating: 4.1,
        image: "image/necklaces/set5.jpeg",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 130,
        totalReviews: 65,
        ratingBreakdown: { "Excellent": 70, "Very Good": 40, "Good": 15, "Average": 5, "Poor": 0 }
    },
    "set2": {
        title: "Diamond Look Necklace Set (Choker Style)",
        desc: "A modern choker-style set with white, faux-diamond stones, offering a high-end look at an affordable price.",
        offer: "Party Wear Essential.",
        category: "Choker/Fashion",
        price: "₹ 900",
        rating: 4.3,
        image: "image/necklaces/set2.jpg",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 160,
        totalReviews: 80,
        ratingBreakdown: { "Excellent": 100, "Very Good": 30, "Good": 20, "Average": 10, "Poor": 0 }
    },
    "stoneneck1": {
        title: "Beaded Stone Choker",
        desc: "A multi-strand choker necklace featuring small, brightly coloured stones and beads for a vibrant ethnic look.",
        offer: "Color Pop Offer.",
        category: "Choker/Beaded",
        price: "₹ 340",
        rating: 4.0,
        image: "image/necklaces/stoneneck1.jpeg",
        delivery: "Free Delivery (4-6 Days)",
        totalRatings: 110,
        totalReviews: 55,
        ratingBreakdown: { "Excellent": 60, "Very Good": 30, "Good": 15, "Average": 5, "Poor": 0 }
    },
    "neck8": {
        title: "Simple Gold Chain",
        desc: "A basic, everyday dainty gold-plated chain, perfect for layering or minimalistic wear.",
        offer: "Base Chain Buy: 5% OFF.",
        category: "Chain/Minimalist",
        price: "₹ 270",
        rating: 3.7,
        image: "image/necklaces/neck8.webp",
        delivery: "Free Delivery (5-7 Days)",
        totalRatings: 250,
        totalReviews: 125,
        ratingBreakdown: { "Excellent": 100, "Very Good": 80, "Good": 40, "Average": 20, "Poor": 10 }
    },
    "neck6": {
        title: "Layered Chain Necklace",
        desc: "A pre-layered necklace featuring three tiers of varying gold-plated chains, offering a trendy stacked look.",
        offer: "Trend Setter Deal.",
        category: "Chain/Layered",
        price: "₹ 489",
        rating: 4.4,
        image: "image/necklaces/neck6.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 100,
        totalReviews: 50,
        ratingBreakdown: { "Excellent": 60, "Very Good": 30, "Good": 10, "Average": 0, "Poor": 0 }
    },
    "neck7": {
        title: "Rose Gold Pendant Set",
        desc: "A matching necklace and earring set featuring a chic rose gold heart-shaped pendant paved with small stones.",
        offer: "Valentine's Special.",
        category: "Pendant/Rose Gold",
        price: "₹ 550",
        rating: 4.2,
        image: "image/necklaces/neck7.jpg",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 140,
        totalReviews: 70,
        ratingBreakdown: { "Excellent": 70, "Very Good": 40, "Good": 20, "Average": 10, "Poor": 0 }
    },
    "set7": {
        title: "Pearl and Ruby Choker Set",
        desc: "A costume jewelry set featuring a choker design embellished with faux pearls and deep ruby-coloured imitation stones.",
        offer: "Classic Colors Offer.",
        category: "Choker/Imitation",
        price: "₹ 220",
        rating: 3.5,
        image: "image/necklaces/set7.webp",
        delivery: "Free Delivery (5-7 Days)",
        totalRatings: 200,
        totalReviews: 100,
        ratingBreakdown: { "Excellent": 80, "Very Good": 60, "Good": 30, "Average": 20, "Poor": 10 }
    },
    "neckfan7": {
        title: "Multi-Stone Pendant Necklace",
        desc: "A pendant necklace featuring a cluster of dainty opal and clear stones set in a silver-toned metal, giving a subtle shimmer.",
        offer: "Modern Sparkle.",
        category: "Pendant/Silver-tone",
        price: "₹ 800",
        rating: 4.6,
        image: "image/necklaces/neckfan7.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 80,
        totalReviews: 40,
        ratingBreakdown: { "Excellent": 50, "Very Good": 20, "Good": 10, "Average": 0, "Poor": 0 }
    },
    "neck9": {
        title: "Contemporary Silver Choker",
        desc: "A modern, minimalist choker with a solid geometric design in a polished silver-tone, offering a chic, contemporary look.",
        offer: "Geometric Style.",
        category: "Choker/Modern",
        price: "₹ 190",
        rating: 4.1,
        image: "image/necklaces/neck9.avif",
        delivery: "Free Delivery (4-6 Days)",
        totalRatings: 90,
        totalReviews: 45,
        ratingBreakdown: { "Excellent": 50, "Very Good": 30, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "set8": {
        title: "Antique Gold Long Chain",
        desc: "A heavy, traditional long chain necklace in an antique gold finish, suitable for layering with smaller pieces or wearing alone for a classic wedding look.",
        offer: "Heritage Piece.",
        category: "Traditional/Long Chain",
        price: "₹ 2330",
        rating: 4.5,
        image: "image/necklaces/set8.jpeg",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 120,
        totalReviews: 60,
        ratingBreakdown: { "Excellent": 70, "Very Good": 40, "Good": 10, "Average": 0, "Poor": 0 }
    },
    "neck4": {
        title: "Simple Pearl Pendant",
        desc: "A delicate necklace featuring a fine chain and a single, lustrous pearl drop pendant.",
        offer: "Elegant Simplicity.",
        category: "Pendant/Pearl",
        price: "₹ 330",
        rating: 4.3,
        image: "image/necklaces/neck4.jpg",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 170,
        totalReviews: 85,
        ratingBreakdown: { "Excellent": 90, "Very Good": 50, "Good": 20, "Average": 10, "Poor": 0 }
    },
    "set6": {
        title: "Imitation Traditional Set",
        desc: "A short, imitation choker with matching stud earrings, designed to mimic high-end traditional jewelry for daily or occasion wear.",
        offer: "Best Value Set.",
        category: "Choker/Imitation",
        price: "₹ 130",
        rating: 3.6,
        image: "image/necklaces/set6.jpg",
        delivery: "Free Delivery (5-7 Days)",
        totalRatings: 280,
        totalReviews: 140,
        ratingBreakdown: { "Excellent": 100, "Very Good": 80, "Good": 50, "Average": 30, "Poor": 20 }
    },
    "set4": {
        title: "Heavy Kundan Choker",
        desc: "An opulent choker necklace featuring a dense setting of Kundan and high-quality imitation diamonds/gold, ideal for a bridal statement.",
        offer: "Bridal Statement Piece.",
        category: "Kundan/Choker",
        price: "₹ 2299",
        rating: 4.7,
        image: "image/necklaces/set4.jpg",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 110,
        totalReviews: 55,
        ratingBreakdown: { "Excellent": 80, "Very Good": 20, "Good": 5, "Average": 5, "Poor": 0 }
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