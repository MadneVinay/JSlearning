var learYear = function(year){
    if (isNaN(year)|| year <= 0) {
        console.log(`${year} is a invalid data`);
    }else{
        if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {
            console.log(`${year} is a leap year`);
            
        }else{
            console.log(`${year} is not a leap year`);
        }
    }
}
learYear(2020)
learYear(1999)
learYear(1600)
learYear(2022)
learYear(1945)
learYear(null)
learYear("Twenty twenty")
learYear(undefined)
learYear(NaN)
learYear(1750)