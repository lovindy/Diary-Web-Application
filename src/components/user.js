// User data to be displayed
const userData = [
  {
    imgURL: "src/assets/images/User-3.png",
    name: "Jame Smith",
    feedback:
      "The diary web application is incredibly user-friendly and intuitive. I love the sleek design and smooth functionality of the app.",
  },
  {
    imgURL: "src/assets/images/User-1.png",
    name: "Harley Jane",
    feedback:
      "The search feature makes finding old entries super easy. I appreciate the security features.",
  },
  {
    imgURL: "src/assets/images/User-2.png",
    name: "John Doe",
    feedback:
      "The ability to add images to my entries really enhances my journaling experience. I enjoy the daily reminders to write; it keeps me consistent.",
  },
];

// Function to create the user feedback HTML
function createUserFeedbackHTML(user) {
  return `
    <div class="user-feedback-card">
      <img src="${user.imgURL}" alt="User Image" />
      <h3>${user.name}</h3>
      <p>${user.feedback}</p>
    </div>`;
}

// Define the custom element
class UserFeedbackComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const container = document.createElement("div");
    container.classList.add("user-card-container");

    userData.forEach((user) => {
      const cardHTML = createUserFeedbackHTML(user);
      container.innerHTML += cardHTML;
    });

    this.appendChild(container);
  }
}

// Register the custom element
customElements.define("user-card-component", UserFeedbackComponent);
