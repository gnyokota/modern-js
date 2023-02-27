// document.querySelector(".btn-clear").addEventListener("click", (e: any) => {
//   console.log(`addEventListener`);
//   console.log(e.target.className);
//   console.log(e.type);
//   e.preventDefault();
// });

// const btnClear = document.querySelector(".btn-clear");
// const title = document.getElementById("task-title");
// const container = document.getElementsByClassName("container")[0];

// btnClear.addEventListener(`click`, (e) => runEvent(e));

// const runEvent = (e: any) => {
//   console.log(`Event: ${e.type}`);
// };

// container.addEventListener("mousemove", (e) => runMouseEvent(e));

// const runMouseEvent = (e: any) => {
//   title.textContent = `X:${e.offsetX} Y:${e.offsetY}`;
//   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},2)`;
// };

// const inputItem = document.getElementById("item-input");

// inputItem.addEventListener("keydown", (e) => runEventKeyDown(e));

// const runEventKeyDown = (e: any) => {
//   console.log(`${e.type} : ${e.target.value}`);
// };

//event bubbling
document.querySelector(".collection-item").addEventListener("click", () => {
  console.log("collection-item");
});

document.querySelector("#item-list").addEventListener("click", () => {
  console.log("item-list");
});

document.body.addEventListener("click", (e: any) => {
  if (e.target.className === "fa-solid fa-xmark") {
    e.target.parentElement.parentElement.remove();
  }
});

//local-storage (long term)
// localStorage.setItem("Long", "John");
// sessionStorage.setItem("Short", "Ann");
//remove from storage
// localStorage.removeItem("Long");

const tasks = [];
document.querySelector(".btn-add").addEventListener("click", (e) => {
  const inputValue = (<HTMLInputElement>(
    document.getElementById("item-text-input")
  )).value;
  tasks.push(inputValue);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  e.preventDefault();

  const ulItem = document.getElementById("item-list");
  const liItem = document.createElement("li");
  liItem.className = "collection-item";
  liItem.innerHTML = `${JSON.parse(localStorage.getItem("tasks")).at(-1)} `;
  const buttonItem = document.createElement("button");
  buttonItem.className = "remove-item btn-link text-red";
  const iItem = document.createElement("i");
  iItem.className = "fa-solid fa-xmark";
  ulItem.appendChild(liItem);
  liItem.appendChild(buttonItem);
  buttonItem.appendChild(iItem);
  console.log(JSON.parse(localStorage.getItem("tasks"))[0]);
});
