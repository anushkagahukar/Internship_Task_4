// Theme toggle
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");
  if (saved) {
    body.classList.remove("light", "dark");
    body.classList.add(saved);
  }
});

// Hamburger toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Form handler
function submitForm(event) {
  event.preventDefault();
  alert("Thank you for your message! I'll get back to you soon.");
  event.target.reset();
}
