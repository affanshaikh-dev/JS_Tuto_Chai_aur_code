// .then() is connected to resolve

// const promise1 = new Promise((resolve, reject) => {
//     // Do an async task 
//     // DB Calls, cryptography, network

//     setTimeout(() => {
//         console.log("Async task is complete");
//         resolve()
//     }, 1000)
// })

// promise1.then(() => {
//     console.log("Promise Consumed");  
// })

// new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         console.log('async task 2');
//         resolve();
//     }, 1000)
// }).then(() => {
//     console.log('async 2 resolved');
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             username: 'chai',
//             email: 'chai@example.com'
//         })
//     }, 1000)
// }) 

// promise3.then((user) => {
//     console.log(user.username);
// })

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if(!error) {
//             resolve({
//                 username: 'Affan',
//                 pass: 'affan@251'
//             })
//         } else {
//             reject('Error! Something Went Wrong')
//         }
//     }, 1000)
// }) 

// const promisefo = promise4.then((user) => {
//     console.log(user); 
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("the promise is either resolved or rejected");
// })

// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if(!error) {
//             resolve({
//                 username: 'Javascript',
//                 pass: 'affan@251'
//             })
//         } else {
//             reject('Error! JS Went Wrong')
//         }
//     }, 1000)
// })

// async function conPromise5() {
//     try{
//         const response = await promise5
//         console.log(response);
//     } catch(error) {
//         console.log(error);
//     }
// }

// conPromise5()

// async function getAllUser () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUser()

// fetch('https://api.github.com/users/affanshaikh-dev').then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })