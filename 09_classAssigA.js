//step1
console.log('Step 1 Started......................');
class Vehicle{
    constructor(model,owner,serviceLife,color,company){
    this.model = model
    this.owner = owner
    this.serviceLife = serviceLife
    this.color = color
    this.company = company
    }
    show(){
        console.log(`Vehicles details are: Model:-${this.model},Owner name:- ${this.owner},Remaining Service life:- ${this.serviceLife}, Color:- ${this.color}, Company:-${this.company}`);
    }
}
let vehicle001 = new Vehicle("ABC2015","Amit Malviya",13,"Blue","Honda")

let vehicle002 = new Vehicle("ABD2014","Raj Mane",12,"Blue Gold","Hero")

let vehicle003 = new Vehicle("XYZ2020","Dev Kapoor",17,"Black","Hero")

let vehicle004 = new Vehicle("ABC2019","Manisha Rani",16,"White","Bajaj")

let vehicle005 = new Vehicle("ABC2018","Rajeshvari Mahajan",15,"Silver","Ola")

let array =[vehicle001,vehicle002,vehicle003,vehicle004,vehicle005 ]
for (const vehicles of array) {
    vehicles.show();
}

//step2
console.log('Step 2 Started......................');
class College{
    constructor(collegeName, place,dean,yearsOfSevrve){
    this.collegeName = collegeName
    this.place = place
    this.dean = dean
    this.yearsOfSevrve = yearsOfSevrve
    }
    display(){
        console.log(`College information is: College Name:-${this.collegeName}, Location:-${this.place}, Dean:-${this.dean} Years of Service:-${this.yearsOfSevrve}`);
    }
}

let collegeShivaji = new College("Shivaji College","Panchavati","Purshottam Upadhyay",52)
collegeShivaji.display()

let collegeSarla = new College("Sarla College","kathora","Uttam Badhai",35)
collegeSarla.display()

let collegeDarda = new College("Darda College","Navsari","Vinayakji Mahore",23)
collegeDarda.display()

let collegepete = new College("G.M.Pete College","Br. Thadi","Ramdas Dhurve",34)
collegepete.display()
console.log('Step 3 Started......................');
let traverseobject = function(object){
    for (const key in object) {
        if (object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            console.log(`${key}:-${element}`); 
        }
    }
}
traverseobject(collegeShivaji);
traverseobject(collegeSarla);
traverseobject(collegeDarda);
traverseobject(collegepete);