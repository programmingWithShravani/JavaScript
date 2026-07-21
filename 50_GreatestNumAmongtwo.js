const prompt = require("prompt-sync")();

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));

if (a > b) {
    console.log("Greatest Number is: " + a);
}
else {
    console.log("Greatest Number is: " + b);
}