let score = "33"

// console.log(typeof score);
// console.log(typeof (score)); 


let valueInNumber =  Number(score)
// console.log(typeof valueInNumber);

/* 
but this method is not the best because it changes the type of anything 
so we have to be careful while using this
*/


let num = "33abc"  // this is not a pure number
let valNumber = Number(num)     // conversion
// console.log(typeof valNumber);  // returns number
// console.log(valNumber);       // returns NaN, which is also a special type 


let isLoggedIn = 1      

let booleanIsLoggedIn = Boolean(isLoggedIn)     //converting to boolean
// console.log(typeof booleanIsLoggedIn)           //returns type boolean
// console.log(booleanIsLoggedIn)                  //returns true

/*      during conversion
if kept empty, returns false
if string is passed, returns true 

1   => true
0   => false
""  => false
"a" => true

*/


let someNum = 33

let stringNum = String(someNum)
console.log(typeof stringNum); // type conversion into string
console.log(stringNum)         //returns 33

// operations

let value = 3
let negValue = -value
// console.log(negValue)

let str1 = "hello"
let str2 = "mohit"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + "2");