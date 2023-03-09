/*
Problem:
Create a function that takes on string as an argument
and returns a boolean value, true if isogram, false if not

Input: string
Output: boolean

Examples:
isIsogram('dermatoglyphics'); // true
isIsogram('alabama'); //false

Data Structure:
String => Bool, use an array to store letters

Algorithm:

Create and empty array called seen
Iterate the string using a for loop
...if seen includes current letter
......return false
...else
......push current letter
return true;

Code:
*/

function isIsogram(string) {
  let seen = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    if (seen.includes(string[idx])) {
      return false;
    } else {
      seen.push(string[idx]);
    }
  }
  return true;
}

console.log(isIsogram('dermatoglyphics')); // true
console.log(isIsogram('alabama')); //false
