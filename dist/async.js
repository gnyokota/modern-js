const loadData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = function () {
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            const innerHtmlContent = data
                .map((user) => `<h4>${user.name}</h4>
            <h5>${user.email}</h5>`)
                .join("");
            document.getElementById("output").innerHTML = innerHtmlContent;
        }
    };
    xhr.send();
};
document.getElementById("button").addEventListener("click", loadData);
