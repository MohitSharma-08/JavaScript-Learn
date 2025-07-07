// const coding = ['js', 'ruby', 'java', 'cpp', 'python']

// const values =  coding.forEach ( (item)=> {
//     console.log(item);
// } )

//filter


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter mai call back fn, each value access, condition satisfied values hi return hoti hai

const newNums = myNums.filter( (num) => num >4 )

/* 
const newNums = myNums.filter( (num) =>
    {
    // num > 4 
    // ye kuch return nahi karta hai, kyuki scope start kar dene ke bad khud se return dena hota hai

        return num > 4
    }
)
*/

/*
const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
        
    }
} )

*/
console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter( (kitaab) => kitaab.genre === "History")

// const userBooks = books.filter( (kitaab) => kitaab.publish >= 1995 && kitaab.genre === "History")

// console.log(userBooks);