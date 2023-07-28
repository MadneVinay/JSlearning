var voteEligible = function(age){
    if(age<=0 || isNaN(age) || age>130){
        console.log(`Sorry given age ${age} is invalid`);
    }else{
        if(age>=18){
            console.log(`You are eligible to vote:${age}`);
        }else{
        console.log(`Sorry You are not eligible to vote: ${age}`);
        }
    }
}
voteEligible(45)
voteEligible(17)
voteEligible(8)
voteEligible(20)
voteEligible(-10)
voteEligible(200)
voteEligible(0)
voteEligible(undefined)
voteEligible(null)