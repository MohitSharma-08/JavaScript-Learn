const score = 400       // automatic defining num
// console.log(score);

const num = new Number(100)  // specificaly telling that this is a number
// console.log(num);

// console.log(num.toString().length);
// console.log(num.toFixed(2));

const num2 = 123.8596

// console.log(num2.toPrecision(3));

const num3 = 1000000;
// console.log(num3.toLocaleString('en-IN')); 

//++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.55));

console.log(Math.ceil(19.3));   // rounds-off to the upper value
console.log(Math.floor(10.3));   // rounds-off to the lower value

console.log(Math.min(4,3,6,8));
console.log(Math.max(1,2,3,100));


console.log(Math.random());                     // returns value btw 2 and 1
console.log(Math.floor(Math.random()*10) + 1);  // returns whole value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min )