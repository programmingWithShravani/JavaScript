const prompt=require("prompt-sync")();

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let c = Number(prompt("Enter third number:"));

if (a > b && a > c)
    console.log("Largest =", a);
else if (b > c)
    console.log("Largest =", b);
else
    console.log("Largest =", c);