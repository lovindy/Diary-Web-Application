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
          <button class="button edit-btn" onclick="window.location.href='/src/pages/edit.html?id=${id}'">Edit</button>
          <button class="button delete-btn" onclick="window.location.href='/src/pages/delete.html?id=${id}'">Delete</button>
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
