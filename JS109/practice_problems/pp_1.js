/*
Problem: Given an array of numbers, for each number in the array, determine
how many numbers in the array are smaller than it.

Input: Array of numbers
Output: Array of numbers

Requirements: Only count unique values, that is, if 1 occurs twice, only count
it once.

Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

Data structure: Data is stored in an array

Algorithm:
Iterate through the given array to obtain current number
  Iterate through same array to compare current with others
    If existing count = 1, continue iterating
    If current number > existing, +1 count for existing
  Return array of counts

Code:
*/

function smallerNumbersThanCurrent(array) {
  return array.map(current => {
    let counted = [];
    return array.reduce((acc, cv) => {
      if (counted.includes(cv)) {
        return acc;
      }
      counted.push(cv);
      if (current > cv) acc += 1;
      return acc;
    }, 0);
  });
}


/* ALTERNATE

function smallerNumbersThanCurrent(array) {
  return array.map(number => {
    let seenValues = {};
    let count = 0;
    array.forEach(num => {
      if (!seenValues[num] && num < number) {
        count += 1;
        seenValues[num] = true;
      }
    });
    return count;
  });
}

*/

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]