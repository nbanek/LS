/*


sort both arrays
Iterate through array1
  if (array1[0] ^ 2 !== array2[0])
    return false;
  return true;

*/


function comp(array1, array2) {
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  for (let idx = 0; idx < array1.length; idx += 1) {
    if (array1[idx] ** array1[idx] !== array2[idx]) return false;
  }
  return true;
}

comp([121, 144, 19, 161, 19, 144, 19, 11], );