/*
Problem: Return an object containing the number of each character
  in a string

  input: string
  output: object

Example:
  letter_count('arithmetics') //=>
  {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

Data structure:
  Object

Algorithm:
  Create an empty object
  Iterate through the string
    If character doesn't exists as property
      create property and set to 1
    Else
      Increment property value
  Return object

Code:
*/

function letterCount(str) {
  return str.split('').reduce((acc, cv) => {
    if (!acc[cv]) {
      acc[cv] = 1;
      return acc;
    }
    acc[cv] += 1;
    return acc;
  }, {});
}

console.log(letterCount('arithmetics'));