// Function to format date to "yyyy-MM-dd"
function formatDate(date) {
  const d = new Date(date);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
}

function saveCardToLocalStorage(id, title, note, date, category) {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.push({ id, title, note, date, category });
  localStorage.setItem("cards", JSON.stringify(cards));
}

document.getElementById("addCardBtn").addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const note = document.getElementById("note").value;
  const category = document.getElementById("category").value;

  if (title && note && category) {
    const now = new Date();
    const date = formatDate(now);
    const id = Date.now().toString();
    saveCardToLocalStorage(id, title, note, date, category);
    window.location.href = "../pages/list.html";
  } else {
    alert("Please fill out all fields.");
  }
});
