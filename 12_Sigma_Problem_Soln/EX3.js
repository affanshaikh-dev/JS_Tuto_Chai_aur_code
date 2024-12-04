const prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter Number to find factorial!"));

// by itraition method
// let res = 1;

// for(let i = 1; i <= num; i++) {
//     res *= i;
// }

// console.log(`The factorial of ${num} is ${res}`);

// by reduce method
function fac(number) {
    let arr = Array.from(Array(number + 1).keys())
    let c = arr.slice(1, ).reduce((a, b) => {
        return a * b
    })

    console.log(c);
    
}

fac(num)