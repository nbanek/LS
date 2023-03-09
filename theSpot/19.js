/*
Create a function that takes a 2D array as an argument
and returns the same array sorted according to the
sum of elements of inner array in ascending order.

Input: 2D array
Output: 2D array sorted in place ascending

Examples:
sorting([[1,2,3], [0,1], [2,1]]); //=> [[0,1], [2,1], [1,2,3]]

Data Structure:
Array

Algorithm:
Sort the array using the sort method
...compare a and b where a and b are item.reduce((acc, cv) => acc + cv)
return sorted array

Code:
*/

function sorting(array) {
  return array.sort((a, b) => {
    return a.reduce((acc, cv) => acc + cv)
         - b.reduce((acc, cv) => acc + cv);
  });
}

console.log(sorting([[1,2,3], [0,1], [2,1]])); //=> [[0,1], [2,1], [1,2,3]]
