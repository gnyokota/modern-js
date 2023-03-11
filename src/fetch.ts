const getJson = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      const innerHtmlContent = data
        .map(
          (post) =>
            `<h4>Title: ${post.title}</h4>
          <h5>Body: ${post.body}</h5>`
        )
        .join("");
      document.getElementById("output").innerHTML = innerHtmlContent;
    })
    .catch(
      (error) =>
        (document.getElementById(
          "output"
        ).innerHTML = `<h1>${error.message}</h1>`)
    );
};

document.getElementById("button").addEventListener("click", getJson);
