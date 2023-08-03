var fibonnaci = function(iteration){
    let n1 = 0
    let n2 = 1
    let nextterm 
    for (let index = 1; index <= iteration; index++) {
        console.log(n1)
        nextterm = n1+n2
        n1 = n2
         n2 = nextterm
    }
}
fibonnaci(10)