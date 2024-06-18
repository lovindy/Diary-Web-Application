function removeCardFromLocalStorage(id) {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  const updatedCards = cards.filter((card) => card.id !== id);
  localStorage.setItem("cards", JSON.stringify(updatedCards));
}

window.addEventListener("load", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  const card = cards.find((card) => card.id === id);

  if (card) {
    document.getElementById("deleteContainer").innerHTML = `
        <p>Are you sure you want to delete the note titled "${card.title}"?</p>
      `;

    document
      .getElementById("confirmDeleteBtn")
      .addEventListener("click", () => {
        removeCardFromLocalStorage(id);
        window.location.href = "../pages/list.html";
      });
  } else {
    document.getElementById(
      "deleteContainer"
    ).innerHTML = `<p>Note not found.</p>`;
  }
});
