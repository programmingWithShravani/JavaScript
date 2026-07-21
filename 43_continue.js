const prompt=require("prompt-sync")();

let skip = Number(prompt("Enter number to skip:"));

for (let i = 1; i <= 5; i++) {
    if (i == skip)
        continue;
    console.log(i);
}