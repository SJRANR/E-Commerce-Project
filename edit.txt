// ----------------------------------------------------
// 1. Product Data (Your original array)
// ----------------------------------------------------
const PRODUCTS = [
    { id: "1", title: "Printed Midi Dress", price: 1000, oldPrice: 1300, discount: 25, category: "dress", img: "images/child1.jpeg", desc: "Lightweight printed midi dress. Round neck, three-quarter sleeves.", rating: 4.2, sizes: ["XS", "S", "M", "L"] },
    { id: "2", title: "Judithar kurta set with Dupatta", price: 1200, oldPrice: 1700, discount: 29.41, category: "dress", img: "images/images/child2.webp", desc: "Classic Judithar Kurta set with matching dupatta. Comfortable cotton blend fabric.", rating: 4.5, sizes: ["XS", "S", "M", "L", "XL"] }, // Specific sizes for Judithar
    { id: "3", title: "Peplum Dress", price: 1200, oldPrice: 1700, discount: 29.41, category: "dress", img: "images/images/child3.webp", desc: "Stylish peplum silhouette for casual & parties.", rating: 3.9, sizes: ["S", "M", "L"] },
    { id: "4", title: "Net Embroidered Semi-Stitched", price: 2000, oldPrice: 2700, discount: 25.93, category: "dress", img: "images/images/child4.webp", desc: "Net embroidered semi-stitched fabric.", rating: 4.0, sizes: [] },
    { id: "5", title: "V shape Model dress", price: 1200, oldPrice: 1700, discount: 29.41, category: "saree", img: "images/images/child5.webp", desc: "Classic Kanjivaram inspired soft silk saree.", rating: 4.7, sizes: [] },
    { id: "6", title: "Model Cown", price: 500, oldPrice: 700, discount: 28.57, category: "girls", img: "images/images/child6.webp", desc: "Comfortable chudithar for girls.", rating: 4.1, sizes: ["2Y", "4Y", "6Y", "8Y"] },
    { id: "7", title: "Navy Blue Cown", price: 1200, oldPrice: 1700, discount: 29.41, category: "saree", img: "images/images/child7.jpeg", desc: "Elegant chiffon saree for special occasions.", rating: 4.3, sizes: [] },
    { id: "8", title: "Simple Cotton Dress", price: 3200, oldPrice: 4000, discount: 20, category: "saree", img: "images/images/child8.webp", desc: "Printed satin saree with smooth finish.", rating: 4.6, sizes: [] },
    { id: "9", title: "White Cown", price: 4500, oldPrice: 5000, discount: 10, category: "saree", img: "images/images/child9.jpg", desc: "Traditional white and gold saree.", rating: 4.8, sizes: [] },
    { id: "10", title: "Graphic Tee and Jogger/Sweatpant Set", price: 2000, oldPrice: 3000, discount: 33.33, category: "saree", img: "images/images/child10.jpeg", desc: "Violet silk saree with shimmer.", rating: 4.2, sizes: [] },
    { id: "11", title: "Shimmer Tutu Dress", price: 22000, oldPrice: 25000, discount: 12, category: "lehenga", img: "images/images/child11.jpg", desc: "Heavily embellished wedding lehenga.", rating: 4.9, sizes: ["S", "M", "L", "XL"] },
    { id: "12", title: "Flower Girl Dress", price: 18000, oldPrice: 20000, discount: 10, category: "lehenga", img: "images/images/child12.jpg", desc: "Purple silk lehenga set with choli.", rating: 4.4, sizes: ["S", "M", "L", "XL"] }
];


const productMap = PRODUCTS.reduce((acc, p) => {
    acc[p.id] = p;
    return acc;
}, {});

// ----------------------------------------------------
// 2. DOM Elements & State
// ----------------------------------------------------
const productsGrid = document.getElementById('products-grid');
const categoryFilter = document.getElementById('category-filter');
const searchInput = document.getElementById('search-input');
const cartPanel = document.getElementById('cart-panel');
const cartIcon = document.getElementById('cart-icon');
const cartCloseBtn = document.getElementById('cart-close');
const cartClearBtn = document.getElementById('cart-clear');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const detailView = document.getElementById('product-detail-view');
const detailBack = document.getElementById('detail-back-btn');
const shopViewWrapper = document.getElementById('shop-view-wrapper');

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let selectedDetailProduct = null;
let selectedSize = null;

// ----------------------------------------------------
// 3. Helper Functions
// ----------------------------------------------------

// Function to generate star rating HTML
function getRatingHtml(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="ri-star-fill"></i>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="ri-star-half-fill"></i>';
        } else {
            stars += '<i class="ri-star-line" style="color:#e0e0e0;"></i>';
        }
    }
    return `<div class="rating-stars">${stars}</div>`;
}

