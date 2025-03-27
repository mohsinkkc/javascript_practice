let a = 300; // Global Varaiable

if(true) {
    let a=15; // Local Varaiable
    const b = 30; // Local Varaiable
    // console.log(`Inner ${a}`);  
    
}
// console.log(a);

function one() {
    const name = "mohsin"; // global variable for function two
    function two() {
        const player = "rohit";
        console.log(name);        
    }
    two();
    // console.log(player); // it cannot be called becuse it is local scope of function of two.
    
}
one(); // without calling function two the funtion one won't work beacuse we have call the name in funtion two.
