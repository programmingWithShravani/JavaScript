// Example 2: Sum
function sum(...numbers){
    let total = 0;

    for(let num of numbers){
        total += num;
    }

    console.log(total);
}
sum(10,20,30);