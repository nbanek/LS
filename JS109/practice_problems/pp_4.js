/*
Problem: Write a function that takes and array of integers
and returns the two numbers that are closest together in value.

Input: Array of numbers(integers)
Output: Array of two numbers

Examples:
  console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
  console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
  console.log(closestNumbers([12, 7, 17]));             // [12, 7]

  Data Structure:
    Array in and array out

Algorithm:
Set variable minDiff to null
Set index to 0;
Iterate the array from starting element to array length - 2
  Compute absolute value of the difference between array[index] and array[index + 1]
  If this difference is less than minDiff, store it in minDiff
    Store current index to index
Return [array[index], array[index + 1];

Code:
*/

function closestNumbers(array) {
  let minSum = null;
  let closestNums = null;
  for (let idx = 0; idx < array.length - 1; idx += 1) {
    for (let jdx = idx + 1; jdx < array.length; jdx += 1) {
      if (minSum === null || Math.abs(array[idx] - array[jdx]) < minSum) {
        minSum = Math.abs(array[idx] - array[jdx]);
        closestNums = [array[idx], array[jdx]];
      }
    }
  }
  return closestNums;
}


console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]