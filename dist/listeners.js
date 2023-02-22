document.querySelector(".collection-item").addEventListener("click", () => {
    console.log("collection-item");
});
document.querySelector("#item-list").addEventListener("click", () => {
    console.log("item-list");
});
document.body.addEventListener("click", (e) => {
    if (e.target.className === "fa-solid fa-xmark") {
        e.target.parentElement.parentElement.remove();
        console.log(e.target.parentElement.parentElement);
    }
});
const tasks = [];
document.querySelector(".btn-add").addEventListener("click", (e) => {
    const inputValue = (document.getElementById("item-text-input")).value;
    console.log(inputValue, tasks);
    tasks.push(inputValue);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    e.preventDefault();
});
