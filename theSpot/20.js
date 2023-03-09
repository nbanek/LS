/*
Create a function that takes an multidimensional array as an
 argument and returns the same array sorted according to the
  product of elements of inner arrays in descending order.

Input: 2D array
Output: 2D array sorted in place ascending

Examples:
sorting([[1,2,3], [0,1], [2,1]]); //=> [[1,2,3], [2,1], [0,1]]

Data Structure:
Array

Algorithm:
Sort the array using the sort method
...compare a and b where a and b are item.reduce((acc, cv) => acc * cv)
return sorted array

Code:
*/

function sorting(array) {
  return array.sort((a, b) => {
    return b.reduce((acc, cv) => acc * cv)
         - a.reduce((acc, cv) => acc * cv);
  });
}

console.log(sorting([[1,2,3], [0,1], [2,1]])); //=> [[0,1], [2,1], [1,2,3]]
