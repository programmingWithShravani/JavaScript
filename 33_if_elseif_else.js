const prompt = require("prompt-sync")();

let marks=Number(prompt("Enter your marks:"));

if(marks >= 90)
{
    console.log("Grade A");
}
else if(marks>=75){
    console.log("Grade B");
}
else if(marks >= 50){
    console.log("Grade C");
}
else{
    console.log("fail");
}