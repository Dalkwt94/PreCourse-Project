/**
 * REFERENCES:
 * - String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#
 *
 * If you'd like to run your function to test it yourself,
 * uncomment it from the bottom of this file, then run this
 * file with `node project.js`.
 *
 * Good luck!
 */

//============================================================================================//

function sumOdds(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      //numbersUpdated2.push(numbers2[i]);
      sum = sum + numbers[i];
    }
  }

  return sum;
}
sumOdds([2, 2, 4, 6, 2]);
//console.log(sum);
//============================================================================================//

function characterCount(string, c) {
  let count = 0;
  let s1 = string.toUpperCase();
  let s2 = c.toUpperCase();
  for (let i = 0; i < string.length; i++) {
    if (s1[i] === s2) {
      count++;
    }
  }
  return count;
}
characterCount("aAlal", "A");
//console.log(count);
//============================================================================================//

function differences(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    arr.push(numbers[i + 1] - numbers[i]);
  }
  return arr;
}

differences([5, 7, 10, 4, 11]);
//console.log(arr);

//============================================================================================//

function largestIncrement(numbers) {
  let arr = [];
  let b;
  for (let i = 0; i < numbers.length - 1; i++) {
    arr.push(numbers[i + 1] - numbers[i]);
  }

  b = Math.max.apply(null, arr);
  return b;
}

largestIncrement([4, 6, 7, 10, 33]);
//console.log(b);

//============================================================================================//

function afterX(numbers, x) {
  let arr = [];
  let a = 0;
  //let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === x) {
      a = i;
      break;
    }
  }
  arr = numbers.slice(a);

  return arr;
}

afterX([1, 2, 5, 7, 3], 7);
//console.log(arr);
//============================================================================================//

function abbreviate(firstName, lastName) {
  let res;
  let fn = firstName.substring(1, 0);
  let ln = lastName.substring(1, 0);
  res = fn.concat(ln);
  res = res.toUpperCase();

  return res;
}

abbreviate("dalal", "rasheedi");
//console.log(res);

//============================================================================================//

function isUpperCase(string) {
  let b;

  if (string === string.toUpperCase()) {
    b = "true";
  } else {
    b = "false";
  }

  return b;
}

isUpperCase("DALAL");
//console.log(b);

//============================================================================================//

function elementInArray(numbers, x) {
  let b;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === x) {
      b = 1;
    }
  }

  if (b === 1) {
    return (b = "true");
  } else {
    return (b = "false");
  }
}

elementInArray([1, 2, 4, 5, 6], 5);
//console.log(b);

//============================================================================================//

function reverseString(string) {
  let res;
  res = string.split("").reverse().join("");
  return res;
}

reverseString("Dalal");
//console.log(res);

//============================================================================================//

console.log(sumOdds([3, 7, 8, 15, 2, 1, 13]));
console.log(characterCount("Character Count is clever", "c"));
console.log(differences([11, 35, 52, 14, 56]));
console.log(largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]));
console.log(afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(abbreviate("miss", "Stephane"));
console.log(isUpperCase("JCREW"));
console.log(elementInArray([5, 6, 7], 8));
console.log(reverseString("CODED"));

module.exports = {
  sumOdds,
  characterCount,
  differences,
  largestIncrement,
  afterX,
  abbreviate,
  isUpperCase,
  elementInArray,
  reverseString,
};
