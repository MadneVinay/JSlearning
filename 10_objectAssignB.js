let bankSbi ={
    bankName : "SBI Bank",
    branch : "Main Chowk Amravati",
    manager: "Aman Chopra",
    isAtmAvailable : "True"
}
bankLocation ={
    streat: "Sham Chowk",
    city : "Amravati",
    pinCode : "444603"
}
let bank = {...bankSbi,...bankLocation}
//let bank = Object.assign(bankSbi,bankLocation)
console.table(bank);

let rateOfIntrest ={
    homeLoanIntrest :"5.6%",
    personalLoanIntrest :"6.7%",
    dueIntrest: "4.6%"
}
let sbiDetails = Object.assign(bankSbi,bankLocation,rateOfIntrest)
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`Details of  SBI Bank :- ${key} = ${element}`);
    }
}