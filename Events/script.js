// Click Event
// Executes when button is clicked

const clickBtn=document.getElementById("clickBtn");

clickBtn.addEventListener("click",function(){

alert("Button Clicked");

});

// Double Click Event
// Executes when button is double clicked

const dblBtn=document.getElementById("dblBtn");

dblBtn.addEventListener("dblclick",function(){

alert("Double Click");

});


// Mouse Events

const box=document.getElementById("box");

// Mouse enters
box.addEventListener("mouseover",function(){

box.style.background="green";
console.log("Mouse Entered");

});

// Mouse leaves
box.addEventListener("mouseout",function(){

box.style.background="orange";
console.log("Mouse Left");

});

// Mouse moves
box.addEventListener("mousemove",function(event){

console.log(event.clientX,event.clientY);

});

// Keyboard Events


const keyboard=document.getElementById("keyboard");

// Key Pressed
keyboard.addEventListener("keydown",function(event){
console.log("Key Down :",event.key);
});

// Key Released
keyboard.addEventListener("keyup",function(event){
console.log("Key Up :",event.key);
});

// Input Event
// Runs whenever user types

const liveInput=document.getElementById("liveInput");
const output=document.getElementById("output");
liveInput.addEventListener("input",function(){
output.innerHTML=liveInput.value;
});


// Change Event
// Runs after selection changes

const city=document.getElementById("city");
city.addEventListener("change",function(){
alert("Selected : "+city.value);
});

// Submit Event
// Prevent page refresh

const form=document.getElementById("form");
form.addEventListener("submit",function(e){
e.preventDefault();
alert("Form Submitted");

});


// Focus Event
// Input gets focus

const focusInput=document.getElementById("focusInput");
focusInput.addEventListener("focus",function(){
focusInput.style.background="yellow";
});

// Blur Event
// Input loses focus

focusInput.addEventListener("blur",function(){
focusInput.style.background="white";

});


// preventDefault()
// Stops opening Google

const link=document.getElementById("link");

link.addEventListener("click",function(e){

e.preventDefault();
alert("Navigation Blocked");
});

