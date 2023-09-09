class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let arrayEmployees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(`Employees From Wipro Company:-`);
console.log(
  arrayEmployees
    .filter((element) => element.emp_company == "Wipro")
    .map((element) => element.emp_name)
);

console.log(`Employees Freom It or HR department:-`);
console.log(
  arrayEmployees
    .filter((element) => element.emp_dept == "IT" || element.emp_dept == "HR")
    .map((element) => element.emp_name)
);

console.log(`EmpId greater than 50, Employees:-`);
console.log(
  arrayEmployees
    .filter((element) => element.emp_id >= 50)
    .map((element) => element.emp_name)
);

console.log(`Employees Whose name starts with 'A'||'V'||'M':-`);
console.log(
  arrayEmployees
    .filter((element) =>
        element.emp_name.startsWith("A") ||
        element.emp_name.startsWith("V") ||
        element.emp_name.startsWith("M"))
    .map((element) => element.emp_name)
);

console.log(`Average Salary of all the employees:-`);
console.log(
    (arrayEmployees.map(element=>element.emp_salary)
    .reduce((sum,element)=>sum+element ))/arrayEmployees.length
);


console.log(`Average Salaray of all employees from IT dept`);

let itEmpSalary = arrayEmployees.filter(element=>element.emp_dept=='IT')
.map(element=>element.emp_salary);
let totalItSalary = itEmpSalary.reduce((sum,element)=>sum+element)

console.log(totalItSalary/itEmpSalary.length);
