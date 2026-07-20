const prompt = require("prompt-sync")();

let age =Number(prompt("Enter your age:"));
let haslicense=prompt("Do you have a license?(yes/no)");
if(age >= 18){
    if(haslicense==="yes"){
        console.log("you can drive");
    }
    else{
        console.log("get a license first");
    }
}