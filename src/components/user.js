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
function createUserFeedbackHTML(imageUrl, userName, feedback) {
  return `
        <div class="user-feedback-card">
            <img src="${imageUrl}" alt="User Image" />
            <h3>${userName}</h3>
            <p>${feedback}</p>
        </div>
    `;
}

// Define the custom element
class UserFeedbackComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    userData.forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("user-feedback-card");
      card.innerHTML = createUserFeedbackHTML(
        user.imgURL,
        user.name,
        user.feedback
      );
      this.appendChild(card);
    });
  }
}

// Register the custom element
customElements.define("user-card-component", UserFeedbackComponent);
