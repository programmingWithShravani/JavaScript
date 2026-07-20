const prompt = require("prompt-sync")();

let number=Number(prompt("Enter a number:"));

if(number % 2 === 0)
{
    console.log("Even Number");
}
else
{
    console.log("odd Number");
}