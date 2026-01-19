const prompt = require("prompt-sync")();

let a = prompt("What is your age?");
a = Number.parseInt(a); // convert to number

if (isNaN(a)) {
    console.log("Please enter a valid number");
}
else if (a >= 18) {
    console.log("You are eligible");
}
else {
    console.log("You are not eligible");
}
