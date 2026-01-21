// declaration and push method
let arr = [10, 20];
arr.push(30);
console.log(arr); // [10, 20, 30]

// pop
let arr1 = [10, 20, 30];
arr.pop();
console.log(arr1); // [10, 20]

// unshift

let arr2 = [20, 30];
arr.unshift(10);
console.log(arr2); // [10, 20, 30]

// shift

let arr3 = [10, 20, 30];
arr.shift();
console.log(arr3); // [20, 30]

// map
let arr4 = [1, 2, 3];
let sq = arr4.map(x => x * x);
console.log(sq); // [1, 4, 9]

// filter

let arr5 = [10, 15, 20, 25];
let even = arr5.filter(x => x % 2 === 0);
console.log(even); // [10, 20]

// reduce

let arr6 = [10, 20, 30];
let sum = arr6.reduce((a, b) => a + b, 0);
console.log(sum); // 60

