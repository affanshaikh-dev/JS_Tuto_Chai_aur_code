// function addTwoNumber(n1, n2) { // (n1, n2) -- Parameters
//     add = n1 + n2;
//     console.log(add);
// }

// addTwoNumber(5, 5) // arguments
// addTwoNumber(5, 2)

function addTwoNumber(n1, n2) { 
    let add = n1 + n2;
    return add;
}

const result = addTwoNumber(5, 10)
// console.log(`Result: ${result}`);


function loginUserMessage(username = 'affan') {
    if(!username) {
        console.log("Please Enter a Username");
        return;
    }
    return `${username} is logged in`
}

console.log(loginUserMessage());