// Format price with INR symbol and thousands separator
function formatPrice(price) {
    if (price === null || price === undefined) return '';
    return `₹${Number(price).toLocaleString('en-IN')}`;
}

// ----------------------------------------------------
// 4. Product Grid Rendering (Main Function)
// ----------------------------------------------------
function renderProducts(products) {
    productsGrid.innerHTML = '';

    if (products.length === 0) {
        productsGrid.innerHTML = '<p class="no-results">No products match your current filters.</p>';
        return;
    }

    products.forEach(product => {
        // Render card using the simplified design
        const productHtml = `
            <div class="product-item" data-product-id="${product.id}" onclick="showProductDetail('${product.id}')">
                <div class="image-wrapper">
                    <img src="${product.img}" alt="${product.title}">
                    <button class="like-button" onclick="event.stopPropagation(); toggleWishlist('${product.id}');">
                        <i class="ri-heart-line"></i>
                    </button>
                </div>
                <div class="product-info">
                    <p class="product-item-price">${formatPrice(product.price)}</p>
                    <h3>${product.title}</h3>
                    ${getRatingHtml(product.rating)}
                </div>
            </div>
        `;
        productsGrid.insertAdjacentHTML('beforeend', productHtml);
    });
    updateWishlistUI();
}

// ----------------------------------------------------
// 5. Filtering and Searching
// ----------------------------------------------------
function applyFilters() {
    const category = categoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredProducts = PRODUCTS.filter(product => {
        const categoryMatch = category === 'all' || product.category === category;
        const searchMatch = product.title.toLowerCase().includes(searchTerm) || product.desc.toLowerCase().includes(searchTerm);
        return categoryMatch && searchMatch;
    });

    renderProducts(filteredProducts);
}

// ----------------------------------------------------
// 6. Product Detail View Functions (UPDATED to use full product data)
// ----------------------------------------------------

function showProductDetail(productId) {
    const product = productMap[productId];
    if (!product) return;

    selectedDetailProduct = product;

    // 1. Update general info
    document.getElementById('detail-back-btn').style.display = 'block';
    document.getElementById('detail-title').textContent = product.title;
    document.getElementById('detail-desc').textContent = product.desc; // Use full description
    document.getElementById('detail-main-img').src = product.img;
    document.getElementById('detail-current-price').textContent = formatPrice(product.price);

    const oldPriceEl = document.getElementById('detail-old-price');
    const discountEl = document.getElementById('detail-discount');

    // Show old price and discount if available in the detail view
    if (product.oldPrice && product.discount) {
        oldPriceEl.textContent = formatPrice(product.oldPrice);
        oldPriceEl.style.display = 'inline';
        discountEl.textContent = `${Math.round(product.discount)}% OFF`;
        discountEl.style.display = 'inline';
    } else {
        oldPriceEl.style.display = 'none';
        discountEl.style.display = 'none';
    }

    // 2. Update Rating
    document.getElementById('detail-rating').innerHTML = getRatingHtml(product.rating);

    // 3. Render Size Options
    renderSizeOptions(product);

    // 4. Show the detail view and hide the main grid
    shopViewWrapper.classList.add('hidden');
    detailView.classList.add('active');
    detailView.setAttribute('aria-hidden', 'false');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderSizeOptions(product) {
    const sizesContainer = document.getElementById('detail-sizes');
    sizesContainer.innerHTML = '';

    if (product.sizes && product.sizes.length > 0) {
        // Add a prompt for size selection
        sizesContainer.insertAdjacentHTML('beforeend', '<div><strong>Available Sizes:</strong></div>');

        product.sizes.forEach((size, index) => {
            const button = document.createElement('button');
            button.className = 'size-btn';
            button.textContent = size;
            button.setAttribute('data-size', size);
            button.onclick = () => selectSize(size);

            // Set the first size as active by default and select it
            if (index === 0) {
                button.classList.add('active');
                selectedSize = size;
            }
            sizesContainer.appendChild(button);
        });
    } else {
        sizesContainer.innerHTML = '<span class="no-sizes-text">One size / No size selection needed.</span>';
        selectedSize = "NA"; // Placeholder for one-size products
    }
}

function selectSize(size) {
    selectedSize = size;
    // Update active class on size buttons
    document.querySelectorAll('#detail-sizes .size-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-size') === size) {
            btn.classList.add('active');
        }
    });
}

function closeProductDetail() {
    detailView.classList.remove('active');
    detailView.setAttribute('aria-hidden', 'true');
    shopViewWrapper.classList.remove('hidden');
    selectedDetailProduct = null;
    selectedSize = null;
    document.getElementById('detail-back-btn').style.display = 'none';
    // Re-render to ensure grid UI is fresh (e.g., wishlist buttons)
    renderProducts(PRODUCTS);
}


