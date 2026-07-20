const prompt = require("prompt-sync")();

let rupees = Number(prompt("Enter amount in Rupees: "));

console.log("Paise =", rupees * 100);