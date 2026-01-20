/*
DEFINITION:
A String in JavaScript is a sequence of characters used to represent text.
Strings are IMMUTABLE (cannot be changed directly).
*/

let str = "  JavaScript is Powerful  ";

console.log("Original String:", str);

// 1. length – returns total characters
console.log("Length:", str.length);

// 2. toUpperCase() – converts to uppercase
console.log("Uppercase:", str.toUpperCase());

// 3. toLowerCase() – converts to lowercase
console.log("Lowercase:", str.toLowerCase());

// 4. trim() – removes spaces from start and end
console.log("Trimmed:", str.trim());

// 5. slice(start, end) – extracts part of string
console.log("Slice (0,10):", str.slice(0, 10));

// 6. substring(start, end) – similar to slice
console.log("Substring (2,12):", str.substring(2, 12));

// 7. replace() – replaces first match
console.log(
  "Replace:",
  str.replace("Powerful", "Awesome")
);

// 8. includes() – checks if word exists
console.log("Includes 'JavaScript':", str.includes("JavaScript"));

// 9. startsWith() – checks starting word
console.log("Starts With '  Java':", str.startsWith("  Java"));

// 10. endsWith() – checks ending word
console.log("Ends With 'ful  ':", str.endsWith("ful  "));

// 11. indexOf() – first occurrence index
console.log("Index Of 'a':", str.indexOf("a"));

// 12. lastIndexOf() – last occurrence index
console.log("Last Index Of 'a':", str.lastIndexOf("a"));

// 13. charAt(index) – character at index
console.log("Char At 5:", str.charAt(5));

// 14. split() – converts string to array
let words = str.trim().split(" ");
console.log("Split:", words);

// 15. concat() – joins strings
let a = "Hello";
let b = "Sonu";
console.log("Concat:", a.concat(" ", b));

/*
IMPORTANT POINTS:
1. Strings are immutable
2. Index starts from 0
3. Methods return NEW string
*/
let name = "Sonu";
let skill = "JavaScript";

let message = `My name is ${name} and I am learning ${skill}`;
console.log(message);
