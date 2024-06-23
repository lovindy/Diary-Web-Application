import { formatDate } from "./utils.js";

// Function to save card to local storage
function saveCardToLocalStorage(id, title, note, date, category) {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.push({ id, title, note, date, category });
  localStorage.setItem("cards", JSON.stringify(cards));
}

document.getElementById("addCardBtn").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default form submission
  const title = document.getElementById("title").value;
  const note = document.getElementById("note").value;
  const category = document.getElementById("category").value;

  if (title && note && category) {
    const now = new Date();
    const date = formatDate(now);
    const id = Date.now().toString();
    saveCardToLocalStorage(id, title, note, date, category);
    window.location.href = "/pages/list.html";
  } else {
    alert("Please fill out all fields.");
  }
});
