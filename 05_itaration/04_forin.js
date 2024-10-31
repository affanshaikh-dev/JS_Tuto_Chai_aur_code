const obj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for (const key in obj) {
//     console.log(`${key}: ${obj[key]}`);
// }

const arr = ["swift", "javascript"]

// for (const key in arr) {
//     const element = arr[key];
//     console.log(element);
// }


const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United State Of America')
map.set('Fr', 'France')

// for (const key in map) {
//     console.log(`${key}: ${map[key]}`); 
// } // it is not itaratable in for in loop