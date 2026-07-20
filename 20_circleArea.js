const prompt = require("prompt-sync")();

let radius = Number(prompt("Enter radius: "));
let area = 3.14 * radius * radius;

console.log("Area of Circle =", area);