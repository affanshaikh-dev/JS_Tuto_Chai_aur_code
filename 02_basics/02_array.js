const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// let allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]; // "..." it is a spread operator which use to spread obviously
// console.log(all_new_heros);

const depthArray = [1, 2 , 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realDepthArray = depthArray.flat(Infinity)

// console.log(realDepthArray);

// console.log(Array.isArray("Affan"));
// console.log(Array.from("Affan"));
// console.log(Array.from({name: 'affan'})); // it doesn't give directly an array because, to convert an keyword want its covert key into array or value into array

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));
