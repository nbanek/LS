function hasString(string1, string2) {
  return string1.includes(string2);
}

console.log(hasString('abcd', 'd'), //true
hasString('abcd', 'f')); //false
