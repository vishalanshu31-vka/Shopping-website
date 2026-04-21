const products = [
  { id: 1, name: "Shoes", price: 1000 },
  { id: 2, name: "T-Shirt", price: 500 },
  { id: 3, name: "Watch", price: 2000 }
];

let cart = [];

function displayProducts() {
  const container = document.getElementById("product-list");

  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    container.appendChild(div);
  });
}

function addToCart(id) {
  cart.push(id);
  document.getElementById("cart-count").innerText = cart.length;
}

function viewCart() {
  alert("Items in cart: " + cart.length);
}

displayProducts();
