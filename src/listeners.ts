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
    console.log(e.target.parentElement.parentElement);
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
});
