function smallestCommons(arr) {
  const [min, max] = [...arr].sort((a, b) => a - b);

  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  const gcd = (a, b) => {
    while (b !== 0) {
      a %= b;
      [a, b] = [b, a];
    }
    return a;
  };

  const lcm = (a, b) => (a * b) / gcd(a, b);

  return range.reduce((multiple, curr) => lcm(multiple, curr));
}
