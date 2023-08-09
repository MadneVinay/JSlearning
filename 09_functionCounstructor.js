function employee(EmpId, EmpName, Empsalary){
    this.EmpName = EmpName
    this.EmpId = EmpId
    this.Empsalary = Empsalary
}

let employee1 = new employee(4001,"Niketan",23000)
let employee2 = new employee(4002,"Jayant",24000)
let employee3 = new employee(4003,"Sachin",25000)

console.log(`${employee1.EmpId}, ${employee1.EmpName}, ${employee1.Empsalary}` );
console.log(`${employee2.EmpId}, ${employee2.EmpName}, ${employee2.Empsalary}` );
console.log(`${employee3.EmpId}, ${employee3.EmpName}, ${employee3.Empsalary}` );

console.log(employee1);




1,2,9,28,65