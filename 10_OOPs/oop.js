// const user = {
//     username: 'hitesh',
//     loginCount: 8,
//     signedIn: true,

//     getUserDetail: function() {
//         // console.log('Got user details from database');
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
        
//     }
// }

// // console.log(user.getUserDetail());
// console.log(this);


function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn 

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("hitesh", 5, true);
const userTwo = new User("affan", 8, false);

console.log(userOne.constructor);
// console.log(userTwo);


