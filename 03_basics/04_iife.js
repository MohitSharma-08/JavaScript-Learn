// Immediately Invoked Function Expressions (IIFE)

// named iife
(function chai() {
    console.log("Database connected");
    
})();

// semi colon kyuki iife ko pta mahi stop kab ho, so if er fot 

// first () is for function writing
// the second () is for it's execution


// un named iife
( (name) => {
    console.log(`DB connected ${name}`);
    
} )("hehe")