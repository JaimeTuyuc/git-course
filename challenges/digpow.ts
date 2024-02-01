/*
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :


If it is the case we will return k, if not return -1.

Note: n and p will always be strictly positive integers.

Examples:
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

// 6 * 6 + 9 * 9 * 9 + 5 * 5 * 5 * 5
// 36 + 729 + 625

// 36 + 729 +

function digPow(n: number, p: number) {
  const result = n
    .toString()
    .split("")
    .reduce(
      (sum: number, n: string, idx: number) =>
        (sum += Math.pow(parseInt(n), p + idx)),
      0
    );

  return (result / n) % 1 != 0 ? -1 : result / n;
}

digPow(89, 1); // 1
digPow(92, 1); // -1
digPow(114, 3); // 9
digPow(46288, 5); // -1
