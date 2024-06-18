// Function to format date to "yyyy-MM-dd"
function formatDate(date) {
  const d = new Date(date);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
}

function updateCardInLocalStorage(id, newTitle, newNote, newCategory, newDate) {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  const cardIndex = cards.findIndex((card) => card.id === id);
  if (cardIndex !== -1) {
    cards[cardIndex].title = newTitle;
    cards[cardIndex].note = newNote;
    cards[cardIndex].category = newCategory;
    cards[cardIndex].date = newDate;
    localStorage.setItem("cards", JSON.stringify(cards));
  }
}

window.addEventListener("load", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  const card = cards.find((card) => card.id === id);

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
          <button type="button" id="saveBtn">Save</button>
        </form>
      `;

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
