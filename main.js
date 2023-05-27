const str = "DEVELOPER" 
const lowerCase = str.toLocaleLowerCase();  // Output: developer
console.log(lowerCase);

const uperCase = str.toUpperCase(); // Output: DEVELOPER
console.log(uperCase);

const len = str.length; // Output: 9
console.log(len);

const index = str[2]; // Output:  V
console.log(index);

const char1 = str.charAt(0); // Output:  D
const char2= str.charAt(2); // Output:  V

console.log(char1);
console.log(char2);

const include = str.includes("PER"); // Output:  true
console.log(include);

const endWith1 = str.endsWith("Co");  // Output:  false
const endWith2= str.endsWith("ER"); // Output:  true

console.log(endWith1);
console.log(endWith2);

const concat = str.concat(" => Js");// Output: DEVELOPER => Js
console.log(concat);


/*The code you provided has a syntax error. The slice method expects two arguments: the starting index and the ending index (optional). The correct usage would be str.slice(0, 2) to slice the string from index 0 (inclusive) to index 2 (exclusive). */

const newStr = "Hello, world!";
const slice_newStr = str.slice(0, 2);
console.log(slice_newStr);

const string = "Follow,Reza";
const split = string.split(",");
console.log(split);







