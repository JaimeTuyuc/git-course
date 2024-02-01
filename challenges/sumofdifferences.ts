/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
*/

function sumOfDifferences(arr: number[]): number {
  const sorted = arr.sort((a, b) => b - a)
  // console.log(sorted.slice(0, -1))
  return sorted.reduce((acc: number[], n: number, idx: number) => {
    if (idx < sorted.length - 1) {
      return acc.concat(n - sorted[idx + 1]);
    } else {
      return acc;
    }
  }, []).reduce((count: number, n: number) => count += n, 0)
}

sumOfDifferences([1, 2, 10]) //, 9)
sumOfDifferences([-3, -2, -1]) //, 2)

