const prompt = require("prompt-sync")();

let minutes = Number(prompt("Enter minutes: "));

let hours = minutes / 60;

console.log("Hours =", hours);