
function rotate(string, number) {
  for (let idx = 0; idx < number; idx += 1) {
    string = string.slice(1) + string[0];
  }
  return string;
}

console.log(rotate('abcdefg', 3));
//'bcdefga'
//'cdefgab'
//'defgabc'
