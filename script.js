
const products = [
  { id:1, name:"Blue T‑Shirt", price:19.99, desc:"Soft cotton, available in L", img:"a-blue-t-shirt-sitting-on-top-of-green-leaves-photo.webp" },
  { id:2, name:"Sneakers", price:49.99, desc:"Comfortable for daily wear", img:"360_F_443626528_M66acBX8C0G73nx9EjK8THOErVGFoAdE.webp" },
  { id:3, name:"Wrist Watch", price:99.99, desc:"Water-resistant, sleek design", img:"how-to-wind-a-tudor-watch-thumbnail.webp" }
];

let cartCount = 0;
const grid = document.getElementById("product-grid");
const cartCounter = document.getElementById("cart-count");

// Create toast
const toast = document.createElement('div');
toast.className = 'toast';
document.body.appendChild(toast);

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

function addToCart(name) {
  cartCount++;
  cartCounter.textContent = cartCount;
  showToast(`Added "${name}" to cart`);
}

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}" />
    <div class="card-body">
      <h3>${p.name}</h3>
      <p class="price">$${p.price.toFixed(2)}</p>
      <p class="desc">${p.desc}</p>
      <button>Add to Cart</button>
    </div>`;
  card.querySelector("button").addEventListener("click", () => addToCart(p.name));
  grid.appendChild(card);
});
