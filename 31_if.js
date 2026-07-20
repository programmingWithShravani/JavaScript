const prompt = require("prompt-sync")();
let age = Number(prompt("Enter yur age:"));

if(age>=18)
{
    console.log("You are eligible for voting");
}