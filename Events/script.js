// Click Event

document.getElementById("clickBtn");
clickBtn.addEventListener("click", function ()
 {

    alert("Welcome to  my website");

});

// Double Click Event

document.getElementById("dblBtn");
dblBtn.addEventListener("dblclick", function () 
{

    alert("Double Click");

});

// Mouseover Event

const box = document.getElementById("box");

box.addEventListener("mouseover", function () {

    // Change background when mouse enters

    box.style.backgroundColor = "orange";

    console.log("Mouse Entered");

});

// Mouseout Event

box.addEventListener("mouseout", function () {

    // Restore background when mouse leaves

    box.style.backgroundColor = "lightblue";

    console.log("Mouse Left");

});


// Mousemove Event

document.addEventListener("mousemove", function (event) {

    // Display mouse coordinates

    console.log("X:", event.clientX, "Y:", event.clientY);

});

// Keydown Event

const input = document.getElementById("textInput");

input.addEventListener("keydown", function (event) {

    // Detect pressed key

    console.log("Key Down :", event.key);

});

// Keyup Event

input.addEventListener("keyup", function (event) {

    // Detect released key

    console.log("Key Up :", event.key);

});

// Input Event

input.addEventListener("input", function () {

    // Show live typing

    document.getElementById("displayText").innerHTML = input.value;

});

// Change Event

document.getElementById("city").addEventListener("change", function () {

    // Display selected city

    alert(this.value);

});

// Focus Event

input.addEventListener("focus", function () {

    // Highlight input field

    input.style.backgroundColor = "yellow";

});

// Blur Event

input.addEventListener("blur", function () {

    // Restore background

    input.style.backgroundColor = "white";

});


// Submit Event


document.getElementById("myForm").addEventListener("submit", function (event) {

    // Prevent page refresh

    event.preventDefault();

    alert("Form Submitted Successfully");

});


// Load Event

window.addEventListener("load", function () {

    console.log("Website Loaded");

});

// Scroll Event

window.addEventListener("scroll", function () {

    // Display scroll position

    document.getElementById("scrollValue").innerHTML =
        "Scroll Position : " + window.scrollY;

});

// Resize Event

window.addEventListener("resize", function () {

    // Display current width

    console.log("Window Width :", window.innerWidth);

});

// Event Bubbling

document.getElementById("parent").addEventListener("click", function () {

    console.log("Parent Clicked");

});

document.getElementById("child").addEventListener("click", function () {

    console.log("Child Clicked");

});

// preventDefault()

document.getElementById("googleLink").addEventListener("click", function (event) {

    // Stop opening Google

    event.preventDefault();

    alert("Navigation Blocked");

});

// Website Protection


// Disable right click

document.addEventListener("contextmenu", function (event) {

    event.preventDefault();

});

// Disable copy

document.addEventListener("copy", function (event) {

    event.preventDefault();

});

// Disable cut

document.addEventListener("cut", function (event) {

    event.preventDefault();

});

// Disable paste

document.addEventListener("paste", function (event) {

    event.preventDefault();

});

// Disable text selection

document.addEventListener("selectstart", function (event) {

    event.preventDefault();

});

// Disable dragging

document.addEventListener("dragstart", function (event) {

    event.preventDefault();

});

// Disable F12 and common shortcuts

document.addEventListener("keydown", function (event) {

    if (event.key === "F12") {

        event.preventDefault();

    }

    if (event.ctrlKey &&
        ["u", "c", "x", "s", "a"].includes(event.key.toLowerCase())) {

        event.preventDefault();

    }

    if (event.ctrlKey &&
        event.shiftKey &&
        ["i", "j", "c"].includes(event.key.toLowerCase())) {

        event.preventDefault();

    }

});

// Laptop/Desktop Checking


function checkScreen() {

    if (window.innerWidth < 992) {

        document.getElementById("content").style.display = "none";

        document.getElementById("warning").style.display = "block";

    }

    else {

        document.getElementById("content").style.display = "block";

        document.getElementById("warning").style.display = "none";

    }

}

checkScreen();

window.addEventListener("resize", checkScreen);