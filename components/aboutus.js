// HeroSection component
class HeroSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="hero">
          <div class="hero-content">
            <h1 class="bebas-neue-regular">About Us</h1>
            <p>Discover more about our company, our team, and what drives us.</p>
          </div>
          <div class="hero-image-abt">
            <img src="/assets/icons/Hero-Image-AboutUs.svg" alt="About Us Hero">
          </div>
        </section>
      `;
  }
}

// AboutUsSection component
class AboutUsSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="about-us">
          <h2>Our Company</h2>
          <p>
            Welcome to our company! We are dedicated to providing the best service
            to our customers. Our team is composed of experienced professionals who
            are passionate about their work. We value integrity, excellence, and
            innovation.
          </p>
        </section>
      `;
  }
}

// TeamSection component
class TeamSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="team">
          <h2>Our Team</h2>
          <div class="team-member">
            <img src="/assets/images/User-1.png" alt="Team Member 1">
            <h3>James Vardy</h3>
            <p>UI/UX Designer</p>
          </div>
          <div class="team-member">
            <img src="/assets/images/User-2.png" alt="Team Member 2">
            <h3>Jenifer Johnson</h3>
            <p>Frontend Developer</p>
          </div>
          <div class="team-member">
            <img src="/assets/images/User-3.png" alt="Team Member 3">
            <h3>Robert Downey</h3>
            <p>Backend Developer</p>
          </div>
          <!-- Add more team members as needed -->
        </section>
      `;
  }
}

// ValuesSection component
class ValuesSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="values">
          <h2>Our Values</h2>
          <p>We believe in integrity, excellence, and innovation.</p>
        </section>
      `;
  }
}

// MissionSection component
class MissionSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="mission">
          <h2>Our Mission</h2>
          <p>
            To provide outstanding service and solutions through dedication and
            excellence.
          </p>
        </section>
      `;
  }
}

// Define the custom elements to be used in the web component
customElements.define("hero-section", HeroSection);
customElements.define("about-us-section", AboutUsSection);
customElements.define("team-section", TeamSection);
customElements.define("values-section", ValuesSection);
customElements.define("mission-section", MissionSection);
