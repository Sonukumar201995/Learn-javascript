// basic fun ction

function greet() {
  console.log("Hello, Sonu!");
}

greet(); // function call

// parameterize function..
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // 8


// function expressions
const multiply = function (x, y) {
  return x * y;
};

console.log(multiply(4, 5)); // 20
// Arrow function

const subtract = (a, b) => {
  return a - b;
};

// function returning a values
function square(num) {
  return num * num;
}

console.log(square(6)); // 36

// Anonymous Function
setTimeout(function () {
  console.log("Hello after 2 seconds");
}, 2000);


// call back function
function processData(callback) {
  callback();
}

processData(() => {
  console.log("Callback executed");
});
