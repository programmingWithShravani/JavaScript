const prompt = require("prompt-sync")();

let year = Number(prompt("Enter a year: "));

if (year % 4 == 0) {
    console.log("Leap Year");
}
else {
    console.log("Not a Leap Year");
}