//1
console.log(`******************************Step 1******************************`);


var greaterNumber = function(value1,value2) {
    var greatestNumber = value1>value2? value1:value2;
    console.log(`Greater Number among '${value1},${value2}' is ${greatestNumber}`);
    
}
greaterNumber(10,-10)
greaterNumber(800,899)


//2
console.log(`******************************Step 2******************************`);

var isEvenorOddNum = function(valu){
    var NO = (valu%2==0)?"Even":"odd"
    return NO;
}
var result = isEvenorOddNum(29)
console.log(`The given Number is ${result}`);
var result = isEvenorOddNum(44)
console.log(`The given Number is ${result}`);
var result = isEvenorOddNum(0)
console.log(`The given Number is ${result}`);
var result = isEvenorOddNum(101)
console.log(`The given Number is ${result}`);

//3
console.log(`******************************Step 3******************************`);

wordlength = function(args1){
    var length = args1.length;
    var evenorodd = length%2==0? "Even": "odd"
    return evenorodd
}
var resultevenorodd = wordlength("JavaScript")
console.log(`Length of the given string is ${resultevenorodd}`);
var resultevenorodd = wordlength("developer")
console.log(`Length of the given string is ${resultevenorodd}`);
var resultevenorodd = wordlength("Google")
console.log(`Length of the given string is ${resultevenorodd}`);