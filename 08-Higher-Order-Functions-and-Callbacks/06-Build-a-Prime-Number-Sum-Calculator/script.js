function isPrime(n) {
  if (n <= 1) return false;

  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

function sumPrimes(num) {
  if (num < 2) {
    return 0;
  } else {
    let nums = new Array();

    for (let i = num; i >= 2; i--) {
      nums.push(i);
    }
    return nums.filter(isPrime).reduce((acc, curr) => acc + curr);
  }
}

sumPrimes(10);
