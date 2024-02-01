/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

const primeFactors = (n: number): string => {
  let result = '';

  for (let divisor = 2; divisor <= n; divisor++) {
    let count = 0;
    while (n % divisor === 0) {
      n /= divisor;
      count++;
    }

    if (count > 0) {
      result += `(${divisor}${count > 1 ? `**${count}` : ''})`;
    }
  }

  return result || `(${n})`;
}

primeFactors(539)
primeFactors(86240)
primeFactors(7775460) //,"(2**2)(3**3)(5)(7)(11**2)(17)")
primeFactors(7919) //,"(7919))
primeFactors(17 * 17 * 93 * 677) //,"(3)(17**2)(31)(677)")

