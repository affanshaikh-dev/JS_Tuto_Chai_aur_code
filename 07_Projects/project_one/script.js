let btn = document.querySelectorAll(".btns")
let body = document.querySelector("body")

// method one
// btn.forEach((btn) => {
//     // console.log(btn);
//     btn.addEventListener('click', (e) => {
//         switch (e.target.id) {
//             case 'green':
//                 body.style.background = e.target.id
//                 break;
//             case 'red':
//                 body.style.background = e.target.id
//                 break;
//             case 'blue':
//                 body.style.background = e.target.id
//                 break;
//             case 'orange':
//                 body.style.background = e.target.id
//                 break;
//             default:
//                 alert("Error! Choose right Color!")
//                 break;
//         }
//     })
// }) 

// method two
btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.id === "green") {
            body.style.background = e.target.id;
        } else if (e.target.id === "red") {
            body.style.background = e.target.id;
        } else if (e.target.id === "blue") {
            body.style.background = e.target.id;
        } else if (e.target.id === "orange") {
            body.style.background = e.target.id;
        } else {
            alert("Error! Choose right Color.")
        }
    })
}) 