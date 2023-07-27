console.log(`================================Implicit Conversion to String================================`);

result = '3'+2
console.log(`Here second operand will be converted into string because first operand is string and result will be :- ${result} `);

result = '3'+true
console.log(`second operand will be converted into string because first operand is string and result will be :- ${result} `);


result = '3'+ undefined
console.log(`Here second operand will be converted into string because first operand is string and result will be :- ${result} `);

result = '3'+ null
console.log(`second operand will be converted into string because first operand is string and result will be :- ${result} `);


console.log(`================================Implicit Boolean Conversion to Number================================`);

result = '4'- true
console.log(`Both boolean and string will be converted to number as (-) operator works only as substracter and result will be :- ${result} `);

result = 4+ true
console.log(`Both boolean will be converted to number as (-) operator works only as substracter and result will be :- ${result} `);

result = '4'- false
console.log(`Both boolean and string will be converted to number as (-) operator works only as substracter and result will be :- ${result} `);


console.log(`================================Implicit String  Conversion to Number================================`);

result = '4'- '2'
console.log(`Strings will be converted to number as (-) operator works only as substracter and result will be :- ${result} `);

result = '4'- 2
console.log(`String will be converted to number as (-) operator works only as substracter and result will be :- ${result} `);

result = '4'* 2
console.log(`String will be converted to number as (*) operator works only as substracter and result will be :- ${result} `);

result = '4'/ 2
console.log(`String will be converted to number as (/) operator works only as substracter and result will be :- ${result} `);

console.log(`================================Fun Fact================================`);

result = 0 == ' '
console.log(` :- ${result} `);

result = 0 == '0'
console.log(`String will be converted into number and result will be :- ${result} `);


result = 0 == false
console.log(`Boolean will be converted into number and result will be :- ${result} `);

result = null == undefined
console.log(`Both are empty hence result will be :- ${result} `);

result = 1 == [1]
console.log(`Array also contains same number hence result will be :- ${result} `);

result = 1 == true
console.log(`Boolean will be converted into number and result will be :- ${result} `);

result = 1 == '1'
console.log(`String will be converted into number and result will be :- ${result} `);

