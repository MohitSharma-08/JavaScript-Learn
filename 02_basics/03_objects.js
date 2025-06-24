// singleton, whenever we make using constructor it is singleton(only one of it's kind)


// object literals

const mySym = Symbol("key1")

const jsUser = {
    [mySym] : 'mykey1',
    name: "Mohit",
    "full name": "Mohit Sharma",
    age: 21,
    loc: "noida",
    email: "Mohit@badmash.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "sat"] 

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]); // no dot notation here

// console.log(jsUser[mySym]);

// jsUser.email = "Mohit@bada_badmash.com"
// Object.freeze(jsUser)  // to stop updation of something, does not give error just stops updation
jsUser.email = "Mohit@google.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());

console.log(jsUser.greeting2());

