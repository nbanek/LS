/*
Problem:

Create a function that takes an array and a string as and
returns the number of occurances the string exists in the array

Examples:

countEle(['name', 'year', 'age', 'name'], 'name'); // => 2
countEle([1,2,3,4,5,1,2,3,4], 2); //=> 2

Data Structure:

Array => string => number

Algorithm:

Create a RegExp for the string
Use the regex match function on the array with the RegExp
return the length of the matched array

Code:
*/

function countEle(array, string) {
  let regex = new RegExp(string, 'g');
  return array.join(' ').match(regex).length;
}

console.log(countEle(['name', 'year', 'age', 'name'], 'name')); // => 2
console.log(countEle([1,2,3,4,5,1,2,3,4], 2)); //=> 2