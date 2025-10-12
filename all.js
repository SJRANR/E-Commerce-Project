// all_scripts.js

const productData = {
    "all1": {
        title: "Sterling Silver Solitaire Pendant Necklace",
        desc: "A timeless sterling silver necklace featuring a brilliant-cut solitaire pendant on a thin silver-tone chain. Perfect for everyday elegance.",
        offer: "Classic Collection: Save 15%.",
        category: "Necklace/Silver",
        price: "₹ 5,160",
        rating: 4.8,
        image: "image/all/all1.webp",
        delivery: "Insured & Express Delivery (1-3 Days)",
        totalRatings: 150,
        totalReviews: 80,
        ratingBreakdown: { "Excellent": 120, "Very Good": 20, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "banp": {
        title: "Gold-Tone Bangle with Embellished Ends",
        desc: "A stylish, open-ended gold-tone bangle with embellished ends, featuring a polished gold bead and detailed gold beadwork accents.",
        offer: "Buy 2, Get 1 free (cheapest item).",
        category: "Bangle/Fashion",
        price: "₹ 76",
        rating: 3.5,
        image: "image/all/banp.webp",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 300,
        totalReviews: 150,
        ratingBreakdown: { "Excellent": 100, "Very Good": 80, "Good": 60, "Average": 40, "Poor": 20 }
    },
    "anklsimple": {
        title: "Dainty Two-Tone Beaded Chain Anklet",
        desc: "A delicate anklet featuring a fine chain interwoven with alternating rose gold and silver-toned beads. Perfect for a subtle shimmer.",
        offer: "Seasonal Bestseller: Extra 10% off.",
        category: "Anklet/Minimalist",
        price: "₹ 150",
        rating: 4.2,
        image: "image/all/anklsimple.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 180,
        totalReviews: 90,
        ratingBreakdown: { "Excellent": 110, "Very Good": 50, "Good": 10, "Average": 5, "Poor": 5 }
    },
    "eardesmod": {
        title: "Sterling Silver Floral/Flower Stud Earrings",
        desc: "Exquisite flower-shaped stud earrings made from Sterling Silver and set with shimmering Cubic Zirconia (CZ) stones.",
        offer: "New Arrival Special!",
        category: "Earring/Studs",
        price: "₹ 750",
        rating: 4.5,
        image: "image/all/eardesmod.jpg",
        delivery: "Free Delivery (4-6 Days)",
        totalRatings: 120,
        totalReviews: 45,
        ratingBreakdown: { "Excellent": 60, "Very Good": 30, "Good": 15, "Average": 10, "Poor": 5 }
    },
    "plainneck": {
        title: "Rose Gold and Stone Necklaces",
        desc: "An affordable fashion-style necklace set with a rose gold finish and a central stone accent, ideal for layering or simple wear.",
        offer: "Flat ₹100 OFF on first purchase.",
        category: "Necklace/Fashion",
        price: "₹ 672",
        rating: 4.0,
        image: "image/all/plain neck.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 90,
        totalReviews: 40,
        ratingBreakdown: { "Excellent": 50, "Very Good": 30, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "bancross": {
        title: "Traditional/Gold Plated Bangles",
        desc: "Ornate gold-plated bangles in a traditional design, heavily studded with CZ stones and other intricate embellishments.",
        offer: "Wedding Collection Favorite.",
        category: "Bangle/Traditional",
        price: "₹ 995",
        rating: 4.7,
        image: "image/all/bancross.webp",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 200,
        totalReviews: 100,
        ratingBreakdown: { "Excellent": 120, "Very Good": 60, "Good": 10, "Average": 5, "Poor": 5 }
    },
    "peendgs": {
        title: "Rose Gold and Cubic Zirconia Pendant Earrings",
        desc: "Matching set of pendant and earrings made of zinc alloy with rose gold plating, featuring clustered CZ stones for maximum sparkle.",
        offer: "Complete Set Deal.",
        category: "Set/Rose Gold",
        price: "₹ 900",
        rating: 4.6,
        image: "image/all/peendgs.webp",
        delivery: "Insured & Express Delivery (1-3 Days)",
        totalRatings: 110,
        totalReviews: 55,
        ratingBreakdown: { "Excellent": 80, "Very Good": 20, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "silring": {
        title: "Sterling Silver Geometric Adjustable Ring",
        desc: "A contemporary adjustable ring crafted from 925 Sterling Silver, featuring a bold, open geometric style that fits various sizes.",
        offer: "Modern Design Special.",
        category: "Ring/Adjustable",
        price: "₹ 340",
        rating: 4.3,
        image: "image/all/silring.webp",
        delivery: "Free Delivery (2-4 Days)",
        totalRatings: 70,
        totalReviews: 30,
        ratingBreakdown: { "Excellent": 40, "Very Good": 20, "Good": 10, "Average": 0, "Poor": 0 }
    },
    "pendneckset": {
        title: "Rose Gold Double Heart CZ Pendant",
        desc: "An elegant pendant necklace featuring two interlocking hearts, heavily paved with Cubic Zirconia stones, suspended from a fine link chain.",
        offer: "Romantic Gift Idea: Free box packaging.",
        category: "Necklace/Pendant",
        price: "₹ 1870",
        rating: 4.5,
        image: "image/all/pendneckset.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 130,
        totalReviews: 60,
        ratingBreakdown: { "Excellent": 70, "Very Good": 40, "Good": 15, "Average": 5, "Poor": 0 }
    },
    "eargoldrin": {
        title: "Traditional Gold Plated Hoop Earrings",
        desc: "Medium-sized gold-plated hoop earrings in a traditional design, decorated with small hanging Ghungroo bells for a classic jingle.",
        offer: "Heritage Style Bargain.",
        category: "Earring/Hoops",
        price: "₹ 289",
        rating: 4.0,
        image: "image/all/eargoldrin.webp",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 220,
        totalReviews: 110,
        ratingBreakdown: { "Excellent": 100, "Very Good": 70, "Good": 40, "Average": 10, "Poor": 0 }
    },
    "anklblack": {
        title: "Black Beads Oxidised Silver Plated Elephant Traditional Anklets",
        desc: "Traditional anklets featuring a combination of black beads and an oxidised silver-plated finish, often incorporating cute elephant charms.",
        offer: "Daily Wear Special.",
        category: "Anklet/Traditional",
        price: "₹ 341",
        rating: 4.1,
        image: "image/all/anklblack.jpg",
        delivery: "Free Delivery (4-6 Days)",
        totalRatings: 95,
        totalReviews: 50,
        ratingBreakdown: { "Excellent": 55, "Very Good": 25, "Good": 10, "Average": 5, "Poor": 0 }
    },
    "goldank": {
        title: "Gold Plated Box Chain Anklet",
        desc: "A simple, yet sophisticated gold-plated box chain anklet interspersed with small black beads, ideal for a subtle, everyday look.",
        offer: "Minimalist Must-Have.",
        category: "Anklet/Chain",
        price: "₹ 125",
        rating: 3.8,
        image: "image/all/goldank.webp",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 140,
        totalReviews: 70,
        ratingBreakdown: { "Excellent": 60, "Very Good": 40, "Good": 30, "Average": 5, "Poor": 5 }
    },
    "banbri": {
        title: "Plated & Pearl Embellished Antique Bangles",
        desc: "Antique-style metal bangles featuring a vintage plating and beautifully decorated with pearl and coloured stone embellishments.",
        offer: "Festive Season Discount.",
        category: "Bangle/Antique",
        price: "₹ 735",
        rating: 4.4,
        image: "image/all/banbri.jpeg",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 160,
        totalReviews: 80,
        ratingBreakdown: { "Excellent": 100, "Very Good": 40, "Good": 10, "Average": 5, "Poor": 5 }
    },
    "earflow": {
        title: "Matte finish silver floral stud earrings",
        desc: "Delicate silver-plated stud earrings with a matte finish, designed as a floral solitaire studded with tiny American Diamonds.",
        offer: "Perfect for Office Wear.",
        category: "Earring/Studs",
        price: "₹ 190",
        rating: 4.0,
        image: "image/all/earflow.jpg",
        delivery: "Free Delivery (4-6 Days)",
        totalRatings: 90,
        totalReviews: 45,
        ratingBreakdown: { "Excellent": 50, "Very Good": 30, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "ringgf": {
        title: "Sterling silver adjustable geometric ring",
        desc: "A sophisticated, adjustable ring made from sterling silver, featuring a geometric triangle design subtly paved with diamonds (or CZ) for sparkle.",
        offer: "Premium Silver Collection.",
        category: "Ring/Sterling",
        price: "₹ 4,330",
        rating: 4.9,
        image: "image/all/ringgf.jpg",
        delivery: "Insured & Express Delivery (1-2 Days)",
        totalRatings: 60,
        totalReviews: 30,
        ratingBreakdown: { "Excellent": 55, "Very Good": 5, "Good": 0, "Average": 0, "Poor": 0 }
    },
    "brached": {
        title: "Filigree bracelet",
        desc: "A classic gold-plated adjustable bracelet featuring intricate filigree work, providing a delicate and lace-like appearance.",
        offer: "Artisan Craftsmanship.",
        category: "Bracelet/Filigree",
        price: "₹ 366",
        rating: 4.2,
        image: "image/all/brached.jpg",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 110,
        totalReviews: 60,
        ratingBreakdown: { "Excellent": 60, "Very Good": 30, "Good": 10, "Average": 5, "Poor": 5 }
    },
    "earleafg": {
        title: "Woven Diamond Crossover Ring",
        desc: "A stunning crossover ring design, intricately woven and studded with diamond accents. Note: The image shows earrings, but the title suggests a ring. This is a placeholder for the given image/title discrepancy.",
        offer: "High-Sparkle Statement.",
        category: "Earring/Dangler",
        price: "₹ 489",
        rating: 4.1,
        image: "image/all/earleafg.jpg",
        delivery: "Free Delivery (4-6 Days)",
        totalRatings: 80,
        totalReviews: 40,
        ratingBreakdown: { "Excellent": 40, "Very Good": 30, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "necksilsimple": {
        title: "Geometric Diamond Half-Eternity Ring",
        desc: "A delicate silver-toned piece, perfect for everyday wear. The description in the source refers to a ring, but the image is a necklace. Using the source description for title/info.",
        offer: "Daily Elegance.",
        category: "Necklace/Minimalist",
        price: "₹ 550",
        rating: 3.9,
        image: "image/all/necksilsimple.webp",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 100,
        totalReviews: 50,
        ratingBreakdown: { "Excellent": 50, "Very Good": 30, "Good": 10, "Average": 10, "Poor": 0 }
    },
    "ringelagant": {
        title: "Natural-Inspired Statement Ring",
        desc: "A large, bold statement ring featuring an organic arrangement of twisting branches and leaves, embodying a natural theme.",
        offer: "Nature's Beauty Collection.",
        category: "Ring/Statement",
        price: "₹ 220",
        rating: 4.5,
        image: "image/all/ringelagant.webp",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 75,
        totalReviews: 40,
        ratingBreakdown: { "Excellent": 45, "Very Good": 20, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "brach": {
        title: "Link Bracelets",
        desc: "A classic sterling silver mariner link bracelet, offering a timeless and durable design for both men and women.",
        offer: "Heavy Metal Discount.",
        category: "Bracelet/Link",
        price: "₹ 800",
        rating: 4.3,
        image: "image/all/brach.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 105,
        totalReviews: 55,
        ratingBreakdown: { "Excellent": 65, "Very Good": 30, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "stoneneck": {
        title: "Stone Choker Sets Necklace",
        desc: "A vibrant traditional set featuring a natural stone choker necklace with a matching pair of earrings, perfect for ethnic wear.",
        offer: "Ethnic Set Deal.",
        category: "Necklace/Choker",
        price: "₹ 190",
        rating: 4.0,
        image: "image/all/stoneneck.jpg",
        delivery: "Free Delivery (4-6 Days)",
        totalRatings: 130,
        totalReviews: 65,
        ratingBreakdown: { "Excellent": 70, "Very Good": 40, "Good": 10, "Average": 5, "Poor": 5 }
    },
    "earswing": {
        title: "Bali hoop earrings",
        desc: "Small, gold-plated Bali hoop earrings with intricate carving or beading, known for their traditional, lightweight design.",
        offer: "Everyday Earring Essential.",
        category: "Earring/Hoops",
        price: "₹ 30",
        rating: 3.5,
        image: "image/all/earswing.jpg",
        delivery: "Free Delivery (5-7 Days)",
        totalRatings: 250,
        totalReviews: 125,
        ratingBreakdown: { "Excellent": 100, "Very Good": 60, "Good": 50, "Average": 30, "Poor": 10 }
    },
    "elbrache": {
        title: "Fine chain bracelet",
        desc: "A delicate fine chain bracelet featuring a central infinity symbol (∞) paved with small clear stones, symbolizing eternal love.",
        offer: "Romantic Jewelry.",
        category: "Bracelet/Charm",
        price: "₹ 23",
        rating: 3.9,
        image: "image/all/elbrache.webp",
        delivery: "Free Delivery (5-7 Days)",
        totalRatings: 180,
        totalReviews: 90,
        ratingBreakdown: { "Excellent": 80, "Very Good": 50, "Good": 40, "Average": 10, "Poor": 0 }
    },
    "neckgold": {
        title: "Traditional gold peacock necklace",
        desc: "A heavy, traditional gold necklace with a large pendant in the shape of a peacock, decorated with colorful enamel or semi-precious stones.",
        offer: "Bridal Collection Piece.",
        category: "Necklace/Traditional",
        price: "₹ 2,230",
        rating: 4.8,
        image: "image/all/neckgold.jpg",
        delivery: "Insured & Express Delivery (1-3 Days)",
        totalRatings: 90,
        totalReviews: 45,
        ratingBreakdown: { "Excellent": 80, "Very Good": 10, "Good": 0, "Average": 0, "Poor": 0 }
    },
    "riingbround": {
        title: "Open-ended rose-gold toned Ring",
        desc: "A trendy open-ended ring in a rose-gold tone, adorned with a winding design of small, marquise-cut and white stones.",
        offer: "Adjustable Comfort.",
        category: "Ring/Fashion",
        price: "₹ 930",
        rating: 4.4,
        image: "image/all/riingbround.webp",
        delivery: "Free Delivery (3-5 Days)",
        totalRatings: 120,
        totalReviews: 60,
        ratingBreakdown: { "Excellent": 70, "Very Good": 40, "Good": 10, "Average": 0, "Poor": 0 }
    },
    "penset": {
        title: "Rose gold-toned pendant set",
        desc: "A beautiful rose gold-toned pendant set (necklace and earrings) featuring a sparkling flower-like motif with small white stones.",
        offer: "Matching Set Discount.",
        category: "Set/Pendant",
        price: "₹ 390",
        rating: 4.1,
        image: "image/all/penset.jpg",
        delivery: "Free Delivery (4-6 Days)",
        totalRatings: 170,
        totalReviews: 85,
        ratingBreakdown: { "Excellent": 90, "Very Good": 50, "Good": 20, "Average": 5, "Poor": 5 }
    },
    "earmod": {
        title: "Modern silver stud earrings",
        desc: "Contemporary silver stud earrings designed to look like a vertical branch or stem with small leaves, offering a unique, organic feel.",
        offer: "Unique Modern Design.",
        category: "Earring/Studs",
        price: "₹ 760",
        rating: 4.6,
        image: "image/all/earmod.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 85,
        totalReviews: 40,
        ratingBreakdown: { "Excellent": 55, "Very Good": 25, "Good": 5, "Average": 0, "Poor": 0 }
    },
    "necksimple": {
        title: "Delicate gold necklace",
        desc: "A fine gold necklace with a centerpiece of leaf-shaped clear stones and a single hanging pearl drop, providing a gentle sparkle.",
        offer: "Luxury Look for Less.",
        category: "Necklace/Pearl",
        price: "₹ 4,330",
        rating: 4.7,
        image: "image/all/necksimple.webp",
        delivery: "Insured & Express Delivery (1-3 Days)",
        totalRatings: 115,
        totalReviews: 60,
        ratingBreakdown: { "Excellent": 75, "Very Good": 30, "Good": 5, "Average": 5, "Poor": 0 }
    },
    "pensetg": {
        title: "Pendant necklace",
        desc: "A simple yet bold gold-toned pendant necklace featuring a stylized gold leaf design, perfect for a subtle statement.",
        offer: "Nature Inspired.",
        category: "Necklace/Pendant",
        price: "₹ 1,720",
        rating: 4.3,
        image: "image/all/pensetg.webp",
        delivery: "Free Express Delivery (2-4 Days)",
        totalRatings: 100,
        totalReviews: 50,
        ratingBreakdown: { "Excellent": 60, "Very Good": 30, "Good": 5, "Average": 5, "Poor": 0 }
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