document.addEventListener("DOMContentLoaded", () => {
  const features = [
    {
      title: "Feature 1: Customizable Themes",
      description:
        "Personalize your diary with a variety of themes. Choose colors, fonts, and layouts that best reflect your style.",
      details: [
        "Wide range of color schemes",
        "Custom fonts",
        "Layout options",
      ],
      modalId: "modal1",
    },
    {
      title: "Feature 2: Secure Backup",
      description:
        "Keep your entries safe with secure backup options. Never lose a moment of your cherished memories.",
      details: ["Cloud storage", "End-to-end encryption", "Easy restoration"],
      modalId: "modal2",
    },
    {
      title: "Feature 3: Rich Text Editing",
      description:
        "Enhance your entries with rich text formatting. Add bold, italics, lists, and more to bring your stories to life.",
      details: ["Text formatting options", "Image embedding", "Hyperlinks"],
      modalId: "modal3",
    },
    {
      title: "Feature 4: Reminders",
      description:
        "Set reminders for your important entries. Never miss a moment worth recording.",
      details: [
        "Custom reminder settings",
        "Notification alerts",
        "Recurring reminders",
      ],
      modalId: "modal4",
    },
  ];

  const container = document.getElementById("feature-card-container");

  features.forEach((feature) => {
    const card = document.createElement("div");
    card.className = "feature-card";

    const title = document.createElement("h4");
    title.textContent = feature.title;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = feature.description;
    card.appendChild(description);

    const ul = document.createElement("ul");
    feature.details.forEach((detail) => {
      const li = document.createElement("li");
      li.textContent = detail;
      ul.appendChild(li);
    });
    card.appendChild(ul);

    const button = document.createElement("button");
    button.className = "button-primary";
    button.textContent = "Learn More";
    button.setAttribute("onclick", `showModal('${feature.modalId}')`);
    card.appendChild(button);

    container.appendChild(card);
  });
});

function showModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
