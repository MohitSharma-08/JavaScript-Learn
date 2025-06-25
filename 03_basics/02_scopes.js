var c = 300      //global scope
let a = 300

if (true){          // block scope
    let a = 10 
    const b = 20
    var c = 30      // var - block scope ke rules follow nahi karta dhang se
    
    // console.log("block scope : ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Mohit"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }

    // console.log(website);       // comes not defined
    two()
    
}

// one()

// in nested functions, child functions can access parent function'a variable


if (true){
    const username = "hehe"

    if(username === "hehe"){
        const website = " apple"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);



console.log(addone(5));

// declaring function in this way we can access it before initialization 
function addone(num){  
    return num+1
}


console.log(addTwo(5));

// declaring function in this way(hoisting = declaring and holding it in a variable simultaneously) we cannot access it before initialization, gives error

const addTwo = function(num){   // expression
    return num +2
}
