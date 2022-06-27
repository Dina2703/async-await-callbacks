const posts = [
  { title: "Post one", body: "this is post One" },
  { title: "Post two", body: "this is post Two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

// getPosts function now callback
// getPosts();

createPost({ title: "post three", body: "this is post Three" }, getPosts);
