// Program 10: Callback with sort

let numbers = [5, 2, 8, 1];

// Sort array in ascending order
numbers.sort(function(a, b) {
    return a - b;
});

// Print sorted array
console.log(numbers);