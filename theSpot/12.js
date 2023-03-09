/*
Problem:

Create a function that takes an array as an argument and returns
the same array with all elements sorted by descending order

Input: array
Output: array sorted in reverse

Examples:
sorting([3,5,1,2,11,456]); //=> [456,11,5,3,2,1];

Data Structure:
Array => Array

Algorithm:
Sort the array inplace using the sort function
...use comparison function within sort for number sorting
return the array, reveresed

Code
*/

function sorting(array) {
  return array.sort((a, b) => a - b).reverse();
}

console.log(sorting([3,5,1,2,11,456])); //=> [456,11,5,3,2,1];

