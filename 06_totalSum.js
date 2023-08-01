// WAP to get the sum of numbers from 0 to 20
let sum = function(){
    let totalSum = 0;
     for (let index = 1; index <=20; index++) {
         totalSum = totalSum + index;
     }
     console.log(`Sum of first 20 numbers is : ${totalSum}`);
 }
 sum();



 function oddPositionedChars(str) {
    for (let index = 0; index < str.length; index++) {
        const char = str.charAt(index);
        // Log only odd positioned chars on console and do not consider empty spaces
        if (index%2 !=0 && char != ' ') {
            
        }
    }

}
oddPositionedChars("hello");
oddPositionedChars("test");