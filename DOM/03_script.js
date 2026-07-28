function showFruits() {
    let fruits = document.getElementsByClassName("fruit");

    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i].innerHTML);
    }
}