let result = '';
for (let i = 1; i <= 3; i++) {
  for (let j = 3; j > i; j--) {
    result = result.concat(" ");
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    result = result.concat("*");
  }
  result = result.concat('\n');
}
console.log(result);