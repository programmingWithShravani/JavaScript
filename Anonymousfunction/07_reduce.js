// Program 7: Anonymous Function with reduce()

let numbers = [1, 2, 3, 4];

// Add all numbers
let sum = numbers.reduce(function (total, num) {
    return total + num;
}, 0);

// Print total sum
console.log(sum);