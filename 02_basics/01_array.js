const myArr = [0, 1, 2, 3, 4, 5]
const animeChar = ["John Libert", "Sung Jinwoo", "Osamu Dazai"];
const myArr2 = new Array(1, 2, 3, 4)
// console.log(animeChar[1]);

// Array Methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(5));

// console.log(animeChar.join());

// slice => not manipulate an orignal array, splice => manipulate an orignal array
console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log("B", myArr);
console.log(myn1);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);



