// function AddNumber(a,b) {
//     console.log(a + b);
    
// }
// AddNumber(8,9)

function AddNumber(a,b) {
    // let number = a + b;
    // return number;
    return a+b;
    
}

// const result = AddNumber(8,5);
// console.log(result);

// function loggeduser(username = 'kkc') {
//     return `${username} has been Logged In`
// }

// console.log(loggeduser());

function LoggedIn(Name) {
    if (!Name){
        console.log("please provide name");
        
    }
    else{
    return `${Name} is logged In`
    }
}
// console.log(LoggedIn());

const user={
    usname:"Mohsin",
    age:24
}

function handleuser(anyuser) {
    // return `He is ${anyuser.usname} and his age is ${anyuser.age} `
    console.log(`He is ${anyuser.usname} and his age is ${anyuser.age} `);
    
}

// console.log(handleuser(user));
// handleuser(user);
handleuser({
    usname:"kkc",
    age:36
})
