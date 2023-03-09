/*
Problem:

Create a function that takes two arguments
starting number and end number and returns an array with
numbers starting from startNumber and ending on endNumber

Example:
generateArr(3, 10); // [3, 4, 5, 6, 7, 8, 9, 10]

Data Structure:
Array of numbers

Algorithm:
create and empty array called numbers
Iterate from startNumber to endNumber(inclusive)
...push the current iterationg to numbers
return numbers

Code:

*/

function generateArr(num1, num2) {
  let numbers = [];
  for (let idx = num1; idx <= num2; idx += 1) {
    numbers.push(idx);
  }
  console.log(numbers);
}

generateArr(3, 10); // [3, 4, 5, 6, 7, 8, 9, 10]