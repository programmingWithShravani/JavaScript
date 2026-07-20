const prompt = require("prompt-sync")();

let p = Number(prompt("Enter Principal: "));
let r = Number(prompt("Enter Rate: "));
let t = Number(prompt("Enter Time: "));

let si = (p * r * t) / 100;

console.log("Simple Interest =", si);