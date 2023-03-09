/*
Problem:
Create a function that takes an array as an argument and returns
the same array with all elements sorted in alphabetical order

Input: array
Output: same array but sorted alphabetically

Examples:
sorting(['a', 'd', 'a', 'b']); //=> ['a', 'a', 'b', 'd'];
sorting('banana', 'apple', 'pear'); //=> ['apple', 'banana', 'pear']

Data Structure:
Array => Sorted Array

Algorithm:
Use the sort function on the array
...lexographically

Code:
*/

function sorting(array) {
  return array.sort();
}

console.log(sorting(['a', 'd', 'a', 'b'])); //=> ['a', 'a', 'b', 'd'];
sorting(['banana', 'apple', 'pear']); //=> ['apple', 'banana', 'pear']
