/*
Problem:
Create a function that takes two strings as arguments and returns
a boolean value if two words are anagrams, and false if not.

Input: two strings
Output: boolean

Examples:
isAnagram('aba', 'aab'); // true
isAnagram('aba', 'aa'); //false

Data Structure:
String comparison

Algorithm:
Reinitialize both strings to all lowercase and sorted
Compare both strings for equality
Return boolean

Code:
*/

function isAnagram(string1, string2) {
  string1 = string1.toLowerCase().split('').sort().join('');
  string2 = string2.toLowerCase().split('').sort().join('');
  return string1 === string2;
}

console.log(isAnagram('aba', 'aab')); // true
console.log(isAnagram('aba', 'aa')); //false
