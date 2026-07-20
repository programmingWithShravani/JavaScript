const prompt = require("prompt-sync")();

let km = Number(prompt("Enter distance in kilometers: "));

console.log("Meters =", km * 1000);