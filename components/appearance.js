// Function to toggle dark mode
function toggleDarkMode() {
  document.documentElement.classList.toggle("light-mode");
  const isLightMode = document.documentElement.classList.contains("light-mode");
  localStorage.setItem("theme", isLightMode ? "light" : "dark");
}

// Function to apply saved theme from localStorage
function applyTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.add("light-mode");
  }
}

// Apply the saved theme on load
window.addEventListener("load", applyTheme);
