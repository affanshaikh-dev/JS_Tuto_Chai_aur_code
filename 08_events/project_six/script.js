const ranColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

// console.log(ranColor());
let interval

let body = document.querySelector("body")
document.querySelector("#start").addEventListener('click', () => {
    interval = setInterval(() => { 
        body.style.background = ranColor(); 
    }, 2000);
})

document.querySelector("#stop").addEventListener('click', () => {
    clearInterval(interval)
    interval = null;
})

