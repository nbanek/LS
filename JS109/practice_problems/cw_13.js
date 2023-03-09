/*
Problem: Given an array of integers find the index where
  the sum of the left side is equal to the right side

  input: array if integers
  output: index as number

  requirements: if no index fulfills the requirements return -1

Examples:

Data structure:
  Array of numbers

Algorithms:
  Iterate from index 1 to end of array
    Sum1 0 to index not inclusive
    Sum2 index + 1 to end of array
      If Sum1 = Sum2
        return index
    Return -1;
Code:
*/

function findEvenIndex(array) {
  let left = 0;
  let right = array.reduce((acc, cv) => acc + cv, 0);
  for (let idx = 0; idx < array.length; idx += 1) {
    right -= array[idx];
    if (left === right) {
      return idx;
    } else {
      left += array[idx];
    }
  }
  return -1;
}


console.log(findEvenIndex([10,-80,10,10,15,35,20]));