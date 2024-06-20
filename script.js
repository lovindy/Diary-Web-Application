// Function to format date to "yyyy-MM-dd"
function formatDate(date) {
  const d = new Date(date);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
}

// Function to create the card HTML
function createCardHTML(id, title, note, date, category) {
  const formattedDate = formatDate(date);
  return `
      <div class="card" data-id="${id}">
        <div class="card-header">
          <h2 class="card-title">${title}</h2>
          <span class="card-date">${formattedDate}</span>
        </div>
        <div class="card-body">
          <p class="card-note">${note}</p>
          <p class="card-category">Category: ${category}</p>
        </div>
        <div class="card-footer">
          <button class="button button-primary" onclick="window.location.href='/src/pages/edit.html?id=${id}'">Edit</button>
          <button class="button button-danger" onclick="window.location.href='/src/pages/delete.html?id=${id}'">Delete</button>
        </div>
      </div>
    `;
}

// Load cards from local storage on page load
window.addEventListener("load", () => {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  const cardsContainer = document.getElementById("cardsContainer");
  cards.forEach((card) => {
    const cardHTML = createCardHTML(
      card.id,
      card.title,
      card.note,
      card.date,
      card.category
    );
    cardsContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
});

// handle expanding the card modal
// Function to show modal with card details
function showModal(card) {
  const modal = document.getElementById("modal");
  document.getElementById("modalTitle").textContent = card.title;
  document.getElementById("modalDate").textContent = formatDate(card.date);
  document.getElementById("modalNote").textContent = card.note;
  document.getElementById(
    "modalCategory"
  ).textContent = `Category: ${card.category}`;
  modal.style.display = "block";
}

// Close modal when the close button is clicked
document.getElementById("modalClose").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Add event listener for card clicks
document.getElementById("cardsContainer").addEventListener("click", (event) => {
  const cardElement = event.target.closest(".card");
  if (cardElement) {
    const cardId = cardElement.getAttribute("data-id");
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
    const card = cards.find((c) => c.id == cardId);
    if (card) {
      showModal(card);
    }
  }
});
