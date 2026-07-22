// Program 12: Check Even using Callback

function check(num, callback) {

    // Check even number
    callback(num % 2 == 0);

}

check(8, function(result) {

    // Print result
    console.log(result);

});