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

const slice_str = str.slice("0,2"); // problem! 
console.log(slice_str);

const string = "Follow,Reza";   // problem! 

const split = string.split("-")
console.log(split);






