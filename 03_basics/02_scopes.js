var c = 300      //global scope
let a = 300

if (true){          // block scope
    let a = 10 
    const b = 20
    var c = 30      // var - block scope ke rules follow nahi karta dhang se
    
    console.log("block scope : ", a);
    
}


console.log(a);
// console.log(b);
// console.log(c);