
    // -------------------------
    // Product data (sample with rating and sizes)
    // -------------------------
    const PRODUCTS = [
      { id: "1", title: "Printed Midi Dress", price: 1000, oldPrice:1300, discount:25, category:"dress", img:"images/product1.jpg", desc:"Lightweight printed midi dress. Round neck, three-quarter sleeves.", rating:4.2, sizes:["XS", "S", "M", "L"] },
      { id: "2", title: "Judithar Kurta Set With Dupatta", price: 1200, oldPrice:1700, discount:29.41, category:"dress", img:"images/product2.jpg", desc:"Classic Judithar Kurta set with matching dupatta. Comfortable cotton blend fabric.", rating:4.5, sizes:["XS", "S", "M", "L", "XL"] }, // Specific sizes for Judithar
      { id: "3", title: "Peplum Dress", price: 1200, oldPrice:1700, discount:29.41, category:"dress", img:"images/product3.jpg", desc:"Stylish peplum silhouette for casual & parties.", rating:3.9, sizes:["S", "M", "L"] },
      { id: "4", title: "Net Embroidered Semi-Stitched", price: 2000, oldPrice:2700, discount:25.93, category:"dress", img:"images/product4.jpeg", desc:"Net embroidered semi-stitched fabric.", rating:4.0, sizes:[] },
      { id: "5", title: "Kanjivaram Soft Silk Saree", price: 1200, oldPrice:1700, discount:29.41, category:"saree", img:"images/product5.jpg", desc:"Classic Kanjivaram inspired soft silk saree.", rating:4.7, sizes:[] },
      { id: "6", title: "Girls Chudithar", price: 500, oldPrice:700, discount:28.57, category:"girls", img:"images/product6.jpg", desc:"Comfortable chudithar for girls.", rating:4.1, sizes:["2Y", "4Y", "6Y", "8Y"] },
      { id: "7", title: "White Chiffon Saree", price: 1200, oldPrice:1700, discount:29.41, category:"saree", img:"images/product13.jpeg", desc:"Elegant chiffon saree for special occasions.", rating:4.3, sizes:[] },
      { id: "8", title: "Printed Satin White Saree", price: 3200, oldPrice:4000, discount:20, category:"saree", img:"images/product14.jpg", desc:"Printed satin saree with smooth finish.", rating:4.6, sizes:[] },
      { id: "9", title: "White And Gold Saree", price: 4500, oldPrice:5000, discount:10, category:"saree", img:"images/product16.jpg", desc:"Traditional white and gold saree.", rating:4.8, sizes:[] },
      { id: "10", title: "Violete Silk Saree", price: 2000, oldPrice:3000, discount:33.33, category:"saree", img:"images/product20.jpeg", desc:"Violet silk saree with shimmer.", rating:4.2, sizes:[] },
      { id: "11", title: "Wedding Lehenga Dress", price: 22000, oldPrice:25000, discount:12, category:"lehenga", img:"images/product21.jpg", desc:"Heavily embellished wedding lehenga.", rating:4.9, sizes:["S", "M", "L", "XL"] },
      { id: "12", title: "Purple Silk Lehenga with Embellished Choli", price: 18000, oldPrice:20000, discount:10, category:"lehenga", img:"images/product23.jpg", desc:"Purple silk lehenga set with choli.", rating:4.4, sizes:["S", "M", "L", "XL"] }
    ];

    // -------------------------
    // Cart state + persistence
    // -------------------------
    let cart = []; // items: {cartId, productId, title, price, qty, img, size, color}
    const CART_KEY = "tharabi_cart_v1";
    let favorites = new Set(); // To track favorite state (UI only)
    const FAVORITES_KEY = "tharabi_favorites_v1";

    function saveCart() {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
    function loadCart() {
      try {
        const raw = localStorage.getItem(CART_KEY);
        if(raw) cart = JSON.parse(raw) || [];
        const favRaw = localStorage.getItem(FAVORITES_KEY);
        if(favRaw) favorites = new Set(JSON.parse(favRaw));
      } catch(e){ cart = []; favorites = new Set(); }
    }
    function saveFavorites() {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(favorites)));
    }


    // -------------------------
    // DOM refs
    // -------------------------
    const shopViewWrapper = document.getElementById("shop-view-wrapper"); // NEW REF
    const productGrid = document.getElementById("product-grid");
    const searchInput = document.getElementById("search-input");
    const categoryFilter = document.getElementById("category-filter");
    const cartIcon = document.getElementById("cart-icon");
    const cartCountEl = document.getElementById("cart-count");
    const cartPanel = document.getElementById("cart-panel");
    const cartItemsWrap = document.getElementById("cart-items");
    const cartTotalEl = document.getElementById("cart-total");
    const cartCloseBtn = document.getElementById("cart-close");
    const cartClearBtn = document.getElementById("cart-clear");
    const checkoutBtn = document.getElementById("checkout-btn");

    const detailView = document.getElementById("product-detail-view");
    const detailBack = document.getElementById("detail-back-to-shop");
    const detailMainImg = document.getElementById("detail-main-img");
    const detailTitle = document.getElementById("detail-product-title");
    const detailCurrentPrice = document.getElementById("detail-current-price");
    const detailOldPrice = document.getElementById("detail-old-price");
    const detailDiscount = document.getElementById("detail-discount-percent");
    const detailColors = document.getElementById("detail-colors");
    const detailSizes = document.getElementById("detail-sizes");
    const detailAddBtn = document.getElementById("detail-add-to-cart-btn");
    const detailBuyNowBtn = document.getElementById("detail-buy-now-btn");
    const detailDesc = document.getElementById("detail-description-text");
    const detailSpecs = document.getElementById("detail-specs");
    const detailRating = document.getElementById("detail-rating");

    // -------------------------
    // Util helpers
    // -------------------------
    function formatINR(n){ return "₹" + Number(n).toLocaleString("en-IN"); }
    function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,8); }
    function escapeHtml(str=""){ return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s])); }
    function debounce(fn, wait=200){
      let t;
      return (...args)=>{ clearTimeout(t); t = setTimeout(()=>fn.apply(this,args), wait); };
    }
    function getStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.25 && rating % 1 <= 0.75 ? "½" : "";
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        return `<span style="color:#ffc107;">${"★".repeat(fullStars)}</span>${halfStar}<span style="color:#ddd;">${"★".repeat(emptyStars)}</span>`;
    }

    // -------------------------
    // Render products
    // -------------------------
    function renderProducts(list){
      productGrid.innerHTML = "";
      if(!list.length){
        productGrid.innerHTML = '<div style="grid-column:1/-1;padding:20px;color:var(--muted-text)">No products found.</div>';
        return;
      }
      list.forEach(p=>{
        const isFavorite = favorites.has(p.id);
        const card = document.createElement("article");
        card.className = "product-card";
        card.innerHTML = `
          <div class="img-box clickable" data-id="${p.id}">
            <img src="${p.img}" alt="${escapeHtml(p.title)}" loading="lazy">
          </div>
          <div class="product-body">
            <div class="product-title clickable" data-id="${p.id}">${escapeHtml(p.title)}</div>
            <div style="font-size:0.85rem; color:var(--muted-text); margin-bottom: 4px;">${getStars(p.rating)} ${p.rating.toFixed(1)}</div>
            <div class="price-row">
              <div>
                <span class="price">${formatINR(p.price)}</span>
                <span class="old-price">MRP <del>${formatINR(p.oldPrice)}</del></span>
              </div>
              <div style="text-align:right">
                <div style="font-size:0.85rem;color:var(--muted-text)">${p.discount}% OFF</div>
              </div>
            </div>
            <div class="actions">
              <button class="btn btn-outline add-to-cart-btn" data-id="${p.id}">Add to cart</button>
              <button class="btn" data-id="${p.id}" title="Quick view">View</button>
              <button class="favorite-btn ${isFavorite ? 'favorite' : ''}" data-id="${p.id}" title="Add to wishlist">
                <i class="ri-heart-line" style="font-size:1.1rem"></i>
              </button>
            </div>
          </div>
        `;
        productGrid.appendChild(card);
      });

      // attach events for clickable areas & buttons to open detail view
      document.querySelectorAll(".product-card .clickable, .product-card .product-title, .product-card button[title='Quick view']").forEach(el=>{
        el.addEventListener("click", (e)=>{
          const id = e.currentTarget.dataset.id;
          const prod = PRODUCTS.find(x=>x.id===id);
          if(prod) openDetailView(prod);
        });
      });
      
      // attach events for add-to-cart buttons on the main grid
      document.querySelectorAll(".add-to-cart-btn").forEach(btn=>{
        btn.addEventListener("click", (e)=>{
          const id = e.currentTarget.dataset.id;
          const prod = PRODUCTS.find(x=>x.id===id);
          if(prod) addToCart(prod, 1);
          openCart();
        });
      });

      // attach events for favorite buttons
      document.querySelectorAll(".favorite-btn").forEach(btn=>{
        btn.addEventListener("click", (e)=>{
          const id = e.currentTarget.dataset.id;
          if(favorites.has(id)){
            favorites.delete(id);
            btn.classList.remove("favorite");
          } else {
            favorites.add(id);
            btn.classList.add("favorite");
          }
          saveFavorites();
        });
      });
    }

    // -------------------------
    // Filters & Search
    // -------------------------
    function applyFilters(){
      const q = searchInput.value.trim().toLowerCase();
      const cat = categoryFilter.value;
      let filtered = PRODUCTS.filter(p=>{
        const matchesQ = !q || p.title.toLowerCase().includes(q) || (p.desc && p.desc.toLowerCase().includes(q));
        const matchesC = cat==="all" || p.category === cat;
        return matchesQ && matchesC;
      });
      renderProducts(filtered);
    }

    searchInput.addEventListener("input", debounce(applyFilters, 220));
    categoryFilter.addEventListener("change", applyFilters);

    // -------------------------
    // Cart functions
    // -------------------------
    function refreshCartUI(){
      // update count & total & items
      const totalQty = cart.reduce((s,i)=>s+i.qty,0);
      const totalAmount = cart.reduce((s,i)=>s + (Number(i.price) * Number(i.qty)),0);

      cartCountEl.textContent = totalQty;
      cartCountEl.style.display = totalQty ? "inline-block" : "none";
      cartTotalEl.textContent = formatINR(totalAmount);

      cartItemsWrap.innerHTML = "";
      if(cart.length===0){
        cartItemsWrap.innerHTML = '<div class="cart-empty">Your cart is empty.</div>';
        return;
      }

      cart.forEach(item=>{
        const itemEl = document.createElement("div");
        itemEl.className = "cart-item";
        itemEl.innerHTML = `
          <img src="${item.img}" alt="${escapeHtml(item.title)}">
          <div class="meta">
            <h4>${escapeHtml(item.title)}</h4>
            <div><span class="price">${formatINR(item.price)}</span></div>
            <div style="font-size:0.88rem;color:var(--muted-text)">${item.size ? "Size: "+escapeHtml(item.size) : ""} ${item.color ? " • "+escapeHtml(item.color) : ""}</div>
            <div class="qty-controls">
              <button class="qty-decr" data-cartid="${item.cartId}" title="Decrease quantity">-</button>
              <div style="min-width:30px;text-align:center">${item.qty}</div>
              <button class="qty-incr" data-cartid="${item.cartId}" title="Increase quantity">+</button>
              <button class="btn" style="margin-left:8px" data-remove="${item.cartId}" title="Remove item"><i class="ri-delete-bin-line"></i></button>
            </div>
          </div>
        `;
        cartItemsWrap.appendChild(itemEl);
      });

      // attach qty & remove events
      cartItemsWrap.querySelectorAll(".qty-incr").forEach(b=>{
        b.addEventListener("click", (e)=>{
          const id = b.dataset.cartid;
          changeQty(id, 1);
        });
      });
      cartItemsWrap.querySelectorAll(".qty-decr").forEach(b=>{
        b.addEventListener("click", (e)=>{
          const id = b.dataset.cartid;
          changeQty(id, -1);
        });
      });
      cartItemsWrap.querySelectorAll("[data-remove]").forEach(b=>{
        b.addEventListener("click", (e)=>{
          const id = b.dataset.remove;
          removeFromCart(id);
        });
      });

      saveCart();
    }

    function addToCart(product, qty = 1, opts = {}) {
      // Combine productId + size + color to determine uniqueness
      const sizeStr = opts.size || "";
      const colorStr = opts.color || "";
      const key = product.id + (sizeStr ? `|${sizeStr}` : "") + (colorStr ? `|${colorStr}` : "");
      
      // search existing by productId + options
      let existing = cart.find(ci => ci.key === key);
      if(existing){
        existing.qty = Number(existing.qty) + Number(qty);
      } else {
        const cartItem = {
          cartId: uid(),
          key,
          productId: product.id,
          title: product.title,
          price: Number(product.price),
          qty: Number(qty),
          img: product.img,
          size: sizeStr,
          color: colorStr
        };
        cart.push(cartItem);
      }
      saveCart();
      refreshCartUI();
    }

    function changeQty(cartId, delta){
      const it = cart.find(i=>i.cartId===cartId);
      if(!it) return;
      it.qty = Number(it.qty) + Number(delta);
      if(it.qty <= 0) cart = cart.filter(i=>i.cartId !== cartId);
      saveCart();
      refreshCartUI();
    }

    function removeFromCart(cartId){
      cart = cart.filter(i=>i.cartId !== cartId);
      saveCart();
      refreshCartUI();
    }

    function clearCart(){
      cart = [];
      saveCart();
      refreshCartUI();
    }
    
    function initiateCheckout(){
      if(cart.length === 0) { alert("Your cart is empty. Please add items first."); return; }
      const total = cart.reduce((s,i)=>s + i.price * i.qty, 0);
      alert(`Checkout initiated - Total: ${formatINR(total)}\n(This is a demo — integrate real payment & backend.)`);
      clearCart();
      closeCart();
    }

    // -------------------------
    // Cart panel controls
    // -------------------------
    function openCart(){ cartPanel.classList.add("open"); cartPanel.setAttribute("aria-hidden","false"); }
    function closeCart(){ cartPanel.classList.remove("open"); cartPanel.setAttribute("aria-hidden","true"); }

    cartIcon.addEventListener("click", openCart);
    cartCloseBtn.addEventListener("click", closeCart);
    cartClearBtn.addEventListener("click", ()=>{ if(confirm("Clear the cart?")) clearCart(); });
    checkoutBtn.addEventListener("click", initiateCheckout);

    // -------------------------
    // Product detail view
    // -------------------------
    function openDetailView(product){
      // populate detail fields
      detailMainImg.src = product.img;
      detailMainImg.alt = product.title;
      detailTitle.textContent = product.title;
      detailCurrentPrice.textContent = formatINR(product.price);
      detailOldPrice.innerHTML = `MRP <del>${formatINR(product.oldPrice)}</del>`;
      detailDiscount.textContent = `(${product.discount}% OFF)`;
      detailDesc.textContent = product.desc || "";
      detailRating.innerHTML = `${getStars(product.rating)} <span style="font-weight:700;">${product.rating.toFixed(1)}</span> (${Math.round(product.rating * 10)} reviews)`;
      detailSpecs.innerHTML = `<li>Fabric: Rayon/Cotton Blend</li><li>Occasion: Casual/Day Wear</li><li>Wash Care: Machine Wash Cold</li>`; // Placeholder specs

      // --- Colors (static choices for demo)
      detailColors.innerHTML = "";
      const colorOptions = product.colors || [
        {name:"Teal", hex:"#008080"},
        {name:"Yellow", hex:"#f0e68c"},
        {name:"Sienna", hex:"#a0522d"}
      ];
      colorOptions.forEach((c, idx)=>{
        const sw = document.createElement("div");
        sw.className = "swatch" + (idx===0 ? " active":"");
        sw.style.background = c.hex;
        sw.dataset.color = c.name;
        sw.title = c.name;
        sw.addEventListener("click", (e)=>{
          document.querySelectorAll("#product-detail-view .swatch").forEach(s=>s.classList.remove("active"));
          sw.classList.add("active");
        });
        detailColors.appendChild(sw);
      });

      // --- Sizes (dynamic based on product)
      detailSizes.innerHTML = "";
      const defaultSizes = ["S", "M", "L", "XL"];
      const sizesToRender = product.sizes && product.sizes.length > 0 ? product.sizes : defaultSizes;

      sizesToRender.forEach((size, idx) => {
          const btn = document.createElement("button");
          btn.className = "size-btn";
          btn.textContent = size;
          btn.dataset.size = size;
          // Set 'M' or first option as active by default
          if ((size === "M" && sizesToRender.includes("M")) || (!sizesToRender.includes("M") && idx === 0)) {
              btn.classList.add("active");
          }

          btn.onclick = (e)=> {
              detailSizes.querySelectorAll(".size-btn").forEach(x=>x.classList.remove("active"));
              e.currentTarget.classList.add("active");
          };
          detailSizes.appendChild(btn);
      });

      // --- Add to Cart / Buy Now logic
      const handleAddOrBuy = (checkoutImmediately = false) => {
          const selectedSize = detailSizes.querySelector(".size-btn.active")?.dataset.size || null;
          const selectedColor = detailColors.querySelector(".swatch.active")?.dataset.color || null;
          
          if (!selectedSize && sizesToRender.length > 0) {
              alert("Please select a size before proceeding.");
              return;
          }

          addToCart(product, 1, {size:selectedSize, color:selectedColor});
          
          if(checkoutImmediately) {
              initiateCheckout();
          } else {
              openCart();
          }
      };
      
      detailAddBtn.onclick = () => handleAddOrBuy(false);
      detailBuyNowBtn.onclick = () => handleAddOrBuy(true);


      // NEW: Hide shop view and show detail view
      shopViewWrapper.classList.add("hidden");
      detailView.classList.add("active");
      detailView.setAttribute("aria-hidden", "false");
      window.scrollTo({top:0,behavior:"smooth"}); // Scroll to top of the page
    }

    // Hide detail view when clicking 'Back to shop'
    detailBack.addEventListener("click", (e)=>{ 
      e.preventDefault(); 
      detailView.classList.remove("active"); 
      detailView.setAttribute("aria-hidden", "true");
      shopViewWrapper.classList.remove("hidden"); // NEW: Show shop view
      window.scrollTo({top:0,behavior:"smooth"}); 
    });

    // -------------------------
    // Init
    // -------------------------
    (function init(){
      loadCart();
      renderProducts(PRODUCTS);
      applyFilters(); // ensure initial render
      refreshCartUI();

      // keyboard: Esc closes cart or detail
      document.addEventListener("keydown", (e)=>{
        if(e.key === "Escape"){ 
          closeCart(); 
          if (detailView.classList.contains("active")) {
             detailBack.click(); // Use the existing back function
          }
        }
      });

      // if product images are missing (local path demo), show placeholder
      document.querySelectorAll("img").forEach(img => {
        img.addEventListener("error", ()=> { img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23f3f3f3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='20'%3EImage not found%3C/text%3E%3C/svg%3E"; });
      });
      
      // Home link
      document.getElementById("home-link").addEventListener("click", () => {
          detailView.classList.remove("active");
          detailView.setAttribute("aria-hidden", "true");
          shopViewWrapper.classList.remove("hidden"); // NEW: Show shop view
          window.scrollTo({top:0,behavior:"smooth"});
          searchInput.value = '';
          categoryFilter.value = 'all';
          applyFilters();
      });
    })();