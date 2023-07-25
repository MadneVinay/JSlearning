
//1
console.log(`******************************Step 1******************************`);
function squareOfWordLength(value) {
    var lenth = value.length;
    console.log(`The Length of the String is ${lenth}`);
    var result =lenth*lenth;
    return result;
    
}
var result=squareOfWordLength("JavaScript")
console.log(`The Square of Length Of String is ${result}`)
var result=squareOfWordLength("Google Chrome")
console.log(`The Square of Length Of String is ${result}`)
var result=squareOfWordLength("Developer Smart")
console.log(`The Square of Length Of String is ${result}`)


//2
console.log(`******************************Step 2******************************`);
var stringtemp = function () {
    var string1 = "I am Angular Developer"
    var lenth = string1.length;
    var spltn = string1.split(" ");
    var words = spltn.length;
    console.log(`The length of the string is ${lenth} And words present in the same string is ${words}`); 
    console.log(`The result of their division is ${lenth/words}`);  
    console.log(`The result of their multiplication is ${lenth*words}`);  
}
stringtemp()