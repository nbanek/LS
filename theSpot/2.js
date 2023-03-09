/*
Problem:
Create a function that takes a string as an argument and returns an object
with letters of the string and their occurances as properties

input: string
output: object literal

Examples:
countOccurencies('abbab'); => {a:2, b: 3}

Data structure:
Array of letters => object literal of counts

Algorithm:
convert the string to an array
iterate and count the letters in the array using reduce function
...set the accumulator to an empty object
...if the current letter is not present in the object
......set object[current letter] = 1;
...else increment object[current letter]
...return accumulator
return reduced array


Code:

*/

function countOccurences(string) {
  let strArray = string.split("");
  return strArray.reduce((acc, cv) => {
    if (!acc[cv]) {
      acc[cv] = 1;
    } else {
      acc[cv] += 1;
    }
    return acc;
  }, {});
}


console.log(countOccurences('abbab')); //=> {a:2, b: 3}