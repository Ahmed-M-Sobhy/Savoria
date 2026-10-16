let cart = [];

function addToCart(title, price, img) {
  cart.push({ title, price, img });
  updateCartUI();
  openCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  document.getElementById("cartCount").innerText = cart.length;

  const body = document.getElementById("cartBody");
  const totalEl = document.getElementById("cartTotalPrice");

  if (cart.length === 0) {
    body.innerHTML = '<p class="empty-msg">Your basket is empty.</p>';
    totalEl.innerText = "$0.00";
    return;
  }

  let total = 0;
  let html = "";

  cart.forEach((item, index) => {
    total += item.price;
    html += `
          <div class="cart-item">
            <img src="${item.img}" class="cart-item-img" alt="${item.title}">
            <div class="cart-item-info">
              <h4>${item.title}</h4>
              <span>$${item.price.toFixed(2)}</span>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        `;
  });

  body.innerHTML = html;
  totalEl.innerText = "$" + total.toFixed(2);
}

function openCart() {
  document.getElementById("cartOverlay").classList.add("open");
}

function closeCart() {
  document.getElementById("cartOverlay").classList.remove("open");
}

function checkout() {
  if (cart.length === 0) {
    alert("Your basket is empty!");
    return;
  }
  alert("Thank you! Your order has been placed successfully.");
  cart = [];
  updateCartUI();
  closeCart();
}

document.getElementById("cartOverlay").addEventListener("click", function (e) {
  if (e.target === this) {
    closeCart();
  }
});
