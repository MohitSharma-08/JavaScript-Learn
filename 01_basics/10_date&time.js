// js date objects represent a single moment in time

let myDate = new Date()
/*
console.log(myDate.toString());
console.log(myDate.toDateString()); //only date
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString()); // both date and time
console.log(myDate.toLocaleDateString()); //slash wale format mai date 23/6/2025
console.log(myDate.toLocaleTimeString()); //only time

console.log(typeof myDate);  // object
*/

// specific date

                        //months start from 0
// let myCreateDate = new Date(2023, 1, 15, 17, 28);
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2024")

// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000)); convert into seconds

let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth() + 1); // +1 to avoid confusion
console.log(newDate.getDate());
console.log(newDate.getDay()); // mon tue


// `${newDate.getDay{}} and the timw` 

newDate.toLocaleString('default', {
    weekday: "long",
});