/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/
function multiplicationTable(size: number): number[][] {
  let totalarrays = Array.from({ length: size }, () => [])
  let result: number[][] = [] // Explicitly define the type of result as an array of arrays of numbers
  for (let i = 1; i <= size; i++) {
    let subarray: number[] = [] // Explicitly define the type of subarray as an array of numbers
    for (let j = 1; j <= size; j++) {
      subarray.push(i * j)
    }
    result.push(subarray)
  }
  return result

  // Another approach
  // return [...Array(size)].map((_, i) => [...Array(size)].map((_, j) => (i + 1) * (j + 1)))
}

multiplicationTable(1) //, [[1]])
multiplicationTable(2) //, [[1, 2], [2, 4]])
multiplicationTable(3) //, [[1, 2, 3], [2, 4, 6], [3, 6, 9]]










