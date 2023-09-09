const array_numbers=[20,11,40,25,37,49,9,90,60,2,19]
console.log(`Addition by traditional Way...`);
let sum = 0;
for (const element of array_numbers) {
    sum = sum + element
}
console.log(sum);


console.log(`Addition by reduce method...`);
console.log(
    array_numbers.reduce((sum, element)=> sum + element
    )
);


console.log(`Addition of numbers multiple of 5`);


console.log(
    array_numbers.filter(element=> element%5==0)
    .reduce((sum,element)=> sum+ element)
);