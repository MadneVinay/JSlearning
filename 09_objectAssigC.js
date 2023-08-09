console.log(`===============Step 1================`);
const arrayNums = [20,3,4,56,90,400,49]
let arrayNums1 = arrayNums
arrayNums1.push(55,66)
console.log(`Original Array:- ${arrayNums}`);
console.log(`Cloned Array:- ${arrayNums1}`);

console.log(`===============Step 2================`);
let arrayNums2 = [...arrayNums]
arrayNums.push(10,25)
console.log(`Original Array:- ${arrayNums}`);
console.log(`Cloned Array:- ${arrayNums2}`);


console.log(`===============Step 3================`);
let arrayEven =[2,30,14,8]
arrayNums.push(...arrayEven)
console.log(`Array after merger:- ${arrayNums}`);

console.log(`===============Step 4================`);
const employeeInfo ={
    emp_id: 27,
    emp_name: "john Doe",
    salary: {
        july_month : "40,0000INR",
        aug_month : "50,0000INR",
        jun_month : "65,0000INR"
    },
    adress : {
        locality :{
            colony : "OM Vrindavan Society",
            street :"Kanch Pokli, 431202",
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobiles:["+91 8600 3456 88","1800- 4567 32","+91-9096 5678 77"]
}

console.table(employeeInfo.adress);
console.log(`Mobile Numbers:-${employeeInfo.mobiles}`);

let employeeDetails = JSON.parse(JSON.stringify(employeeInfo))
employeeDetails.salary.july_month ="80,0000INR"
employeeInfo.adress.country = "United kingdom"
console.table(employeeInfo);
console.table(employeeDetails);