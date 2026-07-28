// Disable Right Click

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Right Click Disabled");
});

// Disable Copy

document.addEventListener("copy", function (event) {
    event.preventDefault();
    alert("Copy Disabled");
});

// Disable Cut

document.addEventListener("cut", function (event) {
    event.preventDefault();
    alert("Cut Disabled");
});

// Disable Paste

document.addEventListener("paste", function (event) {
    event.preventDefault();
    alert("Paste Disabled");
});

// Disable Text Selection

document.addEventListener("selectstart", function (event) {
    event.preventDefault();
    alert("Text Selection Disabled");
});

// Disable Image Dragging

document.addEventListener("dragstart", function (event) {
    event.preventDefault();
    alert("Dragging Disabled");
});

// Disable Keyboard Shortcuts
document.addEventListener("keydown", function (event) {

    // Disable F12

    if (event.key === "F12") {
        event.preventDefault();
        alert("F12 Disabled");
    }

    // Disable Ctrl + U

    if (event.ctrlKey && event.key.toLowerCase() === "u") {
        event.preventDefault();
        alert("Ctrl + U Disabled");
    }

    // Disable Ctrl + Shift + I

    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "i") {
        event.preventDefault();
        alert("Developer Tools Disabled");
    }
});