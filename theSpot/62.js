function findMe(object, array) {
  let a = Object.values(object).filter(value => {
    return JSON.stringify(value) === JSON.stringify(array);
  });
  return JSON.stringify(array) === JSON.stringify(a[0]);
}

console.log(findMe({'prop1': [1, '2'], 'prop2': 1, 'prop3': [1,2]}, [1, 2])); //true
console.log(findMe({'prop1': [1, '2'], 'prop2': 1, 'prop3': [2, 1]}, [2, 3])); //false
