// JS is dynamic typed language which does'nt want any decleration of datatype


// Primitive Datatype 

// 7 Types: 
// String
// Number
// Boolean
// null
// undefined
// symbol
// Bigint

const score = 100; // number
const scorValue = 100.5 // Decimal Number
const Name = "Affan" // String
const isLoggedIn = false; // Boolean 
const outsideTemp = null; // Null 
let userEmail; // Undefined

// symbol
const id = Symbol("123");
const anotherid = Symbol("123");
// console.log(id === anotherid);

// bigint
const bigNumber = 351584558455n;
// console.log(bigNumber);

console.log(typeof score); // number
console.log(typeof scorValue); // number
console.log(typeof Name); // string
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof bigNumber); // function



// Reference (non - primitive)
// Array
// Objects
// Function

const animC = ["Satoru Gojo", "Osamu Dazai", "Sung Jinwoo", "Akatagawa"]; // array

const obj = { // object
    Name: "Affan",
    age: 22
}

const myfucntion = function() { // function 
    console.log("Hello World")
}

console.log(typeof animC); // object
console.log(typeof obj); // object
console.log(typeof myfucntion); // function

