// Program 5: Anonymous Function with map()


let numbers = [1, 2, 3, 4];

// Double each element
let doubled = numbers.map(function (num) {
    return num * 2;
});

// Print updated array
console.log(doubled);