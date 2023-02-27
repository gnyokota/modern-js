document.querySelector(".collection-item").addEventListener("click", () => {
    console.log("collection-item");
});
document.querySelector("#item-list").addEventListener("click", () => {
    console.log("item-list");
});
document.body.addEventListener("click", (e) => {
    if (e.target.className === "fa-solid fa-xmark") {
        e.target.parentElement.parentElement.remove();
    }
});
const tasks = [];
document.querySelector(".btn-add").addEventListener("click", (e) => {
    const inputValue = (document.getElementById("item-text-input")).value;
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
