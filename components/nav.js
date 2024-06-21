// Function to create the navigation HTML
function createNavHTML() {
  const links = [
    { href: "../../index.html", text: "Home" },
    { href: "#", text: "About Us" },
    { href: "src/pages/list.html", text: "My Diary" },
    { href: "#", text: "Explore" },
    { href: "#", text: "Plans" },
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
    navHTML += `<li class="nav-link"> <a href="${link.href}" class="underline-animation">${link.text}</a> </li>`;
  });

  // Add the login and signup buttons
  navHTML += `
      </ul>
      <div class="nav-buttons">
        <button onclick="toggleDarkMode()" class="button button-secondary">
          Theme
        </button>
        <button class="button button-primary">Login</button>
        <button class="button button-secondary">Sign Up</button>
      </div>
      <div class="menu-icon">
        <img src="/assets/icons/menu-icon.svg" alt="Diary Logo" />
      </div>
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
