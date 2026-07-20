const prompt = require("prompt-sync")();

let celsius = Number(prompt("Enter temperature in Celsius: "));
let fahrenheit = (celsius * 9 / 5) + 32;

console.log("Temperature in Fahrenheit =", fahrenheit);