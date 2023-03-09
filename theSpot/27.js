/* eslint-disable max-len */
/*
Problem:
Create a function that takes a string as an argument
and returns an array with all the sub-strings of the string.

Input: string
Output: array of substrings

Example:
allSubstr('abcd'); //=> ['a', 'ab', 'abc', 'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd']

Data Structures:
Strings => Array

Algorithm:
Create an empty array called allSubStrs
Iterate the string using a for loop from idx of 1 to string.length
...Iterate the string using a for loop from jdx = idx to string.length + 1
......push a slice of the string from idx to jdx
return allSubStrs

Code:
*/

function allSubstr(string) {
  let allSubStrs = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    for (let jdx = idx; jdx < string.length; jdx += 1) {
      allSubStrs.push(string.slice(idx, jdx + 1));
    }
  }
  return allSubStrs;
}


console.log(allSubstr('abcd')); //=> ['a', 'ab', 'abc', 'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd']
