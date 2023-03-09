/*
Problem: Given an array of integers, count all the pairs in the array
  and return their count

  input: array of numbers
  output: number

  requirements: if array contains 1 or less numbers, return 0
  count each pair once per number
  max length of array is 1000

Example:
  [1, 2, 5, 6, 5, 2]  -->  2
  [1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4

Data structure:
  Array as input, object to count pairs, number as output

Algorithm:
  Create empty object
  Iterate through the array
    if number does not exist as property
      create property and set to 1
    Else
      increment property by 1

*/

function duplicates(array) {
  let arr = array.reduce((acc, number) => {
    if (!acc[number]) {
      acc[number] = 1;
    } else {
      acc[number] += 1;
    }
    return acc;
  }, {});

  return Object.keys(arr).reduce((acc, cv) => {
    acc += Math.floor(arr[cv] / 2);
    return acc;
  }, 0);
}

duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2, 2]);