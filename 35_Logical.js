const prompt= require("prompt-sync")();

let age = Number(prompt("Enter your age:"));
let citizen = prompt("Are you an indian Citizen?(yes/no)");

if(age>=18 && citizen==="yes"){
    console.log("Eligible For votiong");
}