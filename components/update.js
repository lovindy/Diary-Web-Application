// import components
import { formatDate } from "./utils.js";

// Function to update card in local storage
function updateCardInLocalStorage(id, newTitle, newNote, newCategory, newDate) {
  // Get card from local storage
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  // Find card by ID
  const cardIndex = cards.findIndex((card) => card.id === id);

  // Check if card exists in local storage
  if (cardIndex !== -1) {
    cards[cardIndex].title = newTitle;
    cards[cardIndex].note = newNote;
    cards[cardIndex].category = newCategory;
    cards[cardIndex].date = newDate;
    localStorage.setItem("cards", JSON.stringify(cards));
  }
}

// Function to edit card
window.addEventListener("load", () => {
  // Get card from local storage
  const params = new URLSearchParams(window.location.search);
  // Get ID
  const id = params.get("id");
  // Get card from local storage
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  // Find card by ID
  const card = cards.find((card) => card.id === id);

  // Check if card exists in local storage
  if (card) {
    document.getElementById("editContainer").innerHTML = `
        <form id="editForm">
          <label for="title">Title:</label>
          <input type="text" id="title" value="${card.title}" required>
          <label for="note">Note:</label>
          <textarea id="note" required>${card.note}</textarea>
          <label for="category">Category:</label>
          <input type="text" id="category" value="${card.category}" required>
          <label for="date">Date:</label>
          <input type="date" id="date" value="${formatDate(
            card.date
          )}" required>
          <button class="button-primary" id="saveBtn">Save</button>
        </form>
      `;

    // Add event listener to save button
    document.getElementById("saveBtn").addEventListener("click", (event) => {
      // Prevent default form submission
      event.preventDefault();
      // Get values from form
      const newTitle = document.getElementById("title").value;
      const newNote = document.getElementById("note").value;
      const newCategory = document.getElementById("category").value;
      const newDate = document.getElementById("date").value;

      // Update card in local storage
      updateCardInLocalStorage(id, newTitle, newNote, newCategory, newDate);
      window.location.href = "../pages/list.html";
    });
  } else {
    document.getElementById(
      "editContainer"
    ).innerHTML = `<p>Note not found.</p>`;
  }
});
