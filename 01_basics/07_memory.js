/*
in primitive datatype Stack memory is used

variable declared ka copy milta hai, changes are made in copy 
*/


/* 
Heap is used in non primitive

if the object we have defined goes in heap we get back a refernce of the original value, 
changes are made in the actual data
*/ 

//stack
let myName = "Mohit"

let name2 = myName
name2 = "Tree"

console.log(myName);
console.log(name2);     //will give changed output

//heap
let user1 = {
    email: "User@google.com",
    age: 22
}

let user2 = user1

console.log(user1.email);

user2.email = "User@gmail.com"

console.log(user1.email);   // both will be
console.log(user2.email);   // changed