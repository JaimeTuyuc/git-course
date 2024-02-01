/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

const findOdd = (xs: number[]): number => {
  let result: number[] = []
  for (let i = 0; i < xs.length; i++) {
    const tempr = countAmount(xs, xs[i])
    if (tempr % 2 != 0) {
      result.push(xs[i])
    }
  }
  return result[0]

  // return xs.reduce( (a,b)=> a^b);

  /*
    (a, b) => a ^ b: This is an arrow function used as the callback for the reduce method. It takes two parameters a and b (representing two elements of the array being processed) and applies the XOR (^) bitwise operator between them.

a ^ b: The XOR operator returns 1 for each position where the corresponding bits of a and b are different, and 0 where they are the same. In this case, it's used to XOR all the numbers in the array.
  */
};

function countAmount(arr: number[], t: number) {
  const result = arr.reduce((acc: number, n: number) => {
    if (n === t) {
      return acc += 1
    }
    return acc
  }, 0)
  return result
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]) //, 5))
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]) //, -1))
findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]) //, 5))
findOdd([10]) //, 10)
findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]) //, 10))
findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]) //, 1))















