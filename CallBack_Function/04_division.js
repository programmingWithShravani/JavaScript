// Program 4: Division using Callback

function divide(a, b, callback) {
    // Divide two numbers
    callback(a / b);
}

divide(20, 5, function(result) {
    // Print result
    console.log(result);
});