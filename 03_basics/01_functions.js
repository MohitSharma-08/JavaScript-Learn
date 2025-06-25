function addTwoNumbers(number1, number2){
    // result = number1+number2
    // return result

    return number1 + number2

    console.log('mohit'); // return ke baad ka code execute nai hota (unreachable hota)
    
}

addTwoNumbers(3, "5")   // concatenation
// addTwoNumbers(3, null)  // returns the number 

// console.log("result:", result);

function loginUserMessage(username){
    if (!username){ 
        console.log("PLease enter a username");
        return
    }
    return  `${username} just logged in!`
}

// console.log(loginUserMessage("Mohit"));
console.log(loginUserMessage());  // koi value na pass hone pe, undefined aata hai


//shoppping cart

function calculateCartPrice(...num1){     /// ... is both rest and spread operator(based on where they are being used) here it is a rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500)); // vlaue ka array return kar ra

/*

function calcPrice(val1, val2, ...num1){
    return num1
}
console.log(calcPrice(200, 400, 500, 2000)); // returns 500, 2000, first 2 values val1&2 mai gyi

*/

// passing object

const user = {
    username: "Mohit",
    price: "200B $"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
   
}

// handleObject(user)
handleObject({
    username: "sam",
    price: "1B $"
})


// passing array

const arr = [300, 223, 32342, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(arr));

console.log(returnSecondValue([500,504,650056]));