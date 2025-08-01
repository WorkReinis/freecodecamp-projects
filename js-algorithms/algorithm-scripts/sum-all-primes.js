function sumPrimes(num) {
  
  
  var sieve = [], i, j, primes = [];
    for (i = 2; i <= num; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }
  
  let result = 0;  
  for (let i = 0; i < primes.length; i++) {
    result += primes[i];
  }  
  
  
  
  return result;
}
