const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartItems.innerHTML = "<p>Your cart is empty.</p>";
} else {
  let total = 0;
  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItems.appendChild(div);
    total += item.price;
  });
  totalDisplay.textContent = `Total: ₹${total}`;
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
