// var c = 300;
let a = 300;

if(true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log(`Inner: ${a}`);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "affan"
    function two() {
        const website = "google"
        // console.log(username);
    }
    // console.log(website);
    // two()
}
one();


if(true) {
    const username = "affan"
    if (username === "affan") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// console.log(addone(5)); 
function addone(num) {
    return num + 1
}

addTwo(5) // this function is not access like this because this type of function not allow call function before deleration
const addTwo = function(num) {
    return num + 2
}