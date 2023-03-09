/*
Problem:
Create a function that takes a string as an argument and
returns an object containting all of the words from the
string and count occurences of that word.

Input: string
Output: Object literal


Examples:
countWords('Hello, hello wolrd'); // => {'hello' : 2, 'world' : 1};

Data Structure:
string => array => object, return object


Algorithm:

convert string to all lower case letters
convert string to an array
iterate the array using reduce function
...set accumulator to an empty object
...if acc[current value] does not exists
......set acc[current value] to 1
...else
......increment acc[current value]
return the object

Code:
*/

function countWords(string) {
  string = string.toLowerCase();
  let regex = new RegExp('\\b\\w+\\b', 'g');
  return string.match(regex).reduce((acc, cv) => {
    if (!acc[cv]) {
      acc[cv] = 1;
    } else {
      acc[cv] += 1;
    }
    return acc;
  }, {});
}

console.log(countWords('Hello, hello world')); // => {'hello' : 2, 'world' : 1};