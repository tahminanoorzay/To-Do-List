let title = document.getElementById("title");
let description = document.getElementById("description");
let addBtn = document.getElementById("addBtn");
let deleteBtn = document.getElementById("deleteBtn");

addBtn.addEventListener("click", () => {
  let newTitle = document.createElement("div");
  let newDescription = document.createElement("div");

  newTitle.textContent = title.value;
  newDescription.textContent = description.value;

  document.body.appendChild(newTitle);
  newTitle.classList.add("newTitle");
  document.body.appendChild(newDescription);
  newDescription.classList.add("newDescription");
});
