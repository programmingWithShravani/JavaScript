const prompt=require("prompt-sync")();

let n = Number(prompt("Enter last number:"));
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum =", sum);