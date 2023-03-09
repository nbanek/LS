/*

Problem:
Creat a function that takes a string as an argument and
returns a number representing number of words that occured
more than once in that string.

Input: string of words
Output: number

Examples:
countDuplic('one two one three two'); //=> 2
countDuplic('flower cat cat dog flower dog'); //=> 3

Data structure:
String => array => object => number

Algorithm:
Convert the string to an array using space delimiter to a variable
Iterate and convert the array to an object using the reduce function\
initialize the accumulator to an empty object literal
...if accumulator[current word] does not exist
.......set accumulator[current word] equal to 1
...else
.......increment accumulator[current word]
return accumulator to the variable
Iterate the objects keys and filter them based on which value > 1
return the array of keys length

Code:
*/

function countDuplic(string) {
  let strArray = string.split(' ');
  let wordCounts = strArray.reduce((acc, cv) => {
    if (!acc[cv]) {
      acc[cv] = 1;
    } else {
      acc[cv] += 1;
    }
    return acc;
  }, {});
  return Object.keys(wordCounts).filter(key => {
    return wordCounts[key] > 1;
  }).length;
}

console.log(countDuplic('one two one three two')); //=> 2
console.log(countDuplic('flower cat cat dog flower dog')); //=> 3
