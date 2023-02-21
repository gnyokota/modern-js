//document.getElementById:
// console.log(document.getElementById("task-title"));

//get things from the element:
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

//change styling:
// const taskTitle = document.getElementById("task-title");
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";

//It will get the first h5:
// document.getElementById("h5");
// document.getElementById("li:nth-child(3)").style.color = "blue";

//It will get an array of elements:
// document.getElementsByClassName("collection-item");
// document.getElementsByTagName("li");

//returns a node list:
// const allSelect = document.querySelector("ul.collection");

//create element:
const li = document.createElement("li");
li.className = "collection-item";
li.setAttribute("title", "New Item");
li.appendChild(document.createTextNode(`Hello world`));
document.querySelector("ul.collection").appendChild(li);
const button = document.createElement("button");
button.className = "remove-item btn-link text-red";
const allUl = document.querySelectorAll("li");
allUl[allUl.length - 1].appendChild(button);
const iTag = document.createElement("i");
iTag.style.padding = "0 4px";
iTag.className = "fa-solid fa-xmark";
const buttons = document.getElementsByClassName("remove-item");
buttons[buttons.length - 1].appendChild(iTag);
