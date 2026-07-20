const prompt = require("prompt-sync")();

let fahrenheit = Number(prompt("Enter temperature in Fahrenheit: "));
let celsius = (fahrenheit - 32) * 5 / 9;

console.log("Temperature in Celsius =", celsius);