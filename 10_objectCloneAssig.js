let personalDetails = {
    name:"Vinay Madne",
    age: "22",
    livesIn :"Amravati",
    graduation:"B.E."
}
let collegeDetails = {
    college :"Gode Institute Of Technology & Reasearch",
    location :"Amravati",
    university:"Sant gadge Baba"
}

let wholeDetails ={
    ...personalDetails,
    ...collegeDetails
}
// let wholeDetails = Object.assign(personalDetails,collegeDetails)
console.table(wholeDetails);

let freinds = ["Sanket", "Vishwajeet","Jayant","Niketan"]
Object.freeze(freinds)

for (const iterator of freinds) {
    console.log(`My Freind:-${iterator}`);
}
let string = "Codemind Technology"
let newstring = string.substring(9)
let newstring1 = string.substring(0,9)// for final string concatination
let reverseString=""
for (let index = newstring.length-1; index >= 0 ; index--) {
    const element = newstring.charAt(index);
    reverseString =reverseString.concat(element) 
}
let fstring = newstring1.concat(reverseString) 
console.log(fstring);