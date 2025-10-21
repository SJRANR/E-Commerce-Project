document.addEventListener('DOMContentLoaded', () => {
            // --- Product Data ---
            // Note: The structure of the product data is identical to your previous input.
            const PRODUCTS = [
                { id: "1", title: "Printed Midi Dress", price: 1000, oldPrice: 1300, discount: 25, category: "dresses", img: "images/child1.jpeg", desc: "Lightweight printed midi dress. Round neck, three-quarter sleeves.", rating: 4.2, sizes: ["XS", "S", "M", "L"], colors: ["blue", "pink"] },
                { id: "2", title: "Judithar kurta set with Dupatta", price: 1200, oldPrice: 1700, discount: 29.41, category: "dresses", img: "images/images/child2.webp", desc: "Classic Judithar Kurta set with matching dupatta. Comfortable cotton blend fabric.", rating: 4.5, sizes: ["XS", "S", "M", "L", "XL"], colors: ["brown", "pink"] },
                { id: "3", title: "Peplum Dress", price: 1200, oldPrice: 1700, discount: 29.41, category: "dresses", img: "images/images/child3.webp", desc: "Stylish peplum silhouette for casual & parties.", rating: 3.9, sizes: ["S", "M", "L"], colors: ["pink", "brown", "blue"] },
                { id: "4", title: "Net Embroidered Semi-Stitched", price: 2000, oldPrice: 2700, discount: 25.93, category: "dresses", img: "images/images/child4.webp", desc: "Net embroidered semi-stitched fabric.", rating: 4.0, sizes: ["S", "M", "L"], colors: ["pink"] },
                { id: "5", title: "V shape Model dress", price: 1200, oldPrice: 1700, discount: 29.41, category: "dresses", img: "images/images/child5.webp", desc: "Elegant V-shape dress.", rating: 4.7, sizes: ["S", "M", "L"] },
                { id: "6", title: "Model Cown", price: 500, oldPrice: 700, discount: 28.57, category: "girls", img: "images/images/child6.webp", desc: "Comfortable model gown for girls.", rating: 4.1, sizes: ["2Y", "4Y", "6Y", "8Y"] },
                { id: "7", title: "Navy Blue Cown", price: 1200, oldPrice: 1700, discount: 29.41, category: "girls", img: "images/images/child7.jpeg", desc: "Trendy navy blue gown.", rating: 4.3, sizes: ["2Y", "4Y", "6Y", "8Y"] },
                { id: "8", title: "Simple Cotton Dress", price: 3200, oldPrice: 4000, discount: 20, category: "dresses", img: "images/images/child8.webp", desc: "Simple and comfortable cotton dress.", rating: 4.6, sizes: ["S", "M", "L"] },
                { id: "9", title: "White Cown", price: 4500, oldPrice: 5000, discount: 10, category: "girls", img: "images/images/child9.jpg", desc: "Traditional white gown.", rating: 4.8, sizes: ["4Y", "6Y", "8Y"] },
                { id: "10", title: "Graphic Tee and Jogger/Sweatpant Set", price: 2000, oldPrice: 3000, discount: 33.33, category: "girls", img: "images/images/child10.jpeg", desc: "Casual graphic tee and jogger set.", rating: 4.2, sizes: ["XS", "S", "M"] },
                { id: "11", title: "Shimmer Tutu Dress", price: 2200, oldPrice: 2500, discount: 12, category: "girls", img: "images/images/child11.jpg", desc: "Sparkly tutu dress for special occasions.", rating: 4.9, sizes: ["2Y", "4Y", "6Y"] },
                { id: "12", title: "Flower Girl Dress", price: 1800, oldPrice: 2000, discount: 10, category: "girls", img: "images/images/child12.jpg", desc: "Beautiful flower girl dress.", rating: 4.4, sizes: ["4Y", "6Y", "8Y"] }
            ];

            // --- DOM Elements ---
            const productGrid = document.getElementById('product-grid');
            const modal = document.getElementById('product-modal');
            const modalContent = document.getElementById('modal-product-details');
            const closeModalBtn = modal.querySelector('.close-btn');
            const backToShopBtn = document.getElementById('back-to-shop-btn');
            const categoryFilter = document.getElementById('category-filter');
            const searchInput = document.getElementById('search-input');
            const openCartBtn = document.getElementById('open-cart');
            const clearCartBtn = document.getElementById('clear-cart-btn');
            const cartSidebar = document.getElementById('cart-sidebar');
            const cartItemsList = document.getElementById('cart-items');
            const cartTotalSpan = document.getElementById('cart-total');
            const cartCountSpan = document.getElementById('cart-item-count');
            const checkoutBtn = document.getElementById('checkout-btn');

            let cart = [];
            // Use localStorage to persist wishlist state for the demo
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

            // --- Helper Functions ---
            document.querySelectorAll('.wishlist-btn').forEach(button => {
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

            // Function to render the product grid based on a filtered array
            const renderProducts = (filteredProducts) => {
                productGrid.innerHTML = '';
                filteredProducts.forEach(product => {
                    const productItem = document.createElement('div');
                    productItem.className = 'product-item';
                    productItem.dataset.productId = product.id;

                    const isWished = wishlist.includes(product.id);
                    const heartClass = isWished ? 'fa fa-heart wished' : 'fa fa-heart-o';

                    productItem.innerHTML = `
                <div class="product-main-area" data-id="${product.id}">
                    <img src="${product.img}" alt="${product.title}" class="product-image">
                    <div class="product-details">
                        <h2 class="product-name">${product.title}</h2>
                        <p class="product-price">
                            ₹${product.price.toLocaleString('en-IN')} 
                            <span class="mrp">MRP ₹${product.oldPrice.toLocaleString('en-IN')}</span> 
                            <span class="discount">${product.discount.toFixed(0)}% OFF</span>
                        </p>
                    </div>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-id="${product.id}">Add to cart</button>
                    <button class="wishlist-btn" data-id="${product.id}" aria-label="Add to Wishlist">
                        <i class="${heartClass}"></i>
                    </button>
                </div>
            `;
                    productGrid.appendChild(productItem);
                });
            };

            // Filter and Search Logic
            const filterAndSearch = () => {
                const selectedCategory = categoryFilter.value.toLowerCase();
                const searchTerm = searchInput.value.toLowerCase().trim();

                const filtered = PRODUCTS.filter(product => {
                    const categoryMatch = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory;
                    const searchMatch = !searchTerm || product.title.toLowerCase().includes(searchTerm) || product.desc.toLowerCase().includes(searchTerm);
                    return categoryMatch && searchMatch;
                });

                renderProducts(filtered);
            };

            // Update cart totals and count
            const updateCartTotals = () => {
                const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

                cartTotalSpan.textContent = total.toLocaleString('en-IN');
                cartCountSpan.textContent = totalItems;
            };

            // Render the cart sidebar content
            const renderCart = () => {
                cartItemsList.innerHTML = '';

                if (cart.length === 0) {
                    cartItemsList.innerHTML = '<p style="text-align: center; color: #888;">Your cart is empty.</p>';
                } else {
                    cart.forEach(item => {
                        const cartItemDiv = document.createElement('div');
                        cartItemDiv.className = 'cart-item';
                        cartItemDiv.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <div class="item-info">
                        <p class="cart-item-name">${item.name}</p>
                        <p>Size: ${item.size || 'N/A'}, Color: ${item.color || 'N/A'}</p>
                        <p>Quantity: ${item.quantity} x ₹${item.price.toLocaleString('en-IN')}</p>
                        <p>Subtotal: ₹${(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                `;
                        cartItemsList.appendChild(cartItemDiv);
                    });
                }
                updateCartTotals();
            };

            // Add a product to the cart
            const addToCart = (product, size, color) => {
                const uniqueId = `${product.id}-${size}-${color || ''}`;

                const existingItem = cart.find(item => item.uniqueId === uniqueId);

                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        id: product.id,
                        name: product.title,
                        price: product.price,
                        img: product.img,
                        size: size,
                        color: color,
                        quantity: 1,
                        uniqueId: uniqueId
                    });
                }

                renderCart();
                cartSidebar.classList.add('open');
            };

            // Function to handle opening the Product Details Modal
            const openProductModal = (productId) => {
                    const product = PRODUCTS.find(p => p.id === productId);

                    if (product) {
                        // Determine a size/color to pre-select, or default to first options
                        const defaultSize = product.sizes.length > 0 ? product.sizes[0] : null;
                        const defaultColor = product.colors && product.colors.length > 0 ? product.colors[0] : null;

                        // Build HTML for sizes
                        const sizeSelectorHtml = product.sizes && product.sizes.length > 0 ? `
                <h4>Size</h4>
                <div class="size-selector" id="modal-size-selector">
                    ${product.sizes.map(size => 
                        `<span class="size-option ${size === defaultSize ? 'selected' : ''}" data-size="${size}">${size}</span>`
                    ).join('')}
                </div>
            ` : '<h4>Size: Available in Standard</h4>';
            
           

            // Populate the modal content
            modalContent.innerHTML = `
                <img src="${product.img}" alt="${product.title}" class="product-view-img">
                <div class="product-info" data-product-id="${product.id}">
                    <h2>${product.title}</h2>
                    <p class="price-tag">
                        ₹${product.price.toLocaleString('en-IN')} 
                        <span class="mrp">MRP ₹${product.oldPrice.toLocaleString('en-IN')}</span> 
                        <span class="discount">(${product.discount.toFixed(2)}% OFF)</span>
                    </p>
                    <p class="reviews">★★★★☆ ${product.rating} (${Math.floor(Math.random() * 50) + 10} reviews)</p>
                    
                    <div class="description">
                        <p>${product.desc}</p>
                    </div>
                    
                    ${colorSelectorHtml}
                    ${sizeSelectorHtml}

                    <div class="buy-actions">
                        <button class="modal-add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                        <button class="buy-now-btn">Buy Now</button>
                    </div>
                </div>
            `;
            
            setupModalSelectors();
            modal.style.display = "block";
        }
    }


    // --- Event Listeners ---

    // Initial product load
    renderProducts(PRODUCTS);
    
    // Category Filter and Search input changes
    categoryFilter.addEventListener('change', filterAndSearch);
    searchInput.addEventListener('input', filterAndSearch);

    // 1. Unified Click Handler for Product Grid (Modal View & Wishlist/Cart)
    productGrid.addEventListener('click', (e) => {
        const target = e.target;
        const productId = target.closest('.product-item')?.dataset.productId;
        const product = PRODUCTS.find(p => p.id === productId);

        if (!product) return;

        // Check if the target is the wishlist button
        if (target.closest('.wishlist-btn')) {
            e.stopPropagation(); // Prevent modal opening
            const btn = target.closest('.wishlist-btn');
            const icon = btn.querySelector('i');
            
            if (wishlist.includes(productId)) {
                // Remove from wishlist
                wishlist = wishlist.filter(id => id !== productId);
                icon.classList.remove('fa-heart', 'wished');
                icon.classList.add('fa-heart-o');
            } else {
                // Add to wishlist
                wishlist.push(productId);
                icon.classList.remove('fa-heart-o');
                icon.classList.add('fa-heart', 'wished');
            }
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            return;
        }

        // Check if the target is the Add to Cart button
        if (target.closest('.add-to-cart-btn')) {
            e.stopPropagation(); // Prevent modal opening
            const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard';
        
            addToCart(product, defaultSize);
            return;
        }

        // If the target is the product card itself (not an action button), open the modal
        if (target.closest('.product-item')) {
            openProductModal(productId);
        }
    });

    // 2. Add to Cart/Buy Now from the Modal
    modalContent.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-add-to-cart-btn') || e.target.classList.contains('buy-now-btn')) {
            const productId = e.target.dataset.id;
            const product = PRODUCTS.find(p => p.id === productId);
            
            const selectedSizeEl = document.querySelector('#modal-product-details .size-option.selected');
            
            
            const size = selectedSizeEl ? selectedSizeEl.dataset.size : (product.sizes.length > 0 ? product.sizes[0] : 'Standard');
            

            if (product && (!product.sizes.length || selectedSizeEl)) {
                addToCart(product, size);
                modal.style.display = "none"; 
                
                if (e.target.classList.contains('buy-now-btn')) {
                    cartSidebar.classList.add('open');
                    setTimeout(() => checkoutBtn.click(), 500);
                }
            } else if (product.sizes.length && !selectedSizeEl) {
                alert('Please select a size to proceed.');
            }
        }
    });

    // Function to set up the size and color selection logic
    const setupModalSelectors = () => {
        const sizeSelectors = document.querySelectorAll('.size-option');
        

        sizeSelectors.forEach(el => {
            el.addEventListener('click', () => {
                sizeSelectors.forEach(s => s.classList.remove('selected'));
                el.classList.add('selected');
            });
        });

        
    
    }

    // 3. Modal Closing Handlers (Unchanged)
    backToShopBtn.onclick = () => {
        modal.style.display = "none";
    };

    closeModalBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    
    // 4. Cart Sidebar Toggle & Clear (Unchanged)
    openCartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cartSidebar.classList.add('open');
        renderCart();
    });

    clearCartBtn.addEventListener('click', () => {
        if (cart.length > 0 && confirm('Are you sure you want to clear your cart?')) {
             cart = [];
             renderCart();
        }
    });

    // 5. Handle Checkout Button Click (Unchanged)
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items before checking out.');
            return;
        }
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`Checkout initiated - Total: ₹${total.toLocaleString('en-IN')}\n\n(This is a demo – integrate real payment & backend)`);
        
        cart = [];
        renderCart();
        cartSidebar.classList.remove('open');
    });

    // Initial render of cart on load
    renderCart();
});