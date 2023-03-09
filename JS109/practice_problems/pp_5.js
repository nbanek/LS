/*
Problem: Write a function that takes a string as an argument
  and returns the chracter that occurs the least often in the string.

  Input: String
  Output: Single character string

  Requirements: If there are two characters that occur the same
  number of times, return the one that occurs first in the string
  Character case does not matter

Examples:
  console.log(leastCommonChar("Hello World") === "h");
  console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                              "t");
  console.log(leastCommonChar("Mississippi") === "m");
  console.log(leastCommonChar("Happy birthday!") === ' ');
  console.log(leastCommonChar("aaaaaAAAA") === 'a');

Data structure:
  Object literal to store the counts of character occurances

Algorithm:
  Create and empty object
  Iterate through the string
    Set counts(value) of characters(key)
  Get minimum value of values
  Fine first character that has this minimum value
  Return character

Code:
*/

function leastCommonChar(string) {
  let counts = string.toLowerCase().split('').reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 1;
      return acc;
    }
    acc[char] += 1;
    return acc;
  }, {});
  let minCount = Math.min(...Object.values(counts));
  return Object.keys(counts).find(key => {
    return counts[key] === minCount;
  });

}


console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');
