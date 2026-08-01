const name = document.getElementById("demo");
name.innerHTML="Happy birthday To Me";
name.style.color="orange";

// getElementByClassName() method
function showFruits() {
    let fruits = document.getElementsByClassName("fruit");

    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i].innerHTML);
    }
}

// getElementByTagName() method
function countPara() {
    let p = document.getElementsByTagName("p");
    alert("Total Paragraphs = " + p.length);
}

// querySelector() method
function showItem() {
    let item = document.querySelector(".item");
    alert(item.innerHTML);
}

// querySelectorAll() method
function showAll() {
    let items = document.querySelectorAll(".item");

    items.forEach(function(item) {
        console.log(item.innerHTML);
    });
}

//innerHTML property
function changeHTML() {
    let demo = document.getElementById("demo");
    demo.innerHTML = "<i>JavaScript</i>";
}

//innerText property
function showText() {
    let text = document.getElementById("text");
    alert(text.innerText);
}

//textContent property
function showContent() {
    let box = document.getElementById("box");
    alert(box.textContent);
}

//changing CSS
function changeStyle() {
    let heading = document.getElementById("heading");

    heading.style.color = "red";
    heading.style.backgroundColor = "yellow";
    heading.style.fontSize = "40px";
}

//get attribute
function changeImage() {
    let img = document.getElementById("img");

    alert(img.getAttribute("src"));

    img.setAttribute("width", "500");
}

//remove attribute
function removeWidth() {
    let img = document.getElementById("img");
    img.removeAttribute("width");
}

//classlist property
function addClass() {
    let title = document.getElementById("title");
    title.classList.add("red");
}