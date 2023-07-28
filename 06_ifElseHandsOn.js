console.log(`================================ Step 1 ================================`);

var evenodd = function(value){
    if(value%2==0){
        console.log(`Entered "${value}" value is even`);
        return
    }
    console.log(`Entered "${value}" value is odd`);
}
evenodd(45)
evenodd(70)
evenodd(67)
evenodd(98)

console.log(`================================ Step 2 ================================`);
var strglen = function(value){
    var valuelen = value.length;
    if(valuelen>10){
        console.log(`Entered "${value}" string has more than 10 characters`);
        return
    }
    console.log(`Entered "${value}" string has less than 10 characters`);
}
strglen("JavaScript-ES6")


console.log(`================================ Step 3 ================================`);


var strgstart = function(string){    
    if(string.startsWith("Java")){
        console.log(`Entered "${string}" string starts with java`);
        return
    }
    console.log(`Entered "${value}" string does not starts with java`);
}
strgstart("JavaScript Language")
