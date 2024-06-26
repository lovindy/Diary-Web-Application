document.addEventListener("DOMContentLoaded", () => {
  const diaryForm = document.getElementById("diaryForm");
  const diaryIdInput = document.getElementById("diaryId");
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const datetimeInput = document.getElementById("datetime");

  let diaries = JSON.parse(localStorage.getItem("diaries")) || [];
  const urlParams = new URLSearchParams(window.location.search);
  const diaryId = urlParams.get("id");

  if (diaryId) {
    const diary = diaries.find((diary) => diary.id == diaryId);
    if (diary) {
      diaryIdInput.value = diary.id;
      titleInput.value = diary.title;
      contentInput.value = diary.content;
      datetimeInput.value = new Date(diary.datetime).toISOString().slice(0, 16);
    }
  } else {
    // Set current datetime for new diary entry
    const now = new Date();
    datetimeInput.value = now.toISOString().slice(0, 16);
  }

  diaryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = diaryIdInput.value ? parseInt(diaryIdInput.value) : Date.now();
    const title = titleInput.value;
    const content = contentInput.value;
    const datetime = datetimeInput.value;

    if (diaryIdInput.value) {
      // Update existing diary entry
      const diary = diaries.find((diary) => diary.id == id);
      diary.title = title;
      diary.content = content;
      diary.datetime = datetime;
    } else {
      // Create new diary entry
      diaries.push({ id, title, content, datetime, category: "todo" });
    }

    localStorage.setItem("diaries", JSON.stringify(diaries));
    window.location.href = "index.html";
  });
});
