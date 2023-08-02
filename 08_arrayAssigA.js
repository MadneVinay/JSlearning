let arrayassign = function(){
const arrayFruits = ["Banana", "Orange","Apple","Mango","WaterMelon"]
length = arrayFruits.length
console.log(`First element of Array:- ${arrayFruits[0]} and Last element of Array:- ${arrayFruits[length-1]}`);
arrayFruits.unshift("Papaya")
console.log(arrayFruits);
arrayFruits.splice(4,1)
console.log(arrayFruits);
//arrayFruits.splice(5,0,"Pineapple")   Below line will do same operation as this
arrayFruits.push("Pineapple")
console.log(arrayFruits);
arrayFruits.splice(4,0,"Dragon Fruit")
console.log(arrayFruits);
arrayFruits.splice(2,1,"Kiwi")
console.log(arrayFruits);
console.log(arrayFruits.slice(1,5)); 
console.log(arrayFruits.slice(length-3,length));
}
arrayassign()