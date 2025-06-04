const products = [
  { name: "Smartphone", category: "electronics", price: 999, rating: 4.5 },
  { name: "T-Shirt", category: "fashion", price: 25, rating: 4.0 },
  { name: "Microwave", category: "home", price: 150, rating: 4.3 },
  { name: "Sneakers", category: "fashion", price: 60, rating: 4.7 },
  { name: "Headphones", category: "electronics", price: 120, rating: 4.2 },
  { name: "Sofa", category: "home", price: 500, rating: 4.6 },
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortBy = document.getElementById("sortBy");

function renderProducts(filtered) {
  productList.innerHTML = "";

  filtered.forEach((product) => {
    const item = document.createElement("div");
    item.className = "product";
    item.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: ₹${product.price}</p>
      <p>Rating: ${product.rating} ⭐</p>
    `;
    productList.appendChild(item);
  });
}

function applyFilters() {
  let filtered = [...products];

  const category = categoryFilter.value;
  const priceRange = priceFilter.value;
  const sort = sortBy.value;

  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (priceRange !== "all") {
    const [min, max] = priceRange.split("-").map(Number);
    filtered = filtered.filter((p) => p.price >= min && p.price <= max);
  }

  if (sort === "priceAsc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceDesc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

categoryFilter.addEventListener("change", applyFilters);
priceFilter.addEventListener("change", applyFilters);
sortBy.addEventListener("change", applyFilters);

renderProducts(products); // initial load
