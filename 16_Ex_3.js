const prompt = require("prompt-sync")();

let birthYear = Number(prompt("Enter your birth year: "));
let age = 2026 - birthYear;

console.log("Your age is:", age);