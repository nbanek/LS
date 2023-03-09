function replaceIt(string1, string2, string3) {
  return string1.replaceAll(string2, string3);
}

console.log(replaceIt('abcdefgaa', 'a', '00'));// '00bcdefg0000'
