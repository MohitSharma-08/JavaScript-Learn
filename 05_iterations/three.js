// Array specific loops 

// for of loop

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
    
// }

const greetings = "Hello World!"
for (const greet of greetings) {
    if (greet == " ") {
        console.log("space detected");
        break
        
    }
    console.log(`Each character is ${greet}`);
}


// Maps - Map objects hold key-value pairs & remembers the original insertion order of keys, NO DUPLICATE VALUES

const map = new Map()

map.set('IN', "India")
map.set("USSR", "Russia")
map.set("Fr", "France")
map.set('IN', "India")      // won't print this

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value );
    
}

const myObject = {
    "game1" : 'NFS',
    "game2" : 'GTA'
}

 for (const [key, value] of myObject) {
     console.log(key, ':-', value);
 }
        
    
// }

// for of loop does not work on objects