// Function to create the footer HTML
function createFooterHTML() {
  const footerSections = [
    {
      title: "About Us",
      content: `<p>Your diary web application helps you keep track of your daily activities and memories.</p>`,
    },
    {
      title: "Quick Links",
      content: `
          <ul>
            <li><a href="/pages/home.html">Home</a></li>
            <li><a href="/pages/aboutus.html">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>`,
    },
    {
      title: "Follow Us",
      content: `
          <div class="social-icons">
            <a href="#"><img src="/assets/icons/Facebook.svg" alt="Facebook"></a>
            <a href="#"><img src="/assets/icons/twitter.svg" alt="Twitter"></a>
            <a href="#"><img src="/assets/icons/instagram.png" alt="Instagram"></a>
            <a href="#"><img src="/assets/icons/linkedin.png" alt="LinkedIn"></a>
          </div>`,
    },
  ];

  let footerHTML = `
      <footer class="footer">
        <div class="footer-container">
    `;

  footerSections.forEach((section) => {
    footerHTML += `
        <div class="footer-column">
          <h3>${section.title}</h3>
          ${section.content}
        </div>
      `;
  });

  footerHTML += `
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 DEV Diary. All rights reserved.</p>
        </div>
      </footer>
    `;

  return footerHTML;
}

// Define the custom element
class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = createFooterHTML();
  }
}

// Register the custom element
customElements.define("footer-component", FooterComponent);
