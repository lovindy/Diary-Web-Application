// Function to create the navigation HTML
function createNavHTML(page) {
  // Define the links and buttons
  let links = [];
  let buttons = "";

  // Define the links and buttons based on the page
  if (page === "home") {
    links = [
      { href: "/pages/home.html", text: "Home" },
      { href: "/pages/aboutus.html", text: "About Us" },
      { href: "/pages/list.html", text: "My Diary" },
      { href: "/pages/explore.html", text: "Explore" },
      { href: "/pages/plan.html", text: "Plans" },
    ];
    buttons = `
      <div class="nav-buttons closed">
        <label class="switch">
          <span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
          <span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
          <input type="checkbox" class="input" checked onclick="toggleDarkMode()">
          <span class="slider"></span>
        </label>      
        <button class="button-secondary" onclick="window.location.href='/pages/signup.html'">Sign Up</button>
        <button class="button-primary" onclick="window.location.href='../index.html'">Log Out</button>
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
              ? '<li class="menu-link"><a onclick="toggleDarkMode()" class="theme-menu underline-animation">Theme</a></li>'
              : ""
          }
          ${
            page === "home"
              ? '<li class="menu-link"><a href="../index.html" class="underline-animation">Log Out</a></li>'
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

      // Close the menu if the user clicks outside the menu content
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

      // Only toggle menu if screen width is <= 1024px
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
