let employee = `{
    "name":"Aleix Melon",
    "id":"E00245",
    "role":["Dev","DBA"],
    "age": 23,
    "doj":"11-12-2019",
    "married":false,
    "address":{
        "street":"32, Laham St.",
        "city": "INNsbruck",
        "country":"Australia"
    },
    "referred-by":"E0012"
}`

let employeeInfo = JSON.parse(employee)
let role = employeeInfo.role[0]
console.log(role);
let lastName = employeeInfo.name.substring(6) 
console.log(`Last Name:- ${lastName}`);
let date =employeeInfo.doj
let doj = new Date(date)
let year = doj.getFullYear();
console.log(`Year of Joining:- ${year}`);
