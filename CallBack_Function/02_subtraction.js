// Program 2: Subtraction using Callback

function subtract(a, b, callback) {
    // Subtract two numbers
    callback(a - b);
}

subtract(20, 5, function(result) {
    // Print result
    console.log(result);
});