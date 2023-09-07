const arrayNum =[20,11,40,25,23,11,9,31,60,2,19]
let grtthn = arrayNum.filter(element=>{
    return element>50
})
console.log(grtthn);

let even = arrayNum.filter(element=>{
    return element%2==0
})
console.log(even);


let odd = arrayNum.filter(element=>{
    return element%2!==0
})
console.log(odd);


let multiple5 = arrayNum.filter(element=>{
    return element%5==0
})
console.log(multiple5);

let list = arrayNum.filter(element=>{
    return element>=20 && element<=50
})
console.log(list);
