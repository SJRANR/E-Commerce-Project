// ----------------------------------------------------
// 1. Product Data (Your original array)
// ----------------------------------------------------
const PRODUCTS = [
    { id: "1", title: "Printed Midi Dress", price: 1000, oldPrice: 1300, discount: 25, category: "dress", img: "images/product1.jpg", desc: "Lightweight printed midi dress. Round neck, three-quarter sleeves. A perfect blend of style and comfort for your everyday wear.", rating: 4.2, sizes: ["XS", "S", "M", "L"], reviews: 120 },
    { id: "2", title: "Judithar Kurta Set With Dupatta", price: 1200, oldPrice: 1700, discount: 29.41, category: "dress", img: "images/product2.jpg", desc: "Classic Judithar Kurta set with matching dupatta. Comfortable cotton blend fabric, ideal for ethnic occasions.", rating: 4.5, sizes: ["XS", "S", "M", "L", "XL"], reviews: 250 },
    { id: "3", title: "Peplum Dress", price: 1200, oldPrice: 1700, discount: 29.41, category: "dress", img: "images/product3.jpg", desc: "Stylish peplum silhouette for casual & parties. Features a flattering cut and modern design.", rating: 3.9, sizes: ["S", "M", "L"], reviews: 88 },
    { id: "4", title: "Net Embroidered Semi-Stitched", price: 2000, oldPrice: 2700, discount: 25.93, category: "dress", img: "images/product4.jpeg", desc: "Net embroidered semi-stitched fabric. Elegant work for a bespoke fit, perfect for weddings.", rating: 4.0, sizes: ["S", "M", "L"], reviews: 150 },
    { id: "5", title: "Designer Lehenga Choli", price: 4500, oldPrice: 6000, discount: 25, category: "lehenga", img: "images/product5.jpg", desc: "Heavily embroidered designer lehenga choli. Ready for the grandest occasions.", rating: 4.8, sizes: ["S", "M", "L"], reviews: 320 },
    { id: "6", title: "Printed Georgette Saree", price: 900, oldPrice: 1200, discount: 25, category: "saree", img: "images/product6.jpg", desc: "Lightweight printed georgette saree with a beautiful drape. Easy to manage and stylish.", rating: 4.1, sizes: ["One Size"], reviews: 190 },
    { id: "7", title: "Kids' Party Frock", price: 800, oldPrice: 1000, discount: 20, category: "girls", img: "images/product7.jpg", desc: "Fluffy pink party frock for girls. Makes any little one feel like a princess.", rating: 4.6, sizes: ["2Y", "4Y", "6Y", "8Y"], reviews: 140 },
    { id: "8", title: "Silk Saree with Contrast Border", price: 3500, oldPrice: 4200, discount: 16.67, category: "saree", img: "images/product8.jpg", desc: "Traditional silk saree with rich color and a striking contrast border. A timeless classic.", rating: 4.7, sizes: ["One Size"], reviews: 95 },
    { id: "9", title: "Anarkali Suit", price: 2800, oldPrice: 3500, discount: 20, category: "dress", img: "images/product9.jpg", desc: "Flowing Anarkali suit with delicate embellishments. Perfect for formal events.", rating: 4.3, sizes: ["M", "L", "XL"], reviews: 110 },
    { id: "10", title: "Girls' Denim Overalls", price: 1500, oldPrice: 2000, discount: 25, category: "girls", img: "images/product10.jpg", desc: "Stylish denim overalls for a trendy look. Durable and comfortable playwear.", rating: 4.0, sizes: ["3Y", "5Y", "7Y"], reviews: 75 }
];

// ----------------------------------------------------
// 2. State & DOM Elements (Unchanged)
// ----------------------------------------------------
const productGridContainer = document.getElementById('product-grid-view');
const productDetailView = document.getElementById('product-detail-view');
const productGrid = document.getElementById('product-grid');

const detailImg = document.getElementById('detail-img');
const detailTitle = document.getElementById('detail-title');
const detailPrice = document.getElementById('detail-price');
const detailOldPrice = document.getElementById('detail-old-price');
const detailDiscount = document.getElementById('detail-discount');
const detailDesc = document.getElementById('detail-desc');
const detailRating = document.getElementById('detail-rating');
const detailSizes = document.getElementById('detail-sizes');
const detailBack = document.getElementById('detail-back');
const detailAddToCartBtn = document.getElementById('detail-add-to-cart-btn');
const detailBuyNowBtn = document.getElementById('detail-buy-now-btn');
const sizesTitle = document.getElementById('sizes-title');

