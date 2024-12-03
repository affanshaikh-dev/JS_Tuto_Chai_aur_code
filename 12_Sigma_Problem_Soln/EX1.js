const Oper = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

const prompt = require('prompt-sync')();

let ran = Math.random().toFixed(1) 
console.log(ran);

let n1 = parseInt(prompt("Enter First Number:"))
let op = prompt("Enter Operator:")
let n2 = parseInt(prompt("Enter Second Number:"))

if(ran < 0.1) {
    let c  = Oper[op]
    console.log(`The Result is ${eval(`${n1} ${c} ${n2}`)}`)
} else {
    console.log(`The Result is ${eval(`${n1} ${op} ${n2}`)}`)
}



