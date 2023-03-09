/*

Problem:
Create a function that takes an array of strings as an argument
and returns the same array with all elements sorted according
to length of the string in alphabetical order, case insensitve.

Input: Array of strings
Output: Array of strings sorted

Examples:
sorting(['goo', 'A', 'aB', 'Ab', 'c', 'C']); 
// => ['A', 'aB', 'Ab', 'c', 'C', 'goo']

Data:
Array

Algorithm:
Use array sort function
...compare lowercase a to lowercase b

Code: 
*/

function sorting(array) {
  return array.sort((a, b) => {
    // eslint-disable-next-line max-len
    return a.toLowerCase() > b.toLowerCase() ? 1 : a.toLowerCase() < b.toLowerCase() ? -1 : 0;
  });
}

console.log(sorting(['goo', 'A', 'aB', 'Ab', 'c', 'C'])); // => ['A', 'aB', 'Ab', 'c', 'C', 'goo']
