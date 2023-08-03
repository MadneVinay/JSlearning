var factorial = function(numb){
    let result= 1
if(numb<0 || isNaN(numb)){
    console.log(`Error! Factorial of a negative number and NaN does not exist...`);
}else{
    if(numb==0){
        console.log(`The factorial of ${numb} is 1`);
    }else{
        for (let index = 1; index <= numb; index++) {
            result =result*index
            console.log(result);
        }
    }    
}
}
factorial('vinay')