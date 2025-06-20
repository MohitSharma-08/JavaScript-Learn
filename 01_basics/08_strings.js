const name = "Mohit"
const repoCount = 50 

// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const game = new String('Mohit-here')

// returns string as a object

// console.log(game);
// console.log(game[1]);

// console.log(game.length);

// console.log(game.toUpperCase());

// all these operations do not change the original value

/*
console.log(game.charAt(2));    // takes index
console.log(game.indexOf('e')); // takes character

const subStr = game.substring(0,4) // exclude last index and no negative values
console.log(subStr);

const sliceStr =  game.slice(-8, 4)    //takes -ve values
console.log(sliceStr);
*/

const trimStr = "   m   h   "
console.log(trimStr);
console.log(trimStr.trim());


const url = "https://heh.com/mohit%20sharma=a"
console.log(url.replace('%20'. '-'));

console.log(url.includes('sundar'));

console.log(game,split('-'));