const getJson = () => {
    fetch("https://jsonplaceholder.typicode.com/post")
        .then((res) => res.json())
        .then((data) => {
        const innerHtmlContent = data
            .map((post) => `<h4>${post.title}</h4>
          <h5>${post.body}</h5>`)
            .join("");
        document.getElementById("output").innerHTML = innerHtmlContent;
    })
        .catch((error) => (document.getElementById("output").innerHTML = `<h1>${error.message}</h1>`));
};
