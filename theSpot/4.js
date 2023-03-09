/*
Problem:

Create a function that takes a string as an argument and
returns the number of words in that string

Input: string
Output: number of words in string

Examples:
countWords('hello world'); // => 2

Data Structure:

String => array, use array length

Algorithm:

Split the string into words by using ' ' delimiter
return the array length

Code:
*/

function countWords(string) {
  return string.split(' ').length;
}

console.log(countWords('hello world')); // => 2