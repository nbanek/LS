/*
Problem:
Create a function that takes a string as an argument and returns
an array with all leading sub-strings of that string that are
shorter than 5 letters.

Input: string
Output: Array with substrings less than 5 letters

Examples:
allLeadSubstr('abcdefg'); //=> ['abcd', 'abc', 'ab', 'a'];

Data Structure:
String => Array

Algorithm:
Create an empty array called leadingSubStrs
Iterate the string using a for loop from index = 0 to index < string length + 1
...push a slice of the string from 0 to index
Filter the array using the filter method
...return an item where condition is item length < 5
Return filtered array

Code:
*/

function allLeadSubstr(string) {
  let leadingSubStrs = [];
  for (let idx = 1; idx < string.length + 1; idx += 1) {
    leadingSubStrs.push(string.slice(0, idx));
  }
  return leadingSubStrs.filter(item => item.length < 5).reverse();
}

console.log(allLeadSubstr('abcdefg')); //=> ['abcd', 'abc', 'ab', 'a'];

