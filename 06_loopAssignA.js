//  program to count all vowels from string
var vowelsCount = function(str){
     let i=0
    let count = 0
    while ( i <= str.length) {
        let word = str.charAt(i);
        if (word == 'a' || word == 'e' || word == 'i' || word == 'o' || word == 'u' ||
           word == 'A' || word == 'E' || word == 'I' ||word == 'O' || word == 'U' ){
             count = count+1
        }
        i++
    }
    console.log(`All the vowels present in string are ${count}`);
}
vowelsCount("I am very good it developer")

//Program to print sum of cube of numbers 1 to 5

var cubeSum = function(){
    let sum = 0
    let cube = 0
for (let index = 1; index <= 5; index++) {
     cube = index * index * index
    sum = sum + cube
    console.log(`The cube of ${index} :- ${cube}`);
}
console.log(`The sum of all cube :- ${sum}`);
}
cubeSum()


var oddPositionedchars = function(str){
    let word 
    for (let index = 0; index < str.length; index++) {
        word = str.charAt(index)
        if(index%2==1 && word != " "){
            console.log(word);
            
        }
        
    }
    console.log("====================");
}
oddPositionedchars("hard work always pays back")
oddPositionedchars("Soon i will be Angular IT champ")