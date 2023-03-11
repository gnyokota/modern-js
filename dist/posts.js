const posts = [
    { title: "Post one", postBody: "This is post one" },
    { title: "Post two", postBody: "This is post two" },
];
const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
};
const getPosts = () => {
    setTimeout(() => {
        const content = posts.map((post) => `<li>${post.title}</li>`).join("");
        document.getElementById("output").innerHTML = `<ul>${content}</ul>`;
    }, 1000);
};
createPost({ title: "Post three", postBody: "This is post three" }, getPosts);
const createPostPromise = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = true;
            if (!error) {
                resolve();
            }
            else {
                reject("Something went wrong");
            }
        }, 2000);
    });
};
createPostPromise({ title: "Post four", postBody: "This is post four" })
    .then(getPosts)
    .catch((error) => (document.getElementById("output").innerHTML = `<ul>${error}</ul>`));
