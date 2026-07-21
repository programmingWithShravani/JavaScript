const prompt = require("prompt-sync")();

let choice = Number(prompt("Enter your choice (1-4): "));

switch(choice)
{
    case 1:
        console.log("Home");
        break;

    case 2:
        console.log("About");
        break;

    case 3:
        console.log("Services");
        break;

    case 4:
        console.log("Contact");
        break;

    default:
        console.log("Invalid Choice");
}