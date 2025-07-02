// if

// < , > , <= , >= , == , != , === , !==

/*
const temp = 42

if (temp < 50){
    console.log("Less than 50");
}
else{
    console.log("Temperature more than 50");   
}
*/

const score = 200

if (score > 100) {
    // var power = "fly"  // using var makes it a  global variable, can be accessed out of this scope too

    let power = "fly"
    console.log(`User power: ${power}`);
    
}

// console.log(`User power: ${power}`);    // does not work here, because the scope of power variable has ended


// short hand notation

const balance = 1000

// if (balance > 500) console.log("test");



// if(balance > 500){
//     console.log("Less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else{
//     console.log("Lrdd than 1200");   
// }
    

const userLoggedIn = true
const debitCard = true
const creditCard = false

if (userLoggedIn && debitCard || creditCard) {
    console.log("Allow to buy course");
}