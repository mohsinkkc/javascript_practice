// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(i);
//     if (i==3){
//         console.log("number is 3");
//     }
    
    
// }

// for (let i = 0; i <= 10; i++) {
    
//     console.log(i);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }    
    
// }
// let index = 0;
// while (index <= 10) {
//     console.log(index);
//    index = index + 2  ;
// }

// ForOF
const arr = [1,2,3,4,5,6,7,8]
for (const i of arr) {
    console.log(i)
}

// MAP

const map = new Map()
map.set("name","Mohsin")
map.set("age","26")
map.set("number","98765464")


for (const key of map) {
    console.log(key)
}

for (const [key,value] of map) {
 console.log(key,';-',value)   
}

//ForIn

const myarr={
    name:"mohsin",
    email:"kkc@m.com",
    age:26
}

for (const key in myarr) {
    console.log(myarr[key]);
    
}