const categoryFilter = document.getElementById('category-filter');
const searchInput = document.getElementById('search-input');
const cartIcon = document.getElementById('cart-icon');
const cartPanel = document.getElementById('cart-panel');
const cartCloseBtn = document.getElementById('cart-close');
const cartClearBtn = document.getElementById('cart-clear');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCountSpan = document.getElementById('cart-item-count');

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let selectedSize = null;
let selectedDetailProduct = null;


// ----------------------------------------------------
// 3. Helper Functions
// ----------------------------------------------------

const saveState = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
};

/**
 * Removes an item completely from the cart array based on its uniqueId.
 * @param {string} uniqueId - The unique ID of the cart item to remove.
 */
const removeItem = (uniqueId) => {
    const itemIndex = cart.findIndex(item => item.uniqueId === uniqueId);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        refreshCartUI();
    }
};

const refreshCartUI = () => {
    cartItemsList.innerHTML = '';
    let total = 0;
    let itemCount = 0;

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<div class="cart-empty">Your cart is empty.</div>';
    } else {
        cart.forEach(item => {
            total += item.price * item.quantity;
            itemCount += item.quantity;

            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.dataset.uniqueId = item.uniqueId;

            // --- Updated innerHTML to include the Remove button ---
            itemDiv.innerHTML = `
                <img src="${item.img}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-details">Size: ${item.size}</div>
                    <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn change-qty" data-action="decrease" data-id="${item.uniqueId}">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn change-qty" data-action="increase" data-id="${item.uniqueId}">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" data-id="${item.uniqueId}" title="Remove item">
                    <i class="ri-close-line"></i>
                </button>
            `;
            // ------------------------------------------------------

            cartItemsList.appendChild(itemDiv);
        });
    }

    cartTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
    cartCountSpan.textContent = itemCount;
    saveState();
};

const addToCart = (product, size) => {
    const uniqueId = `${product.id}-${size}`;
    const existingItem = cart.find(item => item.uniqueId === uniqueId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            img: product.img,
            size: size,
            quantity: 1,
            uniqueId: uniqueId
        });
    }
    refreshCartUI();
};

const changeQuantity = (uniqueId, change) => {
    const itemIndex = cart.findIndex(item => item.uniqueId === uniqueId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
    }
    refreshCartUI();
};

const renderProducts = (filteredProducts) => {
    productGrid.innerHTML = '';

    const wishedProductIds = wishlist.map(item => item.id);

    filteredProducts.forEach(product => {
        const isWished = wishedProductIds.includes(product.id);
        const heartIconClass = isWished ? 'ri-heart-fill wished' : 'ri-heart-line';

        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.productId = product.id;

        card.innerHTML = `
            <div class="product-main-area" data-id="${product.id}">
                <img src="${product.img}" alt="${product.title}" class="product-image">
                <div class="product-details">
                    <h3 class="product-name">${product.title}</h3>
                    <p class="product-price">
                        ₹${product.price.toLocaleString('en-IN')} 
                        <span class="mrp">MRP ₹${product.oldPrice.toLocaleString('en-IN')}</span> 
                        <span class="discount">(${product.discount.toFixed(0)}% OFF)</span>
                    </p>
                </div>
            </div>
            <div class="product-actions">
                <button class="add-to-cart-btn" data-id="${product.id}"><i class="ri-shopping-bag-line"></i> Add to Cart</button>
                <button class="wishlist-btn" data-id="${product.id}" aria-label="Add to Wishlist">
                    <i class="${heartIconClass}"></i>
                </button>
            </div>
        `;
        productGrid.appendChild(card);
    });
};

// --- View Switching Logic (Unchanged) ---
const openProductDetail = (productId) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    selectedDetailProduct = product;
    selectedSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : "NA";

    detailImg.src = product.img;
    detailImg.alt = product.title;
    detailTitle.textContent = product.title;
    detailPrice.textContent = `₹${product.price.toLocaleString('en-IN')}`;
    detailOldPrice.textContent = `₹${product.oldPrice.toLocaleString('en-IN')}`;
    detailDiscount.textContent = `(${product.discount.toFixed(0)}% OFF)`;
    detailDesc.textContent = product.desc;
    detailRating.textContent = product.rating.toFixed(1);
    document.querySelector('.review-count').textContent = `(${product.reviews} reviews)`;

    detailSizes.innerHTML = '';
    if (product.sizes && product.sizes.length > 0) {
        sizesTitle.classList.remove('hidden');
        product.sizes.forEach(size => {
            const pill = document.createElement('span');
            pill.className = `option-pill size-option ${size === selectedSize ? 'selected' : ''}`;
            pill.textContent = size;
            pill.dataset.size = size;
            detailSizes.appendChild(pill);
        });
    } else {
        sizesTitle.classList.add('hidden');
    }

    productGridContainer.classList.add('hidden');
    productDetailView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const closeProductDetail = () => {
    selectedDetailProduct = null;
    selectedSize = null;
    productDetailView.classList.add('hidden');
    productGridContainer.classList.remove('hidden');
};

