const prompt=require("prompt-sync")();
41
let name = prompt("Enter a name:");

for (let letter of name) {
    console.log(letter);
}