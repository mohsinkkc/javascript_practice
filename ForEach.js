// ForEach

const myde=["mohsin","faizan","vibhu","kkc","shivam","aliya","dhruv",]

// myde.forEach(function (key) {
//     console.log(key)
// })

myde.forEach( (key)=> {
    console.log(key)
})


const details=[
    {
        name:"Mohsin",
        age:26 
    },
    {
        name:"Vibhu",
        age:23
    },
    {
        name:"devanshu",
        age:25
    },
    {
        name:"faizan",
        age:22
    },
]

details.forEach( (key)=> {
    console.log(key.name)
})

const newnum =details.filter( (key)=> {
    
    return key.name == "Mohsin";
})
console.log(newnum);

const num = [1,2,3,4,5,6,7,8]

// const newval =num.filter( (key)=> key > 3)
// console.log(newval)

const newval=num.filter( (key)=> {
    return key > 3
})
console.log(newval);

const low =[]
num.forEach( (key)=> {
    if (key > 3) {
        low.push(key)
    }
})
console.log(low);

// const number=num.map( (key)=> key+10)
const number = num.map( (key)=>key*10 )
.map( (key)=>key-1 )
.filter( (key)=> key >=30)
console.log(number);

