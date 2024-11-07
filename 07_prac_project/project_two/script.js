let form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)
    let result = document.querySelector("#result")

    // console.log(height, weight);
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `<h3>Please Enter Valid Height</h3>`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `<h3>Please Enter Valid Weight</h3>`
    } else {
        let bmifor = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<h3>BMI Calculation is ${bmifor}</h3>`
        let checkElem = document.createElement("h3")
        if (bmifor < 18.6) {
            checkElem.innerText = `The BMI is Under Weight`
        } else if (bmifor > 18.6 && bmifor < 24.9) {
            checkElem.innerText = `The BMI is Normal Range`
        } else {
            checkElem.innerText = `The BMI is Overweight`
        }
        result.appendChild(checkElem)
    }

})