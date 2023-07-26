//1
console.log(`================================Step1================================`);
function maleMarriageEligibility(gender,age,boyname){
var result = (gender == 'male' && age>=21)? `Hey ${boyname} you are eligible for marriage`:`Sorry ${boyname} you are not eligible for marriage`
return result
}
var log = maleMarriageEligibility("male",25,"Billgatess")
console.log(log);
var log = maleMarriageEligibility("male",17,"Stew Jobs")
console.log(log);



//2
console.log(`================================Step2================================`);
function femaleMarriageEligibility(gender,age,girlname){
    var result = (gender == 'female' && age>=18)? `Hey ${girlname} you are eligible for marriage`:`Sorry ${girlname} you are not eligible for marriage`
    return result
    }
    var log = femaleMarriageEligibility("female",16,"Jenifer")
    console.log(log);
    var log = femaleMarriageEligibility("female",27,"Malinda Gates")
    console.log(log);