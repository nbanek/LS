/*
Problem:
Create a function that takes a string as an argument and
returns a number representing occurences of all letters that
appear exactly twice.

Input: string
Output: number for letter occurances

Requirements: letters are considered a-z

Examples:
countDuplic('123123'); //=> 3
countDuplic('abcdea ab'); //=> 1

Data Structure:
String => Array => Object => Array => Number

Algorithm:
Convert the string to an array using ('') delimiter
Iterate and convert the array using the reduce function
...set the accumulator to an empty object literal
...if the acc[cv] does not exist in the object
......set acc[cv] equal to 1
...else
......increment acc[cv] by 1
...return acc
Iterate the object keys
...filter the keys where the key value > 1
return the filtered array's length

Code:
*/

function countDuplic(string) {
  let strArray = string.replace(/[^a-z]/gi, '').split('');
  if (strArray.length === 0) return 0;

  let numCounts = strArray.reduce((acc, cv) => {
    if (!acc[cv]) {
      acc[cv] = 1;
    } else {
      acc[cv] += 1;
    }
    return acc;
  }, {});
  return Object.keys(numCounts).filter(key => {
    return numCounts[key] === 2;
  }).length;
}
console.log(countDuplic('123123')); //=> 0
console.log(countDuplic('abcdea ab')); //=> 1