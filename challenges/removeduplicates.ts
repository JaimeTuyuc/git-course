
/*
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
*/

const distinct = (a: number[]): number[] => {
  return [...new Set(a)];

  // Another way
  //! return a.filter((e, i) => a.lastIndexOf(e) === i)
}

distinct([1]) // ).to.eql([1])
distinct([1, 2]) //).to.eql([1,2])
distinct([1, 1, 2]) //).to.eql([1,2])












