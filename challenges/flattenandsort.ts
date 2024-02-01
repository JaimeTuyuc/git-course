/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

function flattenAndSort(inputArray: number[][]): number[] {
  return inputArray.flat().sort((a, b) => a - b)
}

flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]) // [1, 2, 3, 4, 5, 6, 100]





















