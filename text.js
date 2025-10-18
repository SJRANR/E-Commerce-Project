const products = [
    { id: 1, name: "Lipstick Glam Red", price: 499, img: "items.png/red.jpeg" },
    { id: 2, name: "Foundation Glow", price: 799, img: "items.png/foundation.jpeg" },
    { id: 3, name: "Blush Pink Rose", price: 599, img: "items.png/blash.jpeg" },
    { id: 4, name: "Highlighter Shine", price: 499, img: "items.png/shine.jpeg" },
    { id: 5, name: "Compact Powder", price: 399, img: "items.png/commbate.jpeg" },
    { id: 6, name: "Eyeliner Jet Black", price: 299, img: "items.png/eye.jpeg" },
    { id: 7, name: "Mascara Volume Up", price: 349, img: "items.png/mascara.webp" },
    { id: 8, name: "Eyeshadow Palette", price: 899, img: "items.png/palet.jpeg" },
    { id: 9, name: "Makeup Primer", price: 699, img: "items.png/prime.jpg" },
    { id: 10, name: "Lip Gloss Nude", price: 299, img: "items.png/lipstik 1.jpg" },
];

let cart = [];

// Load existing wishlist data on page load
let fav = JSON.parse(localStorage.getItem('wishlist')) || [];

const productList = document.getElementById("productList");

// Helper function to save to local storage
function updateLocalStorage() {
    localStorage.setItem('wishlist', JSON.stringify(fav));
}

// --- PRODUCT RENDERING FUNCTION ---
products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    // Check local storage/fav array to set the initial icon state
    const isFavorite = fav.some(item => item.id === product.id);
    const iconClass = isFavorite ? 'fa-solid active' : 'fa-regular';

    div.innerHTML = `
    <i class="${iconClass} fa-heart heart" onclick="toggleFav(${product.id}, this)"></i>
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button class="add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
  `;
    productList.appendChild(div);
});


// --- MODIFIED toggleFav FUNCTION for Saving and Redirecting ---
function toggleFav(id, icon) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    // Create a simplified item object for the wishlist
    const favItem = {
        id: product.id,
        name: product.name,
        price: `₹${product.price}`, // Consistent display format
        image: product.img
    };

    const index = fav.findIndex(item => item.id === id);

    if (index > -1) {
        // Item is already a favorite, so REMOVE it (un-liking)
        fav.splice(index, 1);
        icon.classList.remove("fa-solid", "active");
        icon.classList.add("fa-regular");

        // Update storage immediately after removal
        updateLocalStorage();

    } else {
        // Item is NOT a favorite, so ADD it (liking)
        fav.push(favItem);
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid", "active");

        // *** SAVE AND REDIRECT ***
        updateLocalStorage(); // Save the new item before redirection
        window.location.href = 'wishlist.html';
        return; // Stop function execution after redirection
    }

    // This element isn't in your HTML, but good practice to keep the line
    const favCountElement = document.getElementById("favCount");
    if (favCountElement) {
        favCountElement.innerText = fav.length;
    }
}

// Placeholder for addToCart
function addToCart(id) {
    console.log(`Product ${id} added to cart.`);
}

// Initial icon state setup on page load
document.addEventListener('DOMContentLoaded', () => {
    // If productList exists, apply the icon state
    if (productList) {
        products.forEach(product => {
            const isFavorite = fav.some(item => item.id === product.id);
            const icon = document.querySelector(`.product i[onclick="toggleFav(${product.id}, this)"]`);
            if (icon) {
                if (isFavorite) {
                    icon.classList.remove("fa-regular");
                    icon.classList.add("fa-solid", "active");
                } else {
                    icon.classList.remove("fa-solid", "active");
                    icon.classList.add("fa-regular");
                }
            }
        });
    }
});