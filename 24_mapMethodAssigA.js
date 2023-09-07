const arrayNum =[20,11,40,25,23,11,9,31,60,2,19]
let newarray = arrayNum.map(element=>{
    return element +10
})
console.log(newarray);


let cubeArray = arrayNum.map(element=>{
    return Math.pow(element,3)
})
console.log(cubeArray);


let indexArray = arrayNum.map((element,index)=>{
    return element+index
})
console.log(indexArray);