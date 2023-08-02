let array = [10,20,30,40,50,60]
for (let index = array.length-1; index >= 0; index--) {
    const element = array[index];
    console.log(element);
}

for (let index = array.length-1; index >= 0; index--) {
    const element = array[index];
    if(index%2==0){
    console.log(element);
}
}