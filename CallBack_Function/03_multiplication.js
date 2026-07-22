// Program 3: Multiplication using Callback

function multiply(a, b, callback) {
    // Multiply two numbers
    callback(a * b);
}

multiply(5, 7, function(result) {
    // Print result
    console.log(result);
});