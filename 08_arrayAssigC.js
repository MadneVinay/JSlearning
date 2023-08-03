let array = [4,5,4,5,8,5,7,8,9,7,8]
uniquearray = []
for (const element of array) {
    value = uniquearray.includes(element)
    if (value == false) {
        uniquearray.push(element)
    }
}
console.log(uniquearray);