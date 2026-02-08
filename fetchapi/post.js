let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "hello",
    body: "world",
    userId: 1
  })
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
