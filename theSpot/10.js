/*

Problem:
Create a function that takes an array as an argument and returns
a new array containing all of the array elements that appear twice

Input: array
Output: array

Examples:
appearTwice([1, 2, undefined, 'hello', 2, undefined]); //=> [2, undefined];

Data Structure:
Array => Object => Array

Algorithm:
Iterate and convert the array to an object using reduce function
...set acc to an empty object
...if acc[cv] is not present in object
......set acc[cv] value to 1
...else
......increment acc[cv] by 1
...return acc
Iterate the object keys with the filter function
...filter the keys for values equalling 2
return filtered array

Code:
*/

function appearTwice(array) {
  let counts = array.reduce((acc, cv) => {
    if (!acc[cv]) {
      acc[cv] = 1;
    } else {
      acc[cv] += 1;
    }
    return acc;
  }, {});
  return Object.keys(counts).filter(key => {
    return counts[key] === 2;
  });
}

console.log(appearTwice([1, 2, undefined, 'hello', 2, undefined])); //=> [2, undefined];

