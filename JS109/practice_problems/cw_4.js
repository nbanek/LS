/*
Problem:
  Return the length of the longest vowel-only substring in
  a string.

  input: string
  output: number

  requirements:


Examples:
  "ultrarevolutionariees" => iee => 3

Data Structure:
  String as input, store vowel characters in an array

Algorithm:
  create variables called count and longest
  iterate through a string
    If current character is included in vowel list
      increment count
      if count > longest
      longest = count
    Else
      count = 0;
  return longest
Code:

function solve(s) {
  let cur = 0
  let max = 0
  for (let i = 0; i < s.length; ++i) {
    if ("aeiou".includes(s[i])) {
      cur++
      if (cur > max) {
        max = cur
      }
    } else {
      cur = 0
    }
  }
  return max
}
*/

function solve(str) {
  return str.match(/[aeiou]+/g).sort((a, b) => {
    return b.length - a.length;
  })[0].length;
}


solve("ultrarevolutionariees");