// ----------------------------------------------------
// 4. Event Handlers
// ----------------------------------------------------

const applyFilters = () => {
    const selectedCategory = categoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filtered = PRODUCTS.filter(product => {
        const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
        const searchMatch = !searchTerm || product.title.toLowerCase().includes(searchTerm) || product.desc.toLowerCase().includes(searchTerm);
        return categoryMatch && searchMatch;
    });

    renderProducts(filtered);
};

const openCart = () => {
    cartPanel.setAttribute('aria-hidden', 'false');
    refreshCartUI();
};

const closeCart = () => {
    cartPanel.setAttribute('aria-hidden', 'true');
};

const clearCart = () => {
    if (cart.length > 0 && confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        refreshCartUI();
    }
};


// Unified Grid Listener for Wishlist, Add to Cart, and Detail View (Unchanged)
productGrid.addEventListener('click', (e) => {
    const target = e.target;
    const card = target.closest('.product-card');
    if (!card) return;
    const productId = card.dataset.productId;
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    if (target.closest('.wishlist-btn')) {
        e.stopPropagation();
        const btn = target.closest('.wishlist-btn');
        const icon = btn.querySelector('i');

        const existingItemIndex = wishlist.findIndex(item => item.id === productId);

        if (existingItemIndex === -1) {
            wishlist.push({
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.img
            });
            icon.classList.remove('ri-heart-line');
            icon.classList.add('ri-heart-fill', 'wished');
        } else {
            wishlist.splice(existingItemIndex, 1);
            icon.classList.remove('ri-heart-fill', 'wished');
            icon.classList.add('ri-heart-line');
        }

        saveState();
        return;
    }

    if (target.closest('.add-to-cart-btn')) {
        e.stopPropagation();
        const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'NA';
        addToCart(product, defaultSize);
        return;
    }

    if (target.closest('.product-main-area')) {
        openProductDetail(productId);
    }
});


// Detail View Options and Actions Listener (Unchanged)
productDetailView.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('size-option')) {
        document.querySelectorAll('.size-option').forEach(p => p.classList.remove('selected'));
        target.classList.add('selected');
        selectedSize = target.dataset.size;
        return;
    }

    if (target.id === 'detail-add-to-cart-btn') {
        if (!selectedDetailProduct) return;

        const hasSizes = selectedDetailProduct.sizes && selectedDetailProduct.sizes.length > 0;
        const size = hasSizes ? selectedSize : "NA";

        if (hasSizes && size === null) {
            alert("Please select a size first.");
            return;
        }
        addToCart(selectedDetailProduct, size);
        return;
    }

    if (target.id === 'detail-buy-now-btn') {
        if (!selectedDetailProduct) return;

        const hasSizes = selectedDetailProduct.sizes && selectedDetailProduct.sizes.length > 0;
        const size = hasSizes ? selectedSize : "NA";

        if (hasSizes && size === null) {
            alert("Please select a size first.");
            return;
        }

        addToCart(selectedDetailProduct, size);
        closeProductDetail();
        openCart();

        setTimeout(() => document.getElementById('checkout-btn').click(), 200);
        return;
    }
});


// Cart panel quantity updates AND REMOVE ITEM listener (UPDATED)
cartItemsList.addEventListener('click', (e) => {
    const target = e.target;
    const uniqueId = target.closest('button').dataset.id;
    if (!uniqueId) return;

    // Handle Quantity Change
    if (target.closest('.change-qty')) {
        const action = target.closest('.change-qty').dataset.action;
        if (action === 'increase') {
            changeQuantity(uniqueId, 1);
        } else if (action === 'decrease') {
            changeQuantity(uniqueId, -1);
        }
    }

    // Handle Item Removal
    if (target.closest('.remove-item-btn')) {
        removeItem(uniqueId);
    }
});


// Attach general listeners (Unchanged)
categoryFilter.addEventListener('change', applyFilters);
searchInput.addEventListener('input', applyFilters);
cartIcon.addEventListener('click', openCart);
cartCloseBtn.addEventListener('click', closeCart);
cartClearBtn.addEventListener('click', clearCart);
detailBack.addEventListener('click', closeProductDetail);
document.getElementById("home-link").addEventListener("click", closeProductDetail);

document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items before checking out.');
        return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Checkout initiated - Total: ₹${total.toLocaleString('en-IN')}\n\n(This is a demo – integrate real payment & backend)`);
    cart = [];
    refreshCartUI();
    closeCart();
});

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(PRODUCTS);
    refreshCartUI();
});