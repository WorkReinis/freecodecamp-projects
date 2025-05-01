function sumFibs(num) {
  
  let start = [0, 1]
  
  while (true) {
    let nextValue = start[start.length - 2] + start[start.length - 1]
    if (nextValue > num) {
      break
    }
    start.push(nextValue);
  }
  
  let filtered = start.filter(obj => obj % 2 !== 0);
  let result = 0;
  for (let i = 0; i < filtered.length; i++) {
    result += filtered[i];
  }
  
  return result;
}

console.log(sumFibs(1));       // should return 0 (no even Fibonacci numbers < 1)
console.log(sumFibs(1000));    // should return 798 (2 + 8 + 34 + 144 + 610)
console.log(sumFibs(4000000)); // should return 4613732
console.log(sumFibs(4));       // should return 2 (only 2 is an even Fibonacci number < 4)
console.log(sumFibs(75024));   // should return 60696 (2 + 8 + 34 + 144 + 610 + 2584 + 10946 + 46368)
console.log(sumFibs(75025));   // should return 60696 (same as above, since 75025 is not included)
