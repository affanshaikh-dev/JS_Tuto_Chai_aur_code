// document.getElementById('image2').onclick = function () {
//     alert("image2")
// }

// attachEvent()
// JQuery - on

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// event Propagation
// false - event bubbling >> low to High
// true - event capturing >> High to Low

// document.getElementById('images').addEventListener('click', (e) => {
//     console.log("clicked inside ul");
// }, false)

// document.getElementById('image2').addEventListener('click', (e) => {
//     console.log("clicked image2");
//     e.stopPropagation()
// }, false)
 

// document.getElementById("google").addEventListener('click', (e) => {
//     e.preventDefault()
// }, false)

document.querySelector('#images').addEventListener('click', (e) => {
    // console.log(e.target.parentNode);
    console.log(e.target.tagName);

    if(e.target.tagName === 'IMG') {
        let removeit = e.target.parentNode;
        removeit.remove();
    } else {
        alert("Chill!")
    }
    // removeit.parentNode.removeChild(removeit)

})




