/*

Problem:
Create a function that takes and array of objects as arguments
and returns the same array with all the elements sorted
according to its key in descending order.

Input: Array of objects
Output: Array of objects sorted in place

Examples:
sorting([{0: 1}, {3: 1}, {1 : 1}]); //[{3:1}, {1:1}, {0:1}]


Data Structure:
Array

Algorithm:
Use the array sort method
...compare a and b where a and b are Object.keys(item)
Return sorted array

Code:
*/

function sorting(array) {
  return array.sort((a, b) => {
    return Object.keys(b) - Object.keys(a);
  })
}

console.log(sorting([{0: 1}, {3: 1}, {1 : 1}])); //[{3:1}, {1:1}, {0:1}]
