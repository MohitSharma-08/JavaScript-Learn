const myArr = [0, 1, 2, 3, 4, 5]
const hero = ["Ar3tmis", "Iron-Man", "Bali"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1]);

// console.log(myArr['one']);  this is wrong

//Array methods

// myArr.push(6)
// myArr.push(99)

// myArr.pop()

// myArr.unshift(0)       // used rarely, inserts element at start
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()  // converts to string

// console.log(myArr);
// console.log(typeof newArr);


//slice, splice


console.log("A", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);


/*
slice vs splice
         splice also includes the last range
         splice manipulates the original array, deletes the splice part form the original string

*/ 