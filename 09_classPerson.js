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
  
  const array = [studentJenny, studentStew, studentElon, studentSatya, studentSundar];
  console.log(`Traversing array`);
  for (const student of array) {
      student.show();
  }













  function College(name, year, city, founderName ){
    this.name = name;
    this.year = year;
    this.city = city;
    this.founderName = founderName;
}

 const coep = new College("COEP Pune", 1970, "Pune", "Yogesh Muske");
 console.log(coep);

 let mit = new College("MIT", 1990, "Mumbai", "Sitaji Narayan");
 console.log(mit);

 let shivaji = new College("Shivali College", 2001, "Karad", " Sunil Kadam");
 console.log(shivaji);

 College.prototype.country = "Bharath";

 console.log(`MIT Country : ${mit.country}`);
 console.log(`COEP Country : ${coep.country}`);
 console.log(`Shivaji Country : ${shivaji.country}`);