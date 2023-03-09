/*
Problem:  Write a function that takes an array of integers
  and rerturns the smallest sum of 5 consecutive numbers.

  Input: array of integers
  Output: Integer

  Requirements: if array is less than 5 numbers return null

Examples:
  console.log(minimumSum([1, 2, 3, 4]) === null);
  console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
  console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
  console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
  console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

Data Structure: \
  Array of integers

Algorithm:
  If array.length < 5 return null
  set minSum to null;
  Iterate from 0 to array.length - 5;
    Sum the numbers from array[current] to array[current + 5]
    if minSum is null set minSum to sum
    if sum < minSum, set minSum to sum
  Return minSum

Code:
*/

function minimumSum(array) {
  if (array.length < 5) return null;
  let minSum = null;
  for (let idx = 0; idx < (array.length - 4); idx += 1) {
    let cutArray = array.slice(idx, idx + 5);
    let sum = cutArray.reduce((acc, cv) => acc + cv);
    if (minSum === null || minSum > sum ) {
      minSum = sum;
    }
  }
  return minSum;
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);