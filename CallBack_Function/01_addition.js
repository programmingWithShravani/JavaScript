// Program 1: Simple Callback Function

function greet(callback) {
    // Print greeting message
    console.log("Hello");

    // Call the callback function
    callback();
}

function message() {
    // Print callback message
    console.log("Welcome");
}

greet(message);