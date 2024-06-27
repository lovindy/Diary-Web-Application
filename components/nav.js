// Function to create the navigation HTML
function createNavHTML(page) {
  let links = [];
  let buttons = "";

  if (page === "home") {
    links = [
      { href: "/pages/home.html", text: "Home" },
      { href: "/pages/aboutus.html", text: "About Us" },
      { href: "/pages/list.html", text: "My Diary" },
      { href: "#", text: "Explore" },
      { href: "/pages/plan.html", text: "Plans" },
    ];
    buttons = `
      <div class="nav-buttons closed">
        <button onclick="toggleDarkMode()" class="button button-secondary">
          Theme
        </button>
        <button class="button button-primary" onclick="window.location.href='../index.html'">Log Out</button>
        <button class="button button-secondary" onclick="window.location.href='/pages/signup.html'">Sign Up</button>
      </div>
    `;
  } else if (page === "auth") {
    links = [
      { href: "/pages/aboutus.html", text: "About Us" },
      { href: "#", text: "Explore" },
      { href: "/pages/plan.html", text: "Plans" },
    ];
  }

  // Create the navigation HTML
  let navHTML = `
    <nav class="nav-container">
      <!-- Logo -->
      <div class="logo"><img src="/assets/icons/Diary.svg" alt="Diary Logo" /></div>
      <!-- Link List to other pages -->
      <ul class="nav-links closed">
  `;
  links.forEach((link) => {
    navHTML += `<li class="nav-link"><a href="${link.href}" class="underline-animation">${link.text}</a></li>`;
  });

  navHTML += `
      </ul>
      ${buttons}
      <div class="menu-icon" onclick="toggleMenu()">
        <img src="/assets/icons/menu-icon.svg" alt="Menu Icon" />
      </div>
      <div class="menu-content closed">
        <div class="close-icon" onclick="toggleMenu()">
          <span>&times;</span>
        </div>
        <ul class="menu-links">
          ${links
            .map(
              (link) =>
                `<li class="menu-link"><a href="${link.href}" class="underline-animation">${link.text}</a></li>`
            )
            .join("")}
          ${
            page === "home"
              ? '<li class="menu-link"><a href="../index.html" class="underline-animation">Log Out</a></li>'
              : ""
          }
          ${
            page === "home"
              ? '<li class="menu-link"><a onclick="toggleDarkMode()" class="theme-menu underline-animation">Theme</a></li>'
              : ""
          }
        </ul>
      </div>
    </nav>
    <div class="overlay" onclick="toggleMenu()"></div>
  `;
  return navHTML;
}

// Define the custom element
class NavComponent extends HTMLElement {
  connectedCallback() {
    // Determine the page type and create the appropriate navigation
    const pageType = this.getAttribute("page-type");
    this.innerHTML = createNavHTML(pageType);

    // Hide the overlay on page load
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "none";

    // Add event listener to handle clicks outside the menu content
    document.addEventListener("click", (event) => {
      const menuContent = document.querySelector(".menu-content");
      const menuIcon = document.querySelector(".menu-icon");

      if (
        !menuContent.contains(event.target) &&
        !menuIcon.contains(event.target) &&
        menuContent.classList.contains("open")
      ) {
        toggleMenu();
      }
    });

    // Ensure overlay is hidden when resizing the window
    window.addEventListener("resize", () => {
      const menuContent = document.querySelector(".menu-content");
      const overlay = document.querySelector(".overlay");

      if (window.innerWidth > 1024) {
        menuContent.classList.remove("open");
        menuContent.classList.add("closed");
        overlay.style.display = "none"; // Hide overlay
      }
    });
  }
}

// Register the custom element
customElements.define("nav-component", NavComponent);

// Add the toggleMenu function to handle the sliding animation and overlay visibility
function toggleMenu() {
  const menuContent = document.querySelector(".menu-content");
  const overlay = document.querySelector(".overlay");

  // Only toggle menu if screen width is <= 1024px
  if (window.innerWidth <= 1024) {
    if (menuContent.classList.contains("closed")) {
      menuContent.classList.remove("closed");
      menuContent.classList.add("open");
      overlay.style.display = "block"; // Show overlay
    } else {
      menuContent.classList.remove("open");
      menuContent.classList.add("closed");
      overlay.style.display = "none"; // Hide overlay
    }
  }
}
