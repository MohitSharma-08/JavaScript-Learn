const userEmail = []        //"m@mohit.ai"

if(userEmail) {
    console.log("Got user's email");
}
else{
    console.log("Don't have user email");
}

// truthy or flasey values
/*
falsy values
    false, 0 , -0 , Bigint 0n , "" , null , undefined , NaN


truthy values
    true, "0" , 'false' , " " , [] , {} , function(){}

*/

// if (userEmail.length == 0){
//     console.log("array is mt");
    
// }


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log('mt object');
}

// nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10     returns value on left hand side

// val1 = 10 ?? null

// val1 = undefined ?? null 

val1 = null ?? 10 ?? 15        // first data value gets assigned

console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80"): console.log("More than 80");