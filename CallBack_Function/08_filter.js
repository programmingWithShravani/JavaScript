// Program 8: Callback with filter

let numbers = [10, 15, 20, 25];

// Filter even numbers
let even = numbers.filter(function(num) {
    return num % 2 == 0;
});

// Print even numbers
console.log(even);