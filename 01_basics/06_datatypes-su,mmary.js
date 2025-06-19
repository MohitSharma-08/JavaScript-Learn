// based on how the data is stored in the memory and accessed from it there are 2 datatypes

/*
primitive or call by value

strings, number, boolean, null, undefined, Symbol, BigInt
*/ 

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2);


//bigint
const bigNumber = 54656746887567335665n


/*
non-primitive or reference type

Array
objects
functions
*/

//array
const heros = ["SuperMan", "Iron Man", "Wolverine"]

//object

let myObj = {
    
    name: "Mohit", 
    age: 21
}

//function

const myFUnction = function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber);