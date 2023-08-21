// Addition using only rest parameter
function add(...args) {
  let sum = 0;
  for (const element of args) {
    sum = sum + element;
  }
  console.log(`Sum using rest parameter:- ${sum}`);
}
add(1, 2, 3, 4, 5, 6, 7);

// addition using two parameters and rest parameters
function add2(num1, num2, ...args) {
  let sum = num1 + num2;
  console.log(`sum of First Two Parameters is:- ${sum}`);
  for (const element of args) {
    sum = sum + element;
  }
  console.log(`sum of Whole Parameters is:- ${sum}`);
}
add2(1, 2, 3, 4, 5, 6);
