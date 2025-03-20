const sum = Symbol("welcome")

const details = {
    name:"mohsin",
    sum:"Bye Bye",
    age:21,
    email:"mohsin@gmail.com",
    "full name":"mohsin kkc"
}

console.log(details.email)
console.log(details["full name"])
console.log(details.sum)


details.greet = function(){
    console.log("Hi !! Guys")
}


details.greet2 = function(){
    console.log(`Hey Guys ${this["full name"]} we are here with ${this.name}`)
}
console.log(details.greet());
console.log(details.greet2());



const user = {}

user.id = "1285bdg"
user.age = 25
user.email = "kkc@gmail.com"

// console.log(user)

const regularuser = {
    name:{
        fullname:{
            firstname:"mohsin",
            lastname:"kkc",
        }
    },
}

console.log(regularuser.name.fullname)

const obj1 ={1:"a" , 2:"b"}
const obj2 ={3:"a" , 6:"b"}
const obj3 ={4:"a" , 7:"b"}
const obj4 ={5:"a" , 8:"b"}

// const obj5 = Object.assign({}, obj1,obj2,obj3,obj4)
// console.log(obj5)

const obj5 = {...obj1,...obj2,...regularuser}
console.log(obj5)

const sduser = [
    {
        id:1,
        mail:"m@gmail.com"
    },
    {
        id:2,
        mail:"g@gmail.com"
    },{
        id:3,
        mail:"k@gmail.com"
    },{
        id:4,
        mail:"n@gmail.com"
    }
]


console.log(Object.keys(details));
console.log(Object.values(details));


const course = {
    sub:"eng",
    people:"56",
    sir:"mkkc"
}

// const {people} = course
const {people:peo} = course

// console.log(people);
console.log(peo);

