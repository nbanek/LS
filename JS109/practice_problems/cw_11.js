function duplicateCount(text) {
  let counts = text.toLowerCase().split('').reduce((acc, cv) => {
    if (!acc[cv]) {
      acc[cv] = 1;
    } else {
      acc[cv] += 1;
    }
    return acc;
  }, {});

  return (Object.keys(counts).filter(key => {
    return counts[key] > 1;
  }) || []).length;
}

duplicateCount('aaeeddee');