/*
Problem:

Examples:

Data structure:

Algorithm:
  Create a string with every letter of alphabet
  Iterate through the given string
    If current character is in alphabet
      replace character with ''
  If alphabet is empty return true

Code:
*/

function isPangram(string) {
  let alphabet = 'abecdfghijklmnopqrstuvwxyz';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (alphabet.includes(string[idx])) {
      alphabet = alphabet.replace(string[idx], '');
    }
  }
  if (alphabet.length === 0) {
    return true;
  }
  return false;
}


console.log(isPangram("This is not a pangram."));