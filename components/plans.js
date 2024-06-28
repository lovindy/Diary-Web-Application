document.addEventListener("DOMContentLoaded", () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "$10/month",
      features: ["Basic plan feature 1", "Basic plan feature 2"],
    },
    {
      title: "Standard Plan",
      price: "$20/month",
      features: [
        "Standard plan feature 1",
        "Standard plan feature 2",
        "Standard plan feature 3",
      ],
    },
    {
      title: "Premium Plan",
      price: "$30/month",
      features: [
        "Premium plan feature 1",
        "Premium plan feature 2",
        "Premium plan feature 3",
        "Premium plan feature 4",
      ],
    },
    {
      title: "Enterprise Plan",
      price: "$50/month",
      features: [
        "Enterprise plan feature 1",
        "Enterprise plan feature 2",
        "Enterprise plan feature 3",
        "Enterprise plan feature 4",
        "Enterprise plan feature 5",
      ],
    },
  ];

  const plansContainer = document.getElementById("plans-container");
  const modal = document.getElementById("modal");
  const closeButton = document.getElementById("close-button");
  const confirmButton = document.getElementById("confirm-button");

  plans.forEach((plan) => {
    const card = document.createElement("div");
    card.className = "plan-card card";

    const featureList = plan.features
      .map((feature) => `<li>${feature}</li>`)
      .join("");

    card.innerHTML = `
          <h3>${plan.title}</h3>
          <p>${plan.price}</p>
          <ul>${featureList}</ul>
          <button class="choose-plan-button button-primary">Choose Plan</button>
      `;

    card.querySelector(".choose-plan-button").addEventListener("click", () => {
      modal.style.display = "flex";
      // Optionally, display the selected plan details in the modal
      const modalContent = modal.querySelector(".modal-content");
      modalContent.innerHTML = `
          <h3>${plan.title}</h3>
          <p>${plan.price}</p>
          <ul>${featureList}</ul>
          <button id="close-button" class="button-secondary">Close</button>
          <button id="confirm-button" class="button-primary">Confirm</button>
      `;

      // Add event listeners to the new buttons inside the modal
      modalContent
        .querySelector("#close-button")
        .addEventListener("click", () => {
          modal.style.display = "none";
        });

      modalContent
        .querySelector("#confirm-button")
        .addEventListener("click", () => {
          modal.style.display = "none";
        });
    });

    plansContainer.appendChild(card);
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  confirmButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
