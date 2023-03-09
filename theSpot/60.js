function transformIt(array) {
  return array.map(elem => {
    return elem[0];
  });
}

console.log(transformIt([[1], [2, [2]], [3]])); // [1,2,3]
