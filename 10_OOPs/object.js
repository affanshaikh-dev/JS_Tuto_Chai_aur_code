// function multiply5(num) {
//     return num * 5
// }

// multiply5.power = 5

// console.log(multiply5(5));
// console.log(multiply5.power);
// console.log(multiply5.prototype);

function createuser(username, score) {
    this.username = username
    this.score = score
}

createuser.prototype.increment = function() {
    this.score++
}

createuser.prototype.printMe = function() {
    console.log(this.score);
    
}

const chai = new createuser("chai", 25)
const tea = createuser("tea", 250)

chai.printMe()