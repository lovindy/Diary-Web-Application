// Function to toggle dark mode
function toggleDarkMode() {
  // Toggle dark mode
  document.documentElement.classList.toggle("light-mode");
  // Get current theme
  const isLightMode = document.documentElement.classList.contains("light-mode");
  // Save theme in localStorage
  localStorage.setItem("theme", isLightMode ? "light" : "dark");
}

// Function to apply saved theme from localStorage
function applyTheme() {
  // Get saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.add("light-mode");
  }
}

// Apply the saved theme on load
window.addEventListener("load", applyTheme);
