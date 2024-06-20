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
  // get the date in "yyyy-MM-dd" format
  const formattedDate = formatDate(date);
  // Truncate the note if it is too long
  const truncatedNote = note.length > 15 ? note.substring(0, 15) + "..." : note;
  return `
      <div class="card" data-id="${id}">
        <div class="card-header">
          <h2 class="card-title">${title}</h2>
          <span class="card-date">${formattedDate}</span>
        </div>
        <div class="card-body">
          <p class="card-note">${truncatedNote}</p>
          <p class="card-category">Category: ${category}</p>
        </div>
        <div class="card-footer">
          <button class="button button-primary" onclick="window.location.href='/src/pages/edit.html?id=${id}'">Edit</button>
          <button class="button button-danger" onclick="window.location.href='/src/pages/delete.html?id=${id}'">Delete</button>
        </div>
      </div>
    `;
}

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

// Function to close modal
function closeModal() {
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");
  modalContent.style.animation = "scaleOut 0.5s, fadeOut 0.5s";
  setTimeout(() => {
    modal.style.display = "none";
    modalContent.style.animation = ""; // Reset animation
  }, 500); // Match this to the animation duration
}

// Close modal when the close button is clicked
document.getElementById("modalClose").onclick = function () {
  closeModal();
};

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
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

// Load cards from local storage on page load
window.addEventListener("load", () => {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  const cardsContainer = document.getElementById("cardsContainer");
  // Loop through each card and create HTML
  cards.forEach((card) => {
    const cardHTML = createCardHTML(
      card.id,
      card.title,
      card.note,
      card.date,
      card.category
    );
    // insertAdjacentHTML is used to insert the HTML at the end of the element
    cardsContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
});
