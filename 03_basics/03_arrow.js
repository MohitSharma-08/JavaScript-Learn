const user = {
    username: "Mohit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website!`);
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage()

console.log(this);

// in browser the global object is window object


// arrow function

// function chai(){
//     let username = "hehe"
//     console.log(this.username);  
// }

// chai()

const chai = () => {
    let username = "hehe"
    console.log(this.username); 
}

// chai() //returns undefined


// normal arrow function

// const addTwo = (num1, num2) => {
//     return num1+num2
// }



// implicit return arrow function

// const addTwo = (num1, num2) => num1+num2
//if we use curly braces we have to use/write the return keyword, and not is we use paranthesis
 

const addTwo =(num1, num2) => ({username: "mohit"})

// to return object we need to wrap it in ()

console.log(addTwo(3,4));