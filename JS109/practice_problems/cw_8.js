/*
Algorithm:
  Iterate through string2
    If char is included in string1
      replace char in string1 with ''
    Else
      return false
  Return true

*/

function scramble(string1, string2) {
  for (let idx = 0; idx < string2.length; idx += 1) {
    if (string1.includes(string2[idx])) {
      string1 = string1.replace(string2[idx], '');
    } else {
      return false;
    }
  }
  return true;
}


console.log(scramble('cedewaraaossoqqyt', 'codewars'));