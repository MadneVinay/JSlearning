const array = [10, 20, 5, 40, 30, 15]; 
array.forEach( (currentValue, index, array)=>{
    console.log(currentValue, index, array);
} ); 

console.log(`Find the even numbers using forEach`);
array.forEach( (currentValue)=>{
    if (currentValue%2==0) {
        console.log(currentValue);
    }
} ); 


class Student {
    constructor(fullName, rollNo, college, emailId, mobile ){
      this.fullName = fullName;
      this.rollNo = rollNo;
      this.college = college;
      this.emailId = emailId;
      this.mobile = mobile;
    }
    show(){
      console.log(`Student Details is Full Name: ${this.fullName} , Roll Number: ${this.rollNo}
      College Name: ${this.college}, Email Id: ${this.emailId}, Mobile : ${this.mobile}`);
    }
  
  }
  
  let studentJenny = new Student("Jenny Gates", 11, "COEP Pune", "abc@gmail.com", "9096 78 6789");
  
  let studentStew = new Student("Stew Page", 22, "JSPM", "stew@gmail.com", "9867 8989 98");
  
  let studentElon = new Student("Elon Musk", 33, "Standford", "stew@gmail.com", "9867 8989 98");
  
  let studentSatya = new Student("Satya Nadella", 44, "ABC", "stya@gmail.com", "9867 8989 98");
  
  let studentSundar = new Student("Sundar Pichai", 55, "XYZ", "sundar@gmail.com", "9867 8989 98");
  
  const arrayStudent = [studentJenny,studentStew, studentElon, studentSatya, studentSundar  ];
  arrayStudent.forEach( (student)=> {
    console.log(student.fullName, student.emailId);
  });