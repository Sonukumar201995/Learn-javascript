// aynchronous 
const prompt = require("prompt-sync")();
let a=prompt('Enter your name');
let b=prompt('Enter your age');
let c=prompt('Enter your favorite color');

console.log(a+'is' +b+ 'age is' +c+ 'favorite code is ');

// synchronous 

console.log('start');

setTimeout(() => {
    console.log('hello');
}, 3000);
