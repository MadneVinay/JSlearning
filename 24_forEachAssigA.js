console.log(`~~~~~~~~~~~~~~~Step 1~~~~~~~~~~~~~~~`);
const array = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
array.forEach((element, index) => {
  console.log(`Index : ${index} of value: ${element}`);
});



console.log(`~~~~~~~~~~~~~~~Step 2~~~~~~~~~~~~~~~`);
array.forEach((element) => {
  if (element > 0) {
    console.log(`Positive Element : ${element}`);
  }
});




console.log(`~~~~~~~~~~~~~~~Step 3~~~~~~~~~~~~~~~`);
let negativeArray = [];
array.forEach((element) => {
  if (element < 0) {
    negativeArray.push(element);
  }
});
console.log("Negative Numbers Array");
console.log(negativeArray);



console.log(`~~~~~~~~~~~~~~~Step 4~~~~~~~~~~~~~~~`);
array.forEach((element) => {
  if (element % 2 == 0) {
    console.log(`Even Element : ${element}`);
  }
});



console.log(`~~~~~~~~~~~~~~~Step 5~~~~~~~~~~~~~~~`);
let sum = 0;
array.forEach((element) => {
  sum += element;
});




console.log(`Addition of All elements is ${sum}`);
console.log(`~~~~~~~~~~~~~~~Step 6~~~~~~~~~~~~~~~`);
array.forEach((element, index) => {
  if (index % 2 == 0) {
    console.log(`Even Indexed Element :${element}`);
  }
});