// ----------------------------------------------------
// 7. Cart & Wishlist Logic (Kept for completeness)
// ----------------------------------------------------

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    cartTotalElement.textContent = formatPrice(total);
}

function refreshCartUI() {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty.</div>';
    } else {
        cart.forEach(item => {
            const sizeDisplay = item.size && item.size !== "NA" ? ` | Size: ${item.size}` : '';
            const cartItemHtml = `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-details">
                        <div class="item-name-price">
                            <div class="item-name">${item.name}</div>
                            <div class="item-price">${formatPrice(item.price)}</div>
                        </div>
                        <div class="item-options">
                             <span>Qty: ${item.qty}</span>${sizeDisplay}
                        </div>
                    </div>
                    <button class="remove-from-cart" onclick="removeFromCart('${item.id}')" title="Remove item">
                        <i class="ri-delete-bin-line"></i>
                    </button>
                </div>
            `;
            cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHtml);
        });
    }
    updateCartTotal();
    const cartCounter = document.getElementById('cart-counter');
    if (cartCounter) {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        cartCounter.textContent = totalItems > 99 ? '99+' : totalItems;
        cartCounter.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function addToCart(product, size) {
    const itemPrice = product.price;
    const cartId = `${product.id}-${size}`;

    let existingItemIndex = cart.findIndex(i => i.id === cartId);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].qty += 1;
    } else {
        cart.push({
            id: cartId,
            name: product.title,
            price: itemPrice,
            image: product.img,
            qty: 1,
            size: size
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    refreshCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    refreshCartUI();
}

function clearCart() {
    if (confirm("Are you sure you want to clear your cart?")) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        refreshCartUI();
    }
}

function toggleWishlist(productId) {
    const product = productMap[productId];
    if (!product) return;

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const existingItem = wishlist.find(item => item.id === productId);
    const button = document.querySelector(`.product-item[data-product-id="${productId}"] .like-button`);

    if (!existingItem) {
        wishlist.push({
            id: productId,
            name: product.title,
            price: formatPrice(product.price),
            image: product.img
        });
    } else {
        wishlist = wishlist.filter(i => i.id !== productId);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
}

function updateWishlistUI() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistIds = wishlist.map(item => item.id);
    document.querySelectorAll('.product-item .like-button').forEach(button => {
        const productId = button.closest('.product-item').getAttribute('data-product-id');
        if (wishlistIds.includes(productId)) {
            button.innerHTML = '<i class="ri-heart-fill"></i>';
            button.classList.add('liked');
        } else {
            button.innerHTML = '<i class="ri-heart-line"></i>';
            button.classList.remove('liked');
        }
    });
}

function openCart() {
    cartPanel.classList.add('active');
    cartPanel.setAttribute('aria-hidden', 'false');
}

function closeCart() {
    cartPanel.classList.remove('active');
    cartPanel.setAttribute('aria-hidden', 'true');
}

// ----------------------------------------------------
// 8. Event Listeners & Initialization
// ----------------------------------------------------

document.getElementById('detail-add-to-cart-btn').addEventListener('click', () => {
    if (!selectedDetailProduct) return;

    // Check if the product has sizes and if a size is selected
    const hasSizes = selectedDetailProduct.sizes && selectedDetailProduct.sizes.length > 0;
    const size = hasSizes ? selectedSize : "NA";

    if (hasSizes && size === null) {
        alert("Please select a size first.");
        return;
    }

    addToCart(selectedDetailProduct, size);
    alert(`Added ${selectedDetailProduct.title} (${size !== "NA" ? size : 'One Size'}) to cart!`);
});

document.getElementById('detail-buy-now-btn').addEventListener('click', () => {
    if (!selectedDetailProduct) return;

    const hasSizes = selectedDetailProduct.sizes && selectedDetailProduct.sizes.length > 0;
    const size = hasSizes ? selectedSize : "NA";

    if (hasSizes && size === null) {
        alert("Please select a size first.");
        return;
    }

    addToCart(selectedDetailProduct, size);
    alert("Proceeding to checkout...");
});

categoryFilter.addEventListener('change', applyFilters);
searchInput.addEventListener('input', applyFilters);
cartIcon.addEventListener('click', openCart);
cartCloseBtn.addEventListener('click', closeCart);
cartClearBtn.addEventListener('click', clearCart);
detailBack.addEventListener('click', closeProductDetail);
document.getElementById("home-link").addEventListener("click", closeProductDetail);


// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(PRODUCTS);
    refreshCartUI();

    // Fallback for image loading error
    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("error", () => {
            img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23f3f3f3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='20'%3EImage not found%3C/text%3E%3C/svg%3E";
        });
    });
});