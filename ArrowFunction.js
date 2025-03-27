const user = {
    name: "mohsin",
    email: "mohsin@mail.com",
    message: function username() {
        // console.log(`${this.name} , Welcome`);   
        // console.log(this);
             
    }
}
// user.message();
// user.name = "kkc";
// user.message();
// console.log(this);

// const user2 = ()=>{
//     const user = "sam";
//     console.log(this.user);
    
// }
// user2()

// Explict Return
// const addtwo = (a,b) =>{
//     return a + b
// }
// console.log(addtwo(4,5));

const addtwo = (a,b)=> a + b; // the above can also be written in this as implicit return
// console.log(addtwo(4,5));


let val1 =10;
let val2 = 8;
function addnum(num1 , num2){
    total = num1 + num2;
    return total;
}

let result1 = addnum(val1 , val2);
let result2 = addnum(6,2);

console.log(result1 );
console.log(result2);
