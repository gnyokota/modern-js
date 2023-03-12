class EasyHTTP {
  async get(url: string) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  async post(url, user) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }
}

const http = new EasyHTTP();

//get Users

const getJSON = async () => {
  try {
    const data = await http.get("https://jsonplaceholder.typicode.com/users");
    const innerHtmlContent = data
      .map(
        (user) =>
          `<h4>Title: ${user.name}</h4>
              <h5>Body: ${user.email}</h5>`
      )
      .join("");
    document.getElementById("output").innerHTML = innerHtmlContent;
  } catch (error) {
    document.getElementById("output").innerHTML = `<h1>${error.message}</h1>`;
  }
};

document.getElementById("button").addEventListener("click", getJSON);
