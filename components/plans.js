document.addEventListener("DOMContentLoaded", () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$10/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Standard Plan",
      price: "$20/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      name: "Premium Plan",
      price: "$30/month",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
    {
      name: "Ultimate Plan",
      price: "$50/month",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
      ],
    },
  ];

  const plansContainer = document.getElementById("plans");

  plans.forEach((plan) => {
    const planCard = document.createElement("div");
    planCard.classList.add("plan-card");

    const planTitle = document.createElement("h2");
    planTitle.textContent = plan.name;

    const planPrice = document.createElement("p");
    planPrice.textContent = plan.price;

    const planFeatures = document.createElement("ul");
    plan.features.forEach((feature) => {
      const featureItem = document.createElement("li");
      featureItem.textContent = feature;
      planFeatures.appendChild(featureItem);
    });

    const planButton = document.createElement("button");
    planButton.classList.add("btn");
    planButton.textContent = "Choose Plan";
    planButton.addEventListener("click", () => {
      alert(`You have chosen the ${plan.name}`);
    });

    planCard.appendChild(planTitle);
    planCard.appendChild(planPrice);
    planCard.appendChild(planFeatures);
    planCard.appendChild(planButton);

    plansContainer.appendChild(planCard);
  });
});
