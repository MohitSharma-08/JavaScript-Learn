// const tinderUser = new Object()     //singleton object
const tinderUser = {}      // non singleton object

tinderUser.id = '123abc'
tinderUser.name = 'young sammy'
tinderUser.isLoggedIn = false


// console.log(tinderUser);


const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Mohit",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

//console.log(regularUser.fullname?.userfullname.firstname);
// optional chaining, protection if fullname doesn't exit, used when taking responses from api


//combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"} 

// const obj3 = {obj1, obj2}     problem object ke object deta hai

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}         //spreading and joining value

// console.log(obj3);


const users = [                     //objects in array  
    {
        id: 1,
        email: "m@gmail.com"
    },
        {
        id: 1,
        email: "m@gmail.com"
    },
        {
        id: 1,
        email: "m@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));       // returns true/false


// destructuring
 const course = {
    coursename: "Js in Hindi",
    price: "1000"
 }

//  course.coursename
const{coursename: name4} = course 

console.log(name4);


// destructuring of object (used in react)
// const navbar = ({company}) => {

// }

// navbar(company = "apple")