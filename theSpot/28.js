/*
Problem:
Create a function that takes a string as an argument
and returns an array with all the sub-strings of
a given string that are longer than 1 letter

Examples:
allSubstr('abcd');//=> ['ab', 'abc', 'abcd', 'bc', 'bcd', 'cd'];

Data Structure:
String => Array

Algorithm:
Create an empty array called allSubStrs
Iterate the string using a for loop from idx = 1 to idx < string length
...Iterate the string with a for loop from jdx = idx to jdx < string length + 1
......push a slice of the string from idx to jdx
Filter allSubStrs with filter method
...return the item matching the condition of item length > 1
Return filtered array

Code:
*/

function allSubstr(string) {
  let allSubStrs = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    for (let jdx = idx; jdx < string.length; jdx += 1) {
      allSubStrs.push(string.slice(idx, jdx + 1));
    }
  }
  return allSubStrs.filter(item => item.length > 1);
}

console.log(allSubstr('abcd'));//=> ['ab', 'abc', 'abcd', 'bc', 'bcd', 'cd'];
