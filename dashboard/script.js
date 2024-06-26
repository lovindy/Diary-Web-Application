document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.getElementById("todoList");
  const inProgressList = document.getElementById("inProgressList");
  const doneList = document.getElementById("doneList");
  const diaryModal = document.getElementById("diaryModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");
  const modalDate = document.getElementById("modalDate");
  const closeBtn = document.querySelector(".close-btn");
  const editDiaryBtn = document.getElementById("editDiaryBtn");
  const deleteDiaryBtn = document.getElementById("deleteDiaryBtn");

  let diaries = JSON.parse(localStorage.getItem("diaries")) || [];
  let selectedDiary = null;

  function saveDiaries() {
    localStorage.setItem("diaries", JSON.stringify(diaries));
  }

  function renderDiaries() {
    todoList.innerHTML = "";
    inProgressList.innerHTML = "";
    doneList.innerHTML = "";
    diaries.forEach((diary) => {
      const diaryCard = document.createElement("div");
      diaryCard.className = "diary-card";
      diaryCard.classList.add(diary.category); // Add category-specific class
      diaryCard.draggable = true;
      diaryCard.textContent = `${diary.title} - ${new Date(
        diary.datetime
      ).toLocaleString()}`;
      diaryCard.addEventListener("click", () => viewDiary(diary));
      diaryCard.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", diary.id);
      });
      if (diary.category === "todo") {
        todoList.appendChild(diaryCard);
      } else if (diary.category === "inProgress") {
        inProgressList.appendChild(diaryCard);
      } else if (diary.category === "done") {
        doneList.appendChild(diaryCard);
      }
    });
  }

  function viewDiary(diary) {
    selectedDiary = diary;
    modalTitle.textContent = diary.title;
    modalContent.textContent = diary.content;
    modalDate.textContent = new Date(diary.datetime).toLocaleString();
    diaryModal.style.display = "block";
  }

  closeBtn.addEventListener("click", () => {
    diaryModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == diaryModal) {
      diaryModal.style.display = "none";
    }
  });

  editDiaryBtn.addEventListener("click", () => {
    window.location.href = `create.html?id=${selectedDiary.id}`;
  });

  deleteDiaryBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this diary entry?")) {
      diaries = diaries.filter((diary) => diary.id !== selectedDiary.id);
      saveDiaries();
      renderDiaries();
      diaryModal.style.display = "none";
    }
  });

  document.querySelectorAll(".diary-list").forEach((list) => {
    list.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    list.addEventListener("drop", (e) => {
      const id = e.dataTransfer.getData("text/plain");
      const diary = diaries.find((diary) => diary.id == id);
      diary.category = e.target.closest(".column").id;
      saveDiaries();
      renderDiaries();
    });
  });

  renderDiaries();
});
