// script.js

document.addEventListener("DOMContentLoaded", () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "$10/month",
      description: "Basic plan description",
    },
    {
      title: "Standard Plan",
      price: "$20/month",
      description: "Standard plan description",
    },
    {
      title: "Premium Plan",
      price: "$30/month",
      description: "Premium plan description",
    },
    {
      title: "Enterprise Plan",
      price: "$50/month",
      description: "Enterprise plan description",
    },
  ];

  const plansContainer = document.getElementById("plans-container");
  const modal = document.getElementById("modal");
  const closeButton = document.getElementById("close-button");
  const confirmButton = document.getElementById("confirm-button");

  plans.forEach((plan) => {
    const card = document.createElement("div");
    card.className = "plan-card card";

    card.innerHTML = `
          <h3>${plan.title}</h3>
          <p>${plan.price}</p>
          <p>${plan.description}</p>
          <button class="choose-plan-button">Choose Plan</button>
      `;

    card.querySelector(".choose-plan-button").addEventListener("click", () => {
      modal.style.display = "flex";
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
