/*
Problem:
Create a function that takes one string as an argument
and returns a boolean value, true if the string is
a palindrome, false if not.

Input: string
Output: boolean

Examples:
isPalindrome('kayak'); //true
isPalindrome('apple'); //false

Data Structure:
String => Array => Boolean

Algorithm:
Check if string is equal to the string in reverse using array

Code:
*/

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}


console.log(isPalindrome('kayak')); //true
console.log(isPalindrome('apple')); //false
