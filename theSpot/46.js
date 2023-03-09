function extractStr(string) {
  return string.split(' ').filter(word => word[0] === 'a');
}

console.log(extractStr('abcd bcd aa')); //[abcd, aa]
