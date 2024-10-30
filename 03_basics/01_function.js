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

// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1) {
    return num1
} 
// console.log(calculateCartPrice(200, 300, 500));

// for object handling by function
const user = {
    username: "affan",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is RS.${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "shazan", 
//     price: 399
// })

// for array handling by function
const myNewArray = [200, 500, 800, 900]

function returnSecValue(getArray) {
    return getArray[1];
}

// console.log(returnSecValue(myNewArray));
// console.log(returnSecValue([200, 500, 990, 800]));
