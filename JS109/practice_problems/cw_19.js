/*
https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

Problem:
  Given a number, take the digits of the sum of the digits of the number.
  If the value has more than one digit, continue to reduce until a 
  single digit is produced.

  Input: number
  Output: number

  Requirements: The number will always be non-negative

Examples:
      16  -->  1 + 6 = 7
    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
  132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
  493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

Data Structure:
  Number -> String -> Array

Algorithm:
  Convert the number to a string
  Convert the string to an array of numbers
  While number > 10
    Get sum of array values set to number
  Return number;

Code:
*/

function digitalRoot(number) {
  while (number >= 10) {
    number = String(number).split('').reduce((acc, cv) => acc + Number(cv), 0);
  }
  return number;
}

digitalRoot(16);
digitalRoot(942);
console.log(digitalRoot(10));
