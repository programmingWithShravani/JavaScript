const prompt = require("prompt-sync")();

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
let c = Number(prompt("Enter third number: "));

let average = (a + b + c) / 3;

console.log("Average =", average);