function removeEl(array, num) {
  array.splice(array.findIndex(index => index === num), 1);
  return array;
}

let arr = [1,2,3];
let arr3 = removeEl(arr, 2); //[1, 3]
console.log(arr, arr3);

-