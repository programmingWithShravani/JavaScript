const prompt = require("prompt-sync")();

let limit = Number(prompt("Enter the limit: "));

for(let i = 5; i <= limit; i += 5)
{
    console.log(i);
}