let cart = [];
let total = 0;

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total");
const cartBox = document.getElementById("cart-box");
const cartBtn = document.querySelector(".cart");
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    cartCount.innerText = cart.length;
    totalPrice.innerText = total;
    renderCart();
    cartBox.style.display = "block";
}
function renderCart() {
    cartItems.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
    });
}
cartBtn.onclick = () => {
    cartBox.style.display = "block"; 
};
function closeCart() {
    cartBox.style.display = "none"; 
}