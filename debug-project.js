function generateIntegersArray(firstNumber, lastNumber) {
  let integersArray = [];
  while (firstNumber <= lastNumber) {
    integersArray.push(firstNumber);
    firstNumber = firstNumber + 1;
  }

  return integersArray;
}
generateIntegersArray(5, 10);
//console.log(integersArray);

//==================================================//

function noZeroes(numberString) {
  //let numberString;
  let a;
  let b;
  while (numberString.startsWith("0")) {
    numberString = numberString.slice(2);
  }

  a = numberString;

  while (a.endsWith("0")) {
    a = a.slice(0, -2);
  }

  b = a;

  return b;
}
noZeroes("0023404500");
//console.log(b);

// console.log(generateIntegersArray(3, 7));
// console.log(noZeroes("001100"));
module.exports = {
  generateIntegersArray,
  noZeroes,
};
