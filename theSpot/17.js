/*
Problem:
Create a function that takes an array of objects as an argument
and returns the same array with all the elements sorted
according to it's value in ascending order.

Input: array
Output: array sorted

Example:
sorting([{a: 1}, {a: 0}, {a : 3}]); //=> [{a:0}, {a:1}, {a:3}];

Data Structure:
Array => Object.Values(obj) => Object

Algorithm:
Use array sort method
...compare a - b where a & b are Object.value(item);
Return sorted array

Code:
*/
function sorting(array) {
  return array.sort((a, b) => {
    return Object.values(a) - Object.values(b);
  });
}

console.log(sorting([{a: 1}, {a: 0}, {a : 3}])); //=> [{a:0}, {a:1}, {a:3}];