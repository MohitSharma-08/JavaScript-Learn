const accountId = 144553
let accountEmail = "mohit@gmail.com"
var accountPassword = "12345678"
accountCity = "goa"   //not reccomended
let accountState   //returns undefined

// accountId = 2      // not allowed as always

/*
prefer not using var
becaise of issue in block scope and functional scope
*/

accountEmail = "m@gmail.com"
accountPassword = "12342"
accountCity = "hmm"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])