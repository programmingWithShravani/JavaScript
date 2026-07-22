// Program 9: Callback with reduce

let numbers = [1, 2, 3, 4];

// Add all numbers
let total = numbers.reduce(function(sum, num) {
    return sum + num;
}, 0);

// Print total
console.log(total);