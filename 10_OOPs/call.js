function setUserName(username) {
    this.username = username
}

function createUser(username, email, pass) {
    setUserName.call(this, username);

    this.email = email
    this.pass = pass
}

const chai = new createUser("chai", "chai@fb.com", "123")

console.log(chai);
