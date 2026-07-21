const prompt=require("prompt-sync")();

let stop = Number(prompt("Enter break value:"));

for (let i = 1; i <= 10; i++) {
    if (i == stop)
        break;
    console.log(i);
}