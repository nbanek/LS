/*
Problem:
  Create a function that returns the number of times
  a substring occurs within a string.

Examples:

Data Structure:

Algorithm:

Code:
*/

function solution(fullText, searchText) {
  let regExp = new RegExp(searchText, 'g');
  return (fullText.match(regExp) || []).length;
}


console.log(solution('abcdeb', 'z'));