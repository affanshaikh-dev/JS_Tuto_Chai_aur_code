// const instagram = new Object() // it is a singleton object
// console.log(instagram); 

const instagram = {} // it is not a singleton object
instagram.id = "24bit84"
instagram.user = "Yusuf"
instagram.isLoggedIn = false

// console.log(instagram);

const regularUser = {
    email: "affan@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Shaikh",
            SecondName: "Affan"
        },
    },
    location: "Mumbai"
}

// console.log(regularUser.fullName.userFullName.SecondName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({} /* It is a target object */, /* [ */ obj1, obj2 /* ] -- it is a source object */ )
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 25,
        email: "affan@gmail.com"
    },
    {
        id: 22,
        email: "haroon@gmail.com"
    },
    {
        id: 85,
        email: "shazan@gmail.com"
    }
]

// console.log(users[2].email);

// console.log(Object.keys(instagram));
// console.log(Object.values(instagram));
// console.log(Object.entries(instagram));

console.log(instagram.hasOwnProperty('isLoggedn'));

const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// syntax: const {key} = obj
const {courseInstructor: instructor} = course // object destructure
console.log(instructor);

