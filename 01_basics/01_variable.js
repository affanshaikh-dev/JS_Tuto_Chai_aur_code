const accountID = 1502 
let accountEmail = "affan@gmail.com" 
var accountPass = "1521"
accountCity = 'Jaipur' 
let accountState;

// accountID = 1502 // not allowed
accountEmail = "affan2@gmail.com"
var accountPass = "251"
accountCity = 'Bangluru'

// console.log(`Account No: ${accountID} \n accountEmail: ${accountEmail} \n AccountPass: ${accountPass} \n City: ${accountCity}`);

console.table([accountID, accountEmail, accountPass, accountCity, accountState]);

/* 
Note* : Prefer not to use var
because of issue in block scope and functional scope
*/

