
//Arithmatic operators...

let a = 10, b = 3;

console.log(a + b)    // Addition → 13
console.log(a - b)   // Subtraction → 7
console.log(a * b)   // Multiplication → 30
console.log(a / b)   // Division → 3.33
console.log(a % b)   // Modulus → 1
console.log(a ** b)  // Power → 1000


// Asigment operators

let x = 5;

console.log(x += 3);   // x = x + 3
console.log(x -= 2);
console.log(x *= 2);
console.log(x /= 2);


// comprassion operators

console.log(5 == "5")     // true  (value check)
console.log(5 === "5")    // false (value + type check)
console.log(5 != 6)       // true
console.log(5 !== "5")    // true
console.log(5 > 3)        // true
console.log(5 <= 5)       // true


// Ternory operator

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";
console.log(result)