const btnClear = document.querySelector(".btn-clear");
const title = document.getElementById("task-title");
const container = document.getElementsByClassName("container")[0];
btnClear.addEventListener(`click`, (e) => runEvent(e));
container.addEventListener("mousemove", (e) => runMouseEvent(e));
const runEvent = (e) => {
    console.log(`Event: ${e.type}`);
};
const runMouseEvent = (e) => {
    title.textContent = `X:${e.offsetX} Y:${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},2)`;
};
