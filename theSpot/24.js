/*
Program:
Create a function that takes a string as an argument and returns an array with
all leading sub-strings of that string.

Input: string
Output: array of substrings

Data Structure:
String => Array

Algorithm:
Create and empty array
Iterate the string with a for loop
...push a slice of the string from 0 to current index
return array of substrings

Code:
*/

function allLeadSubstr(string) {
  let subStrs = [];
  for (let idx = 1; idx < string.length; idx += 1) {
    subStrs.push(string.slice(0, idx));
  }
  return subStrs;
}

console.log(allLeadSubstr('abcd')); // => ['a', 'ab', 'abc', 'abcd'];
