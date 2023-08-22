console.log('==========Step1==========');

fun = () => {
  console.log("Good Morning,Today is Tuesday");
};
fun();


console.log('==========Step2==========');

multiply = (num1, num2, num3=1) => {
  let result = num1 * num2 * num3;
  console.log(`Multiplication of Given Numbers is:-${result}`);
};
multiply(5, 5, 2);
multiply(10,4); 



console.log('==========Step3==========');

addition = (arg1,arg2,arg3,arg4,arg5)=>{
 return arg1+arg2+arg3+arg4+arg5
}
console.log(addition(100,100,200,349,756));
console.log(addition("I am ","learning ","ES6 ","Features ","in depth"));