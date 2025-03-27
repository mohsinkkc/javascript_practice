// Immedately Invoked Function Experssion (IIFE)

// to call the function immedately its id warp in paranthesis ()()

// the normal method
// function hello() {
//     console.log("Hello world");
// }

// hello();

// IIFE Method  
(function world() {
    //named IIFE
    console.log("DB Connected");
    
})();// we we don't give the ; it will not run the other IIfe

// we can also write in arrow function  
((name)=>{
    //unnamed iife
    console.log(`DB Connected By ${name}`);
})('mohsin')
