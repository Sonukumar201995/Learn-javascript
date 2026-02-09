const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage('./scratch');

localStorage.setItem("name", "Sonu");
console.log(localStorage.getItem("name"));
