/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

function powersOfTwo(n: number): number[] {
  return Array.from({ length: n + 1 }, (_, idx) => Math.pow(2, idx))
}
// 1 2 3 4
powersOfTwo(0) //, [1])
powersOfTwo(1) //, [1, 2])
powersOfTwo(4) //, [1, 2, 4, 8, 16]
powersOfTwo(2) //, [1, 2, 4]
