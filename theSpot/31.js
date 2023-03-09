/* eslint-disable max-len */
/*
Problem:
Create a function that takes a string as an argument returns
a boolean value, true if the word is a pangram

Input: String
Output: Boolean

Example:
isPangram("The quick brown fox jumped over the lazy sleeping dog,"); //true
isPanagram('abcd'); //false

Data Structure:
String => Boolean

Algorithm:
Create an object called alphabet with all letters of the alphabet withvalue 1
Iterate the string using a for loop from index 0 to index < string length
...if current letter is in alphabet
......set alphabet[letter] = 0
Use array some method to determine if any letters in alphabet have value of one
return the boolean

Code:
*/
function isPangram(string) {
  let alphabet = {a : 1, b : 1 , c : 1, d : 1, e : 1, f : 1, g : 1, h : 1, i : 1,
    j : 1, k : 1, l : 1, m : 1, n : 1, o : 1, p : 1, q : 1, r: 1, s: 1, t : 1, u : 1,
    v : 1, w : 1, x : 1, y : 1, z : 1};

  for (let idx = 0; idx < string.length; idx += 1) {
    if (alphabet[string[idx]]) {
      alphabet[string[idx]] = 0;
    }
  }
  return !Object.values(alphabet).some(value => value === 1);
}

console.log(isPangram("The quick brown fox jumped over the lazy sleeping dog,")); //true
console.log(isPangram('abcd')); //false
