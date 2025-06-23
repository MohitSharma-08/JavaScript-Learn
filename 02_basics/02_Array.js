const marvel_heroes = ["thor", "spiderman", "hawkeye"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes);  //pushes in original value

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes);   //concat stores in a new array
// console.log(allHeroes);

const all_new_hero = [...marvel_heroes, ...dc_heroes]   // best way to join strings
// console.log(all_new_hero);

const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]] ]

const arr2 = another_Array.flat(Infinity)
console.log(arr2);


console.log(Array.isArray("Mohit"))
console.log(Array.from("Mohit"))
console.log(Array.from({name: "Mohit"}))    // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));