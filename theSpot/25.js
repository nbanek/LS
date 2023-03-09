/*
Problem:
Create a function that takes a string as an argument and returns an
array with all leading sub-strings of that string that are 3 letters
or longer.

Input: string
Output: array of substrings 3 letters or longer

Examples:
allLeadSubstr('abcdef'); //=> ['abc', 'abcd', 'abce', 'abcdef'];

Data Structure:
String => Array

Algorithm:
Initialized an empty array called allSubStr
Iterate the string using a for loop from 0 to idx < string length
...Iterate the string again with a for loop from jdx = idx to jdx < string length - 1
......Push a slice of the string from idx to jdx + 1
Filter allSubStr with the filter method
...return the current item where item length >= 3
Return filtered array

Code:
*/

function allLeadSubstr(string) {
  let allSubStr = [];
  for (let idx = 0; idx < string.length + 1; idx += 1) {
    allSubStr.push(string.slice(0, idx));
  }
  return allSubStr.filter(item => {
    return item.length >= 3;
  });
}

console.log(allLeadSubstr('abcdef')); //=> ['abc', 'abcd', 'abce', 'abcdef'];
