// import the reusable functions
import { formatDate } from "./utils.js";

// Function to update card in local storage
function updateCardInLocalStorage(id, newTitle, newNote, newCategory, newDate) {
  // Get cards from local storage
  const cards = JSON.parse(localStorage.getItem("cards")) || [];

  // Find card by id
  const cardIndex = cards.findIndex((card) => card.id === id);

  // Check if card exists, then update
  if (cardIndex !== -1) {
    // Update card in local storage
    cards[cardIndex].title = newTitle;
    cards[cardIndex].note = newNote;
    cards[cardIndex].category = newCategory;
    cards[cardIndex].date = newDate;
    localStorage.setItem("cards", JSON.stringify(cards));
  }
}

// Function to edit card
window.addEventListener("load", () => {
  // Get card id from URL
  const params = new URLSearchParams(window.location.search);

  // Get card id from URL
  const id = params.get("id");

  // Get cards from local storage
  const cards = JSON.parse(localStorage.getItem("cards")) || [];

  // Find card by id
  const card = cards.find((card) => card.id === id);

  // Check if card exists, then edit
  if (card) {
    // Display card in edit form
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
    document.getElementById("saveBtn").addEventListener("click", () => {
      const newTitle = document.getElementById("title").value;
      const newNote = document.getElementById("note").value;
      const newCategory = document.getElementById("category").value;
      const newDate = document.getElementById("date").value;

      updateCardInLocalStorage(id, newTitle, newNote, newCategory, newDate);
      window.location.href = "../pages/list.html";
    });
  } else {
    document.getElementById(
      "editContainer"
    ).innerHTML = `<p>Note not found.</p>`;
  }
});
