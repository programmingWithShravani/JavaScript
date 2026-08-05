// Example 8: Product
function multiply(...nums){
    let result = 1;

    for(let n of nums){
        result *= n;
    }

    console.log(result);
}
multiply(2,3,4);