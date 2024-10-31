const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach((item) => {
//     console.log(item);
// })

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach()

const mycoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]

mycoding.forEach((item) => {
    console.log(item.languageFileName);
})