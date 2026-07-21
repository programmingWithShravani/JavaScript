const prompt=require("prompt-sync")();

let i = Number(prompt("Enter starting number:"));

while (i >= 1) {
    console.log(i);
    i--;
}
