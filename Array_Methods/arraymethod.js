// JavaScript Array Methods

let fruits = ["Apple", "Banana", "Mango"];

// 1. length
console.log("Length:", fruits.length);

// 2. push()
fruits.push("Orange");
console.log("push:", fruits);

// 3. pop()
fruits.pop();
console.log("pop:", fruits);

// 4. unshift()
fruits.unshift("Kiwi");
console.log("unshift:", fruits);

// 5. shift()
fruits.shift();
console.log("shift:", fruits);

// 6. includes()
console.log("includes:", fruits.includes("Banana"));

// 7. indexOf()
console.log("indexOf:", fruits.indexOf("Mango"));

// 8. join()
console.log("join:", fruits.join("-"));

// 9. slice()
console.log("slice:", fruits.slice(1));

// 10. splice()
fruits.splice(1, 1, "Orange");
console.log("splice:", fruits);

// 11. reverse()
console.log("reverse:", fruits.reverse());

// 12. sort()
let nums = [5, 2, 8, 1];
nums.sort((a, b) => a - b);
console.log("sort:", nums);

// 13. concat()
let a = [1, 2];
let b = [3, 4];
console.log("concat:", a.concat(b));

// 14. forEach()
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

// 15. map()
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log("map:", doubled);

// 16. filter()
let values = [10, 20, 30, 40];
let filtered = values.filter(num => num > 20);
console.log("filter:", filtered);

// 17. find()
let values2 = [10, 20, 30];
console.log("find:", values2.find(num => num > 15));