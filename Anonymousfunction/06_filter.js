// Program 6: Anonymous Function with filter()

let numbers = [10, 15, 20, 25];

// Filter even numbers
let even = numbers.filter(function (num) {
    return num % 2 === 0;
});

// Print Even Numbers
console.log(even);