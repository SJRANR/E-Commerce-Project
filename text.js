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
let fav = [];

const productList = document.getElementById("productList");

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <i class="fa-regular fa-heart heart" onclick="toggleFav(${product.id}, this)"></i>
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button class="add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

function toggleFav(id, icon) {
  const product = products.find(p => p.id === id);
  if (fav.includes(product)) {
    fav = fav.filter(item => item.id !== id);
    icon.classList.remove("active");
  } else {
    fav.push(product);
    icon.classList.add("active");
  }
  document.getElementById("favCount").innerText = fav.length;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById("cartCount").innerText = cart.length;
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cartItems");
  list.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    list.appendChild(li);
  });
  document.getElementById("totalPrice").innerText = `Total: ₹${total}`;
}

function openCartPage() {
  document.getElementById("cartPage").style.display = "block";
}

function closeCartPage() {
  document.getElementById("cartPage").style.display = "none";
}

function openFavPage() {
  const list = document.getElementById("favItems");
  list.innerHTML = "";
  fav.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    list.appendChild(li);
  });
  document.getElementById("favPage").style.display = "block";
}

function closeFavPage() {
  document.getElementById("favPage").style.display = "none";
}
