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
  const confirmGif = document.getElementById("confirm-gif");

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
        <span class="close-button" id="close-button">&times;</span>
        <h3>${plan.title}</h3>
        <p>${plan.price}</p>
        <ul>${featureList}</ul>
        <img src="/assets/images/Confirm.gif" id="confirm-gif" alt="Confirmation GIF" style="display:none;" />
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
          // Show the GIF
          const confirmGif = modalContent.querySelector("#confirm-gif");
          confirmGif.style.display = "block";

          // Hide the modal and the GIF after 2 seconds
          setTimeout(() => {
            modal.style.display = "none";
            confirmGif.style.display = "none";
          }, 1500);
        });
    });

    plansContainer.appendChild(card);
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  confirmButton.addEventListener("click", () => {
    confirmGif.style.display = "block";
    setTimeout(() => {
      modal.style.display = "none";
      confirmGif.style.display = "none";
    }, 2000);
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
