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
            <li><a href="/home.html">Home</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/contact.html">Contact</a></li>
            <li><a href="/privacy.html">Privacy Policy</a></li>
          </ul>`,
    },
    {
      title: "Follow Us",
      content: `
          <div class="social-icons">
            <a href="#"><img src="/images/facebook-icon.png" alt="Facebook"></a>
            <a href="#"><img src="/images/twitter-icon.png" alt="Twitter"></a>
            <a href="#"><img src="/images/instagram-icon.png" alt="Instagram"></a>
            <a href="#"><img src="/images/linkedin-icon.png" alt="LinkedIn"></a>
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
          <p>&copy; 2024 Your Diary. All rights reserved.</p>
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
