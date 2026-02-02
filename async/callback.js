function greet(name, callback) {
  console.log("Hello " + name);
  callback();   // yahan callback call ho raha hai
}

function sayBye() {
  console.log("Bye!");
}

greet("Sonu", sayBye);
