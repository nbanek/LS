function generateArr(number1, number2) {
  let newArr = [];
  for (let idx = number1; idx <= number2; idx += 1) {
    newArr.push(idx);
  }
  console.log(newArr);
}



generateArr(3, 10)