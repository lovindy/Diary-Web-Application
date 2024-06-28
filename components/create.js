// import components
import { formatDate } from "./utils.js";

// Function to save card to local storage
function saveCardToLocalStorage(id, title, note, date, category) {
  // Get card from local storage
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  // Add card to local storage
  cards.push({ id, title, note, date, category });
  // Save card to local storage
  localStorage.setItem("cards", JSON.stringify(cards));
}

// Get values from form
document.getElementById("addCardBtn").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default form submission
  const title = document.getElementById("title").value;
  const note = document.getElementById("note").value;
  const category = document.getElementById("category").value;

  // Error message elements
  const titleError = document.getElementById("title-error");
  const noteError = document.getElementById("note-error");
  const categoryError = document.getElementById("category-error");

  // Clear previous error messages
  titleError.style.display = "none";
  noteError.style.display = "none";
  categoryError.style.display = "none";

  let valid = true;

  // Validate input of the title
  if (!title) {
    titleError.textContent = "Title is required.";
    titleError.style.display = "block";
    valid = false;
  }

  // Validate input of the note
  if (!note) {
    noteError.textContent = "Note is required.";
    noteError.style.display = "block";
    valid = false;
  }

  // Validate input of the category
  if (!category) {
    categoryError.textContent = "Category is required.";
    categoryError.style.display = "block";
    valid = false;
  }

  // Save card if valid
  if (valid) {
    const now = new Date();
    const date = formatDate(now);
    const id = Date.now().toString();
    saveCardToLocalStorage(id, title, note, date, category);
    window.location.href = "/pages/list.html";
  }
});
