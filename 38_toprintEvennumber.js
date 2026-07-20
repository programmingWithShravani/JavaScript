const prompt=require("prompt-sync") ();

let n=Number(prompt("Enter limit"));
for(let i=1;i<=n;i+=2){
    console.log(i);
}