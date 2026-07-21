const prompt=require("prompt-sync")();

let n = Number(prompt("Enter limit:"));
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= n);