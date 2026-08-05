// Example 3: Average
function average(...nums){
    let total = nums.reduce((a,b)=>a+b,0);
    console.log(total/nums.length);
}
average(10,20,30);