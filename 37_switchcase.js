const prompt = require("prompt-sync") ();

let day = Number(prompt("Enter day Number(1-3):"));
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
        default:
        console.log("invalid day");
}