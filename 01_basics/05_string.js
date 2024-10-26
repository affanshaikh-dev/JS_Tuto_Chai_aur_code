const name = "affan "
const repoCount = 20

// console.log(name + repoCount + " Value");
// console.log(`Hey! My name is ${name} \nand my repo is ${repoCount}`);

const gameName = new String("Affan-Shaikh") // 2nd method to define string
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("n"));

const substring = gameName.substring(0, 4);
// console.log(substring);

const slicestring = gameName.slice(-12, 4);
// console.log(slicestring);

const trimstring = "        Satoru     ";
// console.log(trimstring);
// console.log(trimstring.trim());

const url = "https://mygovandi.com/index%20page";
// console.log(url.replace("%20", "-"));
console.log(url.includes("mygovandi"));
console.log(gameName.split("-"));



