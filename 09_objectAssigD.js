let proffesor = {
    profName : "Monika Shirbhate",
    profDept : "CSE",
    profCollege : "Dr. Gode",
    city : "Amravati",
    Feedback : "Best",
    degrees : {
        graduation  : "B.E(CSE)",
        postGraduation :"M.E(Information technology)",
        pHD :"Advance Computing",
        teachersDegrees : function(){
            console.log(`Teachers Degrees:- ${this.graduation} ${this.postGraduation} ${this.pHD}`);
        }
    },
    certificates : ["Hackerrank participation","Certificate in IFE Course","Certificate in Adv Programming"],
    
}
proffesor.degrees.teachersDegrees()
proffesor.totalExperience = "14 Years"
console.log(proffesor);
proffesor.profCollege = "P.R. Patil"
console.table(proffesor)
proffesor.certificates.push("Oracle Certified")
let lastItem = proffesor.certificates.length-1
console.log(proffesor.certificates[lastItem]);
