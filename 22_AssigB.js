class employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new employee(99, "Mahesh", "HR", 85000, "Infy");

employee = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];
for (const objname of employee) {
  if (objname.emp_company == "TCS") {
    console.log(objname.emp_name,":-", objname.emp_company);
  }
}
console.log(`------------------------------------------------`);

for (const objname of employee) {
    if (objname.emp_dept == "Finance") {
      console.log(objname.emp_dept,":- ", objname.emp_name);
    }
  }

console.log(`------------------------------------------------`);;


  for (const objname of employee) {
    if (objname.emp_name.startsWith('R')) {
      console.log("ID:-",objname.emp_id,"Emp Name:-",objname.emp_name,"Dept:-",objname.emp_dept,"Salary:-",objname.emp_salary,"Company:-",objname.emp_company);
    }
  }

console.log(`------------------------------------------------`);

  for (const objname of employee) {
    if (objname.emp_salary>75000) {
        console.log("Emp Name:-",objname.emp_name,"Salary:-",objname.emp_salary,"Company:-",objname.emp_company);
    }
  }

console.log(`------------------------------------------------`);

  for (const objname of employee) {
    if (objname.emp_salary>=50000 && objname.emp_dept=="IT") {
        console.log("ID:-",objname.emp_id,"Emp Name:-",objname.emp_name,"Dept:-",objname.emp_dept,"Salary:-",objname.emp_salary,"Company:-",objname.emp_company);
    }
  }

console.log(`------------------------------------------------`);

  for (const objname of employee) {
    if (objname.emp_company=="Infy") {
        console.log("ID:-",objname.emp_id,"Emp Name:-",objname.emp_name,"Dept:-",objname.emp_dept,"Salary:-",objname.emp_salary,"Company:-",objname.emp_company);
    }
  }