let title = document.getElementById("title");
let description = document.getElementById("description");
let addBtn = document.getElementById("addBtn");
let deleteBtn = document.getElementById("deleteBtn");
let startTime = document.getElementById("startTime");
let endTime = document.getElementById("endTime");

addBtn.addEventListener("click", () => {
  let newTitle = document.createElement("div");
  let newDescription = document.createElement("div");
  let newStartTime = document.createElement("div");
  let newEndTime = document.createElement("div");

  newTitle.textContent = title.value;
  newDescription.textContent = description.value;
  newStartTime.textContent = startTime.value;
  newEndTime.textContent = endTime.value;

  document.body.appendChild(newTitle);
  newTitle.classList.add("newTitle");
  document.body.appendChild(newDescription);
  newDescription.classList.add("newDescription");
  document.body.appendChild(newStartTime);
  newStartTime.classList.add("newStartTime");
  document.body.appendChild(newEndTime);
  newEndTime.classList.add("newEndTime");
});
deleteBtn.addEventListener("click", () => {
  title.value = "";
  description.value = "";
  startTime.value = "";
  endTime.value = "";
});
