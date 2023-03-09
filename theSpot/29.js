/*
Problem:
Create a function that takes a string as an argument and returns an
array with all the sub-string of given string that are exactly 3 letters long

Input: string
Output: Array of substrings exactly 3 chars long

Example:
allSubstr('abcd'); // => ['abc', 'bcd'];


Data Structure:


Code:

*/

function allSubstr(string) {
  let allSubStrs = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    for (let jdx = idx; jdx < string.length; jdx += 1) {
      allSubStrs.push(string.slice(idx, jdx + 1));
    }
  }
  return allSubStrs.filter(item => item.length === 3);
}


console.log(allSubstr('abcd')); // => ['abc', 'bcd'];
