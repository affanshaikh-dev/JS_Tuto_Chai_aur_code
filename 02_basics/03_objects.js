// singleton 
// Object.create

// object literals
const mySym = Symbol("key1")

const JSUser = {
    name: "Affan",
    "full name": "Shaikh Affan", // we are not directly access this by "." opertor
    [mySym]: "myKey1", 
    age: 17, 
    location: "Mumbai", 
    email: "affan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// we access the object values by '.' opertor or "[]" dot notation  
// console.log(JSUser.age);
// console.log(JSUser["age"]);
// console.log(JSUser["full name"]); 
// console.log(JSUser.mySym); 
// console.log(typeof JSUser.mySym); 
// console.log(JSUser[mySym]); 
// console.log(typeof JSUser[mySym]); 

JSUser.email = "affan@chatgpt.com"
// Object.freeze(JSUser) // it is to freeze an object just like const but its not give an error, we don't edit object after defining freeze
// JSUser.email = "affan@microsoft.com"

JSUser.greeting = function () {
    console.log("Hello JS Users");
}

JSUser.greetingTwo = function () {
    console.log(`Hello JS Users, ${this.name}`);
}
// console.log(JSUser.greeting);
console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());
