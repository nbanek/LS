/*
Problem:
Create a function that takes two strings as  arguments and return
a boolean value if the first string contains all of the letters
of alphabet except the one that is the second argument.

Examples:
isLipogram('abcdefghijklmnopqrstuvwxy', 'z'); //true
isLipogram('abc', 'd'); //false

Data Structure:
Strings

Algorithm:
Create a string with all letters in alphabet
concatenate string 1 with string 2 call it string 3
check for equality to alphabet and string 3

Code:
*/

function isLipogram(string1, string2) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let string3 = string1.concat(string2);
  return string3 === alphabet;
}

console.log(isLipogram('abcdefghijklmnopqrstuvwxy', 'z')); //true
console.log(isLipogram('abc', 'd')); //false
