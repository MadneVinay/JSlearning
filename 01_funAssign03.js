//1


function hello(){
    console.log("Hello JS");
}
function name1(){
    console.log("My Name is Vinay Madne");
}
hello();
name1();
console.log("=======================================");
//2

function personalDetails(firstName, lastName, collegeName){
    console.log("First Name is:-", firstName, "Last Name is:-", lastName, "College Name is:-", collegeName);
}
personalDetails("Vinay", "Madne", "Dr. Rajendra Gode")

console.log("========================================");
//3
function swapValues(value1, value2) {
    console.log("Before Swapping values are:-")
    console.log( "First Value=>", value1, "Second Value=>", value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swapping values are:-")
    console.log( "First Value=>", value1, "Second Value=>", value2);
    console.log("========================================");
}
swapValues("Virat", "Anushka")
swapValues(1000, 2000)


//4

function addThreeValues(value1, value2, value3) {
    var result = value1 + value2 + value3;
    console.log("The Addition of given characters are:-");
    return result
}
var res = addThreeValues(10.23, 600, 40)
console.log(res);
res = addThreeValues("Hello", "Good", "Morning")
console.log(res);
console.log("=========================================");

function bankDetails(bankName, accNum, location, pincode) {
    console.log("Bank Details are=>", "Bank Name is :-", bankName, "Account Number of Account Holder:-", accNum, "Location of Bank:-", location, "Pincode:-", pincode);
        
}
bankDetails("CITI Bank", 3456782345, "Pune", 431202)
bankDetails("AXIS Bank", 7856782345, "Mumbai", 441202)
bankDetails("HDFC Bank", 8956782345, "Pune", 631202, "Open")