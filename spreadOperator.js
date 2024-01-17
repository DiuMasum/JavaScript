// spread operator = ... allows an iterable such as an
//                   array or string to able expanded
//                   into seperate elements
//                   (unpacks the elements)

// example 1
let number = [1,2,3,4,5];

let newNumber = [...number];

console.log(newNumber);


// example 2
let fruits = ["apple", "banana", "orange"];

let newFruits = [...fruits, "lichi", "mango"];

console.log(newFruits);