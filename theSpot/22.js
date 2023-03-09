/*
Problem:
Create a function that takes an array of objects as an argument and return
sorted array in ascending order depending on sum of an array stored
as a value of key.

Input: Array of objects
Output: Array of objects sorted

Examples:
sortArrOfObj([{arr : [1,2]}, {arr: [11]}, {arr: 1,2,3,0}]); // [{arr : [1,2]}, {arr: 1,2,3,0}, {arr: [11]}];

Data Structure:
Array

Algorithm:
Sort array by array sort method
...compare a and b where a and b are evaluated by the sum of the object value
return sorted array

Code:
*/

function sortArrOfObj(array) {
  return array.sort((a, b) => {
    return Object.values(a).flat().reduce((acc, cv) => acc + cv) -
           Object.values(b).flat().reduce((acc, cv) => acc + cv);
  });
}

console.log(sortArrOfObj([{arr : [1,2]}, {arr: [11]}, {arr: [1,2,3,0]}])); // [{arr : [1,2]}, {arr: 1,2,3,0}, {arr: [11]}];
