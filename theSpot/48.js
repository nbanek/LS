function etractStr (string) {
  return string.match(/\d/g);
}

console.log(etractStr('abcd123acc 227 0 , *&^a')); //['1', '2', '3', '2', '2', '7', '0'];
