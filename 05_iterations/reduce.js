const myNumbers  = [1,2,3]

// const total = myNumbers.reduce( function (acc, currVal) {
//     console.log(`acc: ${acc} and current value: ${currVal}`);
    
//     return acc + currVal
// }, 0)  // 0 is the value given to accumulator



// using arrow function
const total = myNumbers.reduce( (acc, currVal) => acc+currVal, 0)

console.log(total);



const shoppingCart = [   
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const cartTotal = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(cartTotal);