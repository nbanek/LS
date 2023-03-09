function solution(number) {
  if (number <= 0) return 0;
  let stored = [];
  for (let idx = 0; idx < number; idx += 1) {
    if ((idx % 3 === 0 || idx % 5) === 0 && !stored.includes(idx) ) {
      stored.push(idx);
    }
  }
  return stored.reduce((acc, cv) => acc + cv);
}

solution(10);