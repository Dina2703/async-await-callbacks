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

//How to create Promise yourself.For the most part, you're mostly gonna be dealing  with response to promisses , when using Axios, fetch API or anything that uses promises, the Mongoose libraray for Mondodb for nodejs uses promises.
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Post Three", body: "This is post 3 " })
//   .then(getPosts)
//   .catch((err) => console.log(err));

//Async /Await
//The purpose of async / await is to simplify the syntax necessary to consume promise-based APIs.

async function asyncFunc() {
  await createPost({ title: "Post Three", body: "This is post 3 " });
  getPosts();
}

asyncFunc();

//Async /Await / Fetch

async function fethcUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  console.log(users);
}

fethcUser();

//Promise.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Bye")
// );

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );
