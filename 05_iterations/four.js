// for in is used for objects

const myObject = {
    js: 'JavaScript',
    css: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in myObject) {
    // console.log(`${key} is the shortcut for ${myObject[key]}`);
}


// for in used on array returns keys

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}