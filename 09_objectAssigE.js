let sbiBank = {
    bankName : "SBI Bank",
    location :  "Amravati",
    accountNo : 1234567890,
    ifsc :  "SBINo1234",
    intrestRate :   6.7,
    showDetails : function(){
        console.log(`SBI Bank Details:-${this.bankName}${this.location}${this.accountNo}${this.ifsc}${this.intrestRate}`);
    }
}
let hdfcBank = {
    bankName : "HDFC Bank",
    location :"Chandur Bazar",
    accountNo : 9876543021,
    ifsc :  "HDFCNO1234",
    intrestRate :7.6,
    showDetails : function(){
        console.log(`HDFC Bank Details:-${this.bankName}${this.location}${this.accountNo}${this.ifsc}${this.intrestRate}`);
    }
}
let axisbank = {
    bankName :"Axis bank",
    location :"Sham Chowk",
    accountNo :12349876,
    ifsc :"AXISNO1234",
    intrestRate :6.5,
    showDetails : function(){
        console.log(`Axis Bank Details:-${this.bankName}${this.location}${this.accountNo}${this.ifsc}${this.intrestRate}`);
    }
}
let yesBank = {
    bankName :"Yes Bank",
    location :"Rajapeth",
    accountNo :987612345,
    ifsc :"YESNO1234",
    intrestRate :8.1,
    showDetails : function(){
        console.log(`Yes Bank Details:-${this.bankName}${this.location}${this.accountNo}${this.ifsc}${this.intrestRate}`);
    }
}
sbiBank.showDetails()
axisbank.showDetails()
hdfcBank.showDetails()
yesBank.showDetails()