let btn = document.querySelectorAll(".btns")
let body = document.querySelector("body")

btn.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'green':
                body.style.background = e.target.id
                break;
            case 'red':
                body.style.background = e.target.id
                break;
            case 'blue':
                body.style.background = e.target.id
                break;
            case 'orange':
                body.style.background = e.target.id
                break;
            default:
                alert("Error! Choose right Color!")
                break;
        }
    })
}) 