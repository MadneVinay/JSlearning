let arrayNumbers = function(){
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]
let length = arrayNumbers.length
console.log(`========Find the total elements avaible and log on console ========`);
console.log(length);
console.log(`========Log the first and last element and log on console ========`);
console.log(arrayNumbers[0],arrayNumbers[length-1]);
console.log(`========Log the third last element and log on console ========`);
console.log(arrayNumbers[length-3]);
console.log(`========Find the even numbers for in loop and log on console ========`);
for (let index = 0; index < length; index++) {
    let element = arrayNumbers[index];
    if (element%2==0) {
        console.log(element);
    }
}
console.log(`========Find the odd numbers for in loop and log on console ========`);
for (let index = 1; index < length; index++) {
    let element = arrayNumbers[index];
    if (element%2==1) {
        console.log(element);
    }
}
console.log(`========Find all even positioned numbers and log  sum of it on console ========`);
let sum = 0
for (let index = 0; index < length; index++) {
    if (index%2==0) {
        let element = arrayNumbers[index];
        sum = sum + element
    }
}
console.log(sum); 
console.log(`========Find all odd positioned numbers and log  sum of it on console ========`);
let sum1 = 0
for (let index = 1; index < length; index++) {
    if (index%2==1) {
        let element = arrayNumbers[index];
        sum1 = sum1 + element 
    }
}
console.log(sum1);
console.log(`========Find all  numbers and log  sum of it on console ========`);
let sum2 = 0
for (let index = 0; index < length; index++) {
        let element = arrayNumbers[index];
        sum2 = sum2 + element 
}
console.log(sum2);
console.log(`========Find all  numbers which are multiple by 5 and log it on console ========`);
for (let index = 0; index < length; index++) {
    let element = arrayNumbers[index];
    if (element%5==0) {
        console.log(element);
    } 
}
console.log(`========Find 115 is available in array or not ========`);
console.log(arrayNumbers.includes(115));
console.log(`========Find 23 is available in array or not ========`);
console.log(arrayNumbers.includes(23));
console.log(`========Before index 3 insert 55 ,66 and log on console ========`);
arrayNumbers.splice(3,0,55,66)
console.log(arrayNumbers);
console.log(`========Delete three values from index 4 ========`);
arrayNumbers.splice(4,3)
console.log(arrayNumbers);
}
arrayNumbers()