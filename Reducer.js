const num = [1,2,3,4,5,6,7,8]

const newnum=num.reduce(function(num1,num2){
    console.log(`num1 value is:${num1} and num2 val is : ${num2}`)
    return num1 + num2;
})
console.log(newnum);

const new2=num.reduce((num1,num2) => {
    console.log(`num1 value is:${num1} and num2 val is : ${num2}`)
    return num1 / num2;
},4)
console.log(new2);


const new3=num.reduce((num1,num2) =>  num1 + num2,2)
console.log(new3);