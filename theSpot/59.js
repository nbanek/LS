function swappIt(array) {
  for (let idx = 0; idx < array.length; idx += 2) {
    [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
  }
  console.log(array);
}

swappIt(['a', 0, undefined, [], NaN, {1:2}]);//[0, 'a', [], undefined, {1:2}, NaN]
