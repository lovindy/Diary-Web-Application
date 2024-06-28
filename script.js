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
  // Format the date
  const formattedDate = formatDate(date);
  // Truncate the note if it is longer than 15 characters
  const truncatedNote =
    note.length > 15 ? note.substring(0, 15) + "...See More" : note;
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
        <button class="button button-primary" onclick="window.location.href='/pages/update.html?id=${id}'">Update</button>
        <button class="button button-delete" onclick="event.stopPropagation(); showDeleteModal(${id})">Delete</button>
      </div>
    </div>
  `;
}

// Function to show modal with card details
function showModal(modalId, card) {
  const modal = document.getElementById(modalId);
  if (modalId === "modal") {
    // Show modal with card details
    document.getElementById("modalTitle").textContent = card.title;
    document.getElementById("modalDate").textContent = formatDate(card.date);
    document.getElementById("modalNote").textContent = card.note;
    document.getElementById(
      "modalCategory"
    ).textContent = `Category: ${card.category}`;
  }
  modal.style.display = "block";
}

// Function to close modal
function closeModal(modalId) {
  // Hide modal
  const modal = document.getElementById(modalId);
  const modalContent = modal.querySelector(".modal-content");
  modalContent.style.animation = "scaleOut 0.5s, fadeOut 0.5s";
  setTimeout(() => {
    modal.style.display = "none";
    modalContent.style.animation = ""; // Reset animation
  }, 500); // Match this to the animation duration
}

// Event listeners for closing modals
document.getElementById("modalClose").onclick = function () {
  closeModal("modal");
};

// Delete modal
document.getElementById("deleteModalClose").onclick = function () {
  closeModal("deleteModal");
};

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  // Close modal when clicking outside the modal content
  const editModal = document.getElementById("modal");
  const deleteModal = document.getElementById("deleteModal");
  if (event.target === editModal) {
    closeModal("modal");
  } else if (event.target === deleteModal) {
    closeModal("deleteModal");
  }
};

// Add event listener for card clicks
document.getElementById("cardsContainer").addEventListener("click", (event) => {
  // Close modal when clicking on a card
  const cardElement = event.target.closest(".card");
  if (cardElement && !event.target.classList.contains("button-danger")) {
    // Get card ID
    const cardId = cardElement.getAttribute("data-id");
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
    const card = cards.find((c) => c.id == cardId);
    if (card) {
      showModal("modal", card);
    }
  }
});

// Show delete modal
function showDeleteModal(cardId) {
  // Show delete modal
  const deleteModal = document.getElementById("deleteModal");
  // Get card ID
  deleteModal.setAttribute("data-id", cardId);
  deleteModal.style.display = "block";
}

// Confirm delete
document.getElementById("confirmDeleteButton").onclick = function () {
  // Remove card from local storage
  const deleteModal = document.getElementById("deleteModal");
  const cardId = deleteModal.getAttribute("data-id");
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  // Get card from local storage
  const updatedCards = cards.filter((c) => c.id != cardId);
  // Update local storage
  localStorage.setItem("cards", JSON.stringify(updatedCards));
  // Remove card from local storage
  document.querySelector(`[data-id="${cardId}"]`).remove();
  closeModal("deleteModal");
};

// Cancel delete
document.getElementById("cancelDeleteButton").onclick = function () {
  closeModal("deleteModal");
};

// Load cards from local storage on page load
window.addEventListener("load", () => {
  // Get cards from local storage
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  // Insert cards into DOM
  const cardsContainer = document.getElementById("cardsContainer");
  // Insert cards into DOM
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
