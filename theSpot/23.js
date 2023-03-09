/*

Problem:
Create a function that takes and array of arrays as an argument
and returns a sorted array in ascending order depending on how
many undefined exist in the array.

Examples:
sortUndefined([[11, undefined, undefined, null, 0], [NaN, {}, ''], [undefined]]); 
// [[NaN, {}, ''], [undefined], [11, undefined, undefined, null, 0] ]

Data Structure:
Array

Algorithm:
Sort the array using sort method
...compare a and b where a and b are lengths of filtered arrays using undefined

Code:
*/

function sortUndefined(array) {
  return array.sort((a, b) => {
    a = a.filter(item => item === undefined).length;
    b = b.filter(item => item === undefined).length;
    return a - b;
  });
}

console.log(sortUndefined([[11, undefined, undefined, null, 0], [NaN, {}, ''], [undefined]])); // [[NaN, {}, ''], [undefined], [11, undefined, undefined, null, 0] ]
