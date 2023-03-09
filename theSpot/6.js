/*
Problem:

Create a function that takes two strings as arguments
and returns a number representing occurrences of the
second argument as a sub-string of the first argument

Examples:
countSubstr('Hello, Hello! How are you doing Mellody?', 'ello' );// => 3

Data Structure:
String => number

Algorithm:

Use regex match function to get substring matches

Code:
*/

function countSubstr(string, substr) {
  let regex = new RegExp(substr, 'gi');
  return string.match(regex).length;
}

console.log(countSubstr('Hello, Hello! How are you doing Mellody?', 'ello' ));// => 3