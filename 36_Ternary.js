const prompt = require ("prompt-sync") ();

let age=Number(prompt("Enter your age:"));
let result= age>=18?"Adult":"Minor";
console.log(result);
