/*
Problem:
Create a function that takes a string as an argument and returns
a boolean, true if the string is in alphabetical order.

Input: String
Output: Boolean if string is in alphabetical order

Examples:
isAlphabetical('abcdefg'); //true
isAlphabetical('adegttksn'); //false

Data Structure:
String

Algorithm:
convert string to lowecase
copy string to new variable
Sort copy in alphanumeric order
return boolean if original lowercase string is equal to copy

Code:
*/

function isAlphabetical(string) {
  let strCopy = string.toLowerCase();
  strCopy = strCopy.split('').sort().join('');
  return string.toLowerCase() === strCopy;
}

console.log(isAlphabetical('abcdefg')); //true
console.log(isAlphabetical('adegttksn')); //false
console.log(isAlphabetical('abcDeg')); //true
