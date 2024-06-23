// Function to create the navigation HTML
function createNavHTML() {
  const links = [
    { href: "../../index.html", text: "Home" },
    { href: "/pages/aboutus.html", text: "About Us" },
    { href: "/pages/list.html", text: "My Diary" },
    { href: "#", text: "Explore" },
    { href: "/pages/plan.html", text: "Plans" },
  ];

  // Create the navigation HTML
  let navHTML = `
    <nav class="nav-container">
      <!-- Logo -->
      <div class="logo"><img src="/assets/icons/Diary.svg" alt="Diary Logo" /></div>
      <!-- Link List to other pages -->
      <ul class="nav-links">
  `;
  links.forEach((link) => {
    navHTML += `<li class="nav-link"><a href="${link.href}" class="underline-animation">${link.text}</a></li>`;
  });

  // Add the login and signup buttons
  navHTML += `
      </ul>
      <div class="nav-buttons">
        <button onclick="toggleDarkMode()" class="button button-secondary">
          Theme
        </button>
        <button class="button button-primary" onclick="window.location.href='/pages/login.html'">Login</button>
        <button class="button button-secondary" onclick="window.location.href='/pages/signup.html'">Sign Up</button>
      </div>
      <div class="menu-icon" onclick="toggleMenu()">
        <img src="/assets/icons/menu-icon.svg" alt="Menu Icon" />
      </div>
      <div class="close-icon" onclick="toggleMenu()">x</div>
    </nav>
  `;
  return navHTML;
}

// Define the custom element
class NavComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = createNavHTML();
  }
}

// Register the custom element
customElements.define("nav-component", NavComponent);

// Add the toggleMenu function
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const navButtons = document.querySelector(".nav-buttons");
  if (navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    navLinks.classList.add("closed");
    navButtons.classList.remove("open");
    navButtons.classList.add("closed");
  } else {
    navLinks.classList.remove("closed");
    navLinks.classList.add("open");
    navButtons.classList.remove("closed");
    navButtons.classList.add("open");
  }
}
