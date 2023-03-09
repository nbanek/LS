/*
Problem:
Create a function that takes the object that your function returned
as an argument and returns a string with all the letters
that appear in the object in alphabetical order as many times
as the value states.

Examples:
{a:1, k:3, g:2} => 'aggkkk'

Data Structure:
Object => array => string

Algorithm:
Iterate through the objects entries using reduce
...create empty string as accumulator
...concatenate cv[0].repeat(cv[1]) to acc
...return acc


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




function stringBuilder(object) {
  let a = Object.entries(object).reduce((acc, cv) => {
    acc += cv[0].repeat(cv[1]);
    return acc;
  }, "");
  return a.split('').sort().join('');
}

console.log(stringBuilder(countOccurences('abbab')));