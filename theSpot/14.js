/*
Problem:
Create a function that takes an array of strings as an
argument and returns the same array with all elements
sorted according to the length of the string
in ascending order.

Input: Array
Output: Sorted array by ascending item length

Examples:
sorting(['o', 'hello', 'llo', 'ello','lo' ]); // => ['o', 'lo', 'llo', 'ello', 'hello']

Data Structure:
Array

Algorithm:
Sort the array using array sort function
...create comparison function within sort
......return -1 for item a length - item b length

Code:
*/

function sorting(array) {
  return array.sort((a, b) => {
    return a.length - b.length;
  });
}

console.log(sorting(['o', 'hello', 'llo', 'ello','lo' ])); // => ['o', 'lo', 'llo', 'ello', 'hello']
