const user = {
    username: "affan",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this); // this is talk about current context or current values
        
    }
}

// user.welcomeMessage();
// user.username = "yusuf"
// user.welcomeMessage()
// console.log(this);

// function chai() {
//     let username = "affan"
//     console.log(this.username);  // this is not work in function
// }

// const chai = function() {
//     let username = "affan"
//     console.log(this.username);  // this is not work in function
// }

// const chai = () => {
//     let username = "affan"
//     console.log(this);  // this is not work in function
// }

// chai()
 
// basic arrow function 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return 
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 5));
