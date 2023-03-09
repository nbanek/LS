/*
Problem:

Write a function that roates an array by moving the first element to the end of the array
do not modify the original array

input: array
output: array

requirements:
  if input is not an array, return undefined
  if input is an empty array, return an empty array

Examples:
  rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
  rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
  rotateArray(['a']);                    // ["a"]
  rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
  rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
  rotateArray([]);                       // []

  // return `undefined` if the argument is not an array
  rotateArray();                         // undefined
  rotateArray(1);                        // undefined


  // the input array is not mutated
  let array = [1, 2, 3, 4];
  rotateArray(array);                    // [2, 3, 4, 1]
  array;                                 // [1, 2, 3, 4]

Data structure:
  Array

Algorithm:
  Iterate from 0 to the length of the string
    Create copies of left string and right string using slice and index
    Send the right string to be rotated
    Concatenate left and right string

Code:
*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (!array.length) return [];
  return array.slice(1).concat(array[0]);
}

function rotateRightmostDigits(number, place) {
  number = String(number);
  let left = number.slice(0, number.length - place);
  let right = number.slice(number.length - place);

  return (left + rotateArray(right.split('')).join(''));
}

function maxRotation(number) {
  let numString = String(number);
  for (let idx = numString.length; idx > 0; idx -= 1) {
    numString = rotateRightmostDigits(Number(numString), idx);
  }
  console.log(numString);
}


maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845