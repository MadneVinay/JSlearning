const arrayNumbers= [113,45,56,11,32,45,109,799,56,45]
console.log(`Reversed Array`);
console.log(
    arrayNumbers.reverse()
);

console.log(`Sorted array without custom logic`);

console.log(
    arrayNumbers.sort()
);


console.log(`Sorted array in ascending order`);
arrayNumbers.sort((a,b)=>a-b)
console.log(arrayNumbers);


console.log(`Greatest element of array:- ${arrayNumbers[arrayNumbers.length-1]}`);

console.log(`Smallest element of array:- ${arrayNumbers[0]}`);

console.log(`Unique array`);
let uniqueValues = new Set()
for (const element of arrayNumbers) {
    uniqueValues.add(element)
}
console.table(uniqueValues);


console.log(`Unique array without sets`);
let uniqueArray =[]
for (const element of arrayNumbers) {
    if (uniqueArray.includes(element)) {
        continue
    }else{
    uniqueArray.push(element)
}
}
console.log(uniqueArray);