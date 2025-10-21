export function updateCartIcon(cart) {
    const cartIconCounter = document.getElementById('cart-count'); // or whatever your icon counter id is
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartIconCounter.textContent = totalItems;
